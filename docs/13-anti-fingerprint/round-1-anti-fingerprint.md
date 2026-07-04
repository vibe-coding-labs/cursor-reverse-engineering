# Cursor 风控、设备指纹与遥测机制分析 (第1轮)

> 目标：系统性地搞清楚 Cursor 的所有风控、设备指纹采集、遥测机制

---

## 一、已验证的风控事件

### 1.1 系统检测到的可疑活动

在首次 ConnectRPC 请求正常返回后，连续测试触发了：

```
ERROR_UNAUTHORIZED
"Your request has been blocked as our system has detected suspicious 
 activity from your account."
```

**触发条件分析**: 短时间内同 token 多 IP 请求、非标准客户端行为、连接模式异常。

### 1.2 模型名称错误

```
ERROR_BAD_MODEL_NAME
"Model name is not valid: 'undefined'"
```

说明 ModelConfig 消息结构验证严格，错误的字段名会导致拒绝。

### 1.3 免费用户限流

```javascript
error: Pl.FREE_USER_RATE_LIMIT_EXCEEDED
title: "You've hit your 200 Free requests this month"
```

---

## 二、设备指纹采集代码分析

### 2.1 采集的字段

从 `always-local` 中提取的 `UploadIssueTrace` 请求 payload:

```protobuf
message UploadIssueTraceRequest {
  string token = 1;
  Platform platform = 2;    // 操作系统
  string device_id = 3;     // 设备 ID
  // ... 
}

message AnalyticsEvent {
  string timestamp = 3;
  string user_id = 4;
  string anonymous_id = 5;  // 匿名 ID
  string message_id = 6;
  string context = 7;       // 上下文
}
```

**关键发现**：每个事件都携带 `device_id` 和 `anonymous_id`，用于跨请求关联用户行为。

### 2.2 设备标识符

| 标识符 | 来源 | 持久化 |
|--------|------|--------|
| `device_id` | 客户端生成 | cookies / Local Storage |
| `anonymous_id` | 客户端生成 | `cursor_anonymous_id` cookie |
| `user_id` | 认证后获得 | Auth0/WorkOS sub |
| `machine_id` | 硬件指纹 | `/home/user/.config/Cursor/machineid` |

### 2.3 Cookie 分析

从前端请求提取到的 cookies:

```
cursor_anonymous_id=0ea045bb-3917-4f53-979e-55247f3d52e2
statsig_stable_id=84d763f7-fb7b-4cd0-a9f7-1f3055cb95eb
_ca_device_id=ca_458685ad-aab1-4912-804c-85c5f3a99f24
__stripe_mid=b75fca58-2085-4e15-8d0a-ade1831336638ed076
WorkosCursorSessionToken=user_01J7... (JWT session token)
```

---

## 三、遥测系统 (三件套)

### 3.1 Statsig (功能开关 + 实验 + 遥测)

| 项目 | 值 |
|------|------|
| Client Key | `client-Bm4HJ0aDjXHQVsoACMREyLNxm5p6zzuzhO50MgtoT5D` |
| 事件代理 URL | `https://api3.cursor.sh/tev1/v1` |
| 前端 SDK | `statsig-js-client` v3.31.0 |
| 稳定 ID | `statsig_stable_id` cookie |

**Statsig 控制的功能**:
```javascript
free_user_locked_model_2026_05    // 免费版模型锁定
free_user_usage_summary_display_mode
pro_auto_mode_new_users
portal_outage_alert
slack_mcp_client_id
file_watcher_metrics_config
smart_allowlist_required
command_blocklist_feature
// 另有 50+ 实验开关...
```

### 3.2 Sentry (错误追踪)

```javascript
DSN1: "https://0a7b82d23ca5f4635708bc8e9957e4bd@o4504648565915648.ingest.us.sentry.io/4509635758522369"
DSN2: "https://80ec2259ebfad12d8aa2afe6eb4f6dd5@metrics.cursor.sh/4508016051945472"
```

捕获的内容：
- JavaScript 运行时错误
- 网络请求失败
- Supabase 认证错误
- AI 请求失败 & 异常
- 性能指标

### 3.3 OpenTelemetry (分布式追踪)

```javascript
traceparent: "00-{trace_id}-{span_id}-01"  // W3C Trace Context
```

所有 API 请求都会生成 traceparent header，服务端链路追踪。

---

## 四、风控触发条件（从代码反向推断）

| 触发条件 | 检测方式 | 响应 |
|---------|---------|------|
| 异常 IP 切换 | IP + token 绑定检查 | `ERROR_UNAUTHORIZED` |
| 非标准 User-Agent | HTTP header 检查 | 415 / 拒绝 |
| 缺少自定义 Header | `x-ghost-mode` 等缺失 | 拒绝 |
| 错误的 Protobuf 格式 | ConnectRPC 分帧验证 | `incomplete envelope` |
| 短时间内大量请求 | 速率限制 | 429 / `ERROR_UNAUTHORIZED` |
| 模型名称验证失败 | 服务端模型列表匹配 | `ERROR_BAD_MODEL_NAME` |
| 设备指纹变化 | cookie + machine_id 关联 | 可能需要重新验证 |

---

## 五、需要继续深挖的方向

1. **machineid 的生成算法** — 位于 `machineid` 文件
2. **Statsig 完整配置列表** — 所有实验开关及其影响
3. **Sentry 上报的完整事件类型** — 哪些错误会上报
4. **ConnectRPC 请求的完整 header 集合** — 所有自定义头
5. **会话关联机制** — session_id 的生成和验证
6. **ModelConfig 正确格式** — 风控解除后调通模型调用的关键

---

## 六、已知 countermeasures

### 避免触发风控的请求参数

| 参数 | 推荐值 |
|------|--------|
| `x-ghost-mode` | `false` |
| `x-cursor-client-version` | `3.7.27` |
| `x-session-id` | 每个会话唯一 UUID |
| `content-type` | `application/connect+json`（必须） |
| 分帧格式 | `\x00 + uint32(body长度) + body` |
| 间隔 | 至少 500ms 以上 |

---

*第1轮分析，2026-06-13*
*下一轮: 继续聚焦 ModelConfig 格式、Statsig 完整配置、Session 关联机制*
