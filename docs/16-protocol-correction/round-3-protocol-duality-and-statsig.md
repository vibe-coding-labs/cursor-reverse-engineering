# Cursor 逆向分析 — 第三轮深度分析报告

> 分析时间: 2026-06-22 12:00~12:20 GMT+8
> 本轮重点: ChatService 协议解析、Statsig 遥测、协议修复确认、proxy.py 更新

---

## 一、协议双重性：DashboardService ≠ ChatService

### 1.1 关键发现

**Cursor 后端使用两种不同的协议：**

| 协议类型 | 服务 | Content-Type | 请求格式 | 响应格式 |
|---------|------|-------------|---------|---------|
| **JSON REST** | DashboardService, AuthService | `application/json` | 纯 JSON 对象 | 纯 JSON 对象 |
| **ConnectRPC** | ChatService (流式) | `application/connect+json` | 5 字节信封 + body | 5 字节信封 + body/SSE |

这就是为什么之前的分析文档中两种说法都有依据：
- `docs/05-communication-protocol/ai-communication-protocol.md` 说 JSON — 正确（适用于 Dashboard）
- `docs/05-communication-protocol/final-communication-protocol.md` 说 ConnectRPC — 也正确（适用于 Chat）

### 1.2 ConnectRPC 信封格式

从 `workbench.desktop.main.js` 的 protobuf.js 运行时确认的信封格式：

```
Request:  Body = JSON (Content-Type: application/connect+json)
          Accept: application/connect+json (unary) 或 text/event-stream (streaming)

Envelope: 1 byte flag (0x00=uncompressed) + 4 byte big-endian length + body

Response: 1 byte flag (0x02=JSON) + 4 byte big-endian length + body
```

### 1.3 ChatService 调用测试结果

| 尝试方法 | HTTP | 原因 |
|---------|:----:|------|
| Content-Type: `application/json` + 纯 JSON body | **415** | 必须用 ConnectRPC |
| Content-Type: `application/connect+json` + envelope | **200** | 但返回 `incomplete envelope` |
| Content-Type: `application/proto` + envelope | **415** | 不支持 proto 格式 |
| Accept: `text/event-stream` | **415** | 流式也需要正确 ConnectRPC |

`StreamUnifiedChatWithTools` 的 `"incomplete envelope"` 错误说明 body 的 json 字段名需要与 protobuf 定义严格匹配。从 protobuf 定义看，顶层字段名必须是 `stream_unified_chat_request` 且有 `no:1` 标签。

**结论**: ChatService 确实使用 ConnectRPC 但需要精确的 Protobuf 消息结构。这解释了为什么之前 R1 报告说 ConnectRPC 空响应 — 因为`{}` 空 body + 405 Method Not Allowed 被误读了。

---

## 二、Statsig 遥测协议完整分析

### 2.1 Statsig 集成方式

Cursor 使用**原生的 Statsig JavaScript Client**（不是自建代理），在 workbench 中完整封装:

```javascript
// 在 workbench.desktop.main.js 中
import { StatsigClient } from "statsig-js-client";

const client = new StatsigClient(statsigClientKey, user, options);
// statsigClientKey = "client-Bm4HJ0aDjXHQVsoACMREyLNxm5p6zzuzhO50MgtoT5D"
```

### 2.2 Statsig 配置

| 配置 | 值 |
|------|-----|
| **SDK Key** | `client-Bm4HJ0aDjXHQVsoACMREyLNxm5p6zzuzhO50MgtoT5D` |
| **Log Event Proxy** | `https://api3.cursor.sh/tev1/v1` |
| **Initialize URL** | `https://featureassets.org/v1` / `https://api.statsigcdn.com/v1` |
| **Config Specs URL** | `https://api.statsigcdn.com/v1` |
| **SDK Type** | `javascript-client` |

### 2.3 Statsig 核心端点

```
POST https://api3.cursor.sh/tev1/v1        — 事件日志代理
GET  https://prodregistryv2.org/v1          — Statsig 注册表
GET  https://featureassets.org/v1           — 功能资产
GET  https://api.statsigcdn.com/v1          — 配置规范 CDN
```

### 2.4 Statsig 事件类型

| 事件名 | 用途 |
|--------|------|
| `statsig::config_exposure` | 配置曝光（配置参数被读取） |
| `statsig::gate_exposure` | 功能开关曝光（gate 被检查） |
| `statsig::layer_exposure` | 实验层曝光 |
| `startup` | 应用启动 |
| `gained_focus` | 窗口获得焦点 |
| `lost_focus` | 窗口失去焦点 |

### 2.5 Statsig 日志缓冲配置

```javascript
BATCH_SIZE = 100           // 批量发送大小
MAX_QUEUE_SIZE = 10000     // 最大队列长度
FLUSH_INTERVAL_MS = 1000   // 刷新间隔
MAX_FLUSH_INTERVAL_MS = 600000  // 最大刷新间隔 (10分钟)
RETRY_INTERVAL_MS = 500    // 重试间隔
BACKOFF = 300000           // Statsig 代理 5 分钟超时
```

### 2.6 遥测链路

```
Cursor Client → api3.cursor.sh/tev1/v1 (Statsig 代理) → statsig.com (Statsig 服务器)
                         ↓
                    api2.cursor.sh 上的 Cursor 后端也接收 Statsig 事件
```

---

## 三、x-cursor-* 请求头完整集（从 workbench.js 源代码验证）

| Header | 来源 | 示例值 |
|--------|------|-------|
| `Authorization` | Bearer JWT token | `Bearer eyJ...` |
| `Content-Type` | `application/json` | 或 `application/connect+json` |
| `x-cursor-client-version` | `productService.version` | `3.7.27` |
| `x-cursor-client-os` | `process.platform` | `linux` |
| `x-cursor-client-os-version` | `os.release()` | `5.15.0-139-generic` |
| `x-cursor-client-arch` | `process.arch` | `x64` |
| `x-cursor-client-device-type` | 固定值 | `desktop` |
| `x-cursor-client-layout` | Electron window 状态 | `"{sidebarVisible:true}"` |
| `x-cursor-timezone` | `Intl.DateTimeFormat` | `Asia/Shanghai` |
| `x-session-id` | `uuid.v4()` | `a1b2c3d4e5f6` |
| `x-ghost-mode` | 用户隐私设置 | `false` |
| `x-cursor-canary` | 实验 flag | `true` |
| `x-cursor-config-version` | 配置版本号 | 数字字符串 |
| `x-cursor-checksum` | `${os}${arch}` | `linuxx64` |
| `x-request-id` | 随机 UUID | `uuid-v4` |
| `x-cursor-rpc-callsite` | 调用点跟踪 | `pr_tab_init` |
| `x-cursor-rpc-kind` | RPC 类型 | `exthost`/`workbench` |
| `x-cursor-server-region` | 服务器区域 | `us1` |
| `traceparent` | OpenTelemetry | `00-{trace_id}-{span_id}-01` |

---

## 四、Protobuf 消息定义提取（从 workbench.desktop.main.js）

### 4.1 GetPlanInfo
```
GetPlanInfoRequest: {}  (无字段)
GetPlanInfoResponse:
  field 1: plan_info (PlanInfo, optional)
  field 2: next_upgrade (NextUpgrade, optional)

PlanInfo:
  field 1: plan_name (string)
  field 2: included_amount_cents (int64)
  field 3: price (string)
  field 4: billing_cycle_end (uint64)

NextUpgrade:
  field 1: tier (string)
  field 2: name (string)
  field 3: included_amount_cents (int64)
  field 4: price (string)
  field 5: description (string)
```

### 4.2 GetMe
```
GetMeRequest: {}  (无字段)
GetMeResponse: {authId, userId, email, firstName, ...}
```

### 4.3 GetCurrentPeriodUsage
```
GetCurrentPeriodUsageRequest: {} (无字段)
GetCurrentPeriodUsageResponse: {billingCycleStart, billingCycleEnd, planUsage, ...}
```

### 4.4 StreamUnifiedChatRequestWithTools (核心 AI 消息)
```
field 1: stream_unified_chat_request (StreamUnifiedChatRequest)
field 2: client_side_tool_v2_result (optional)

StreamUnifiedChatRequest:
  field 1:  conversation (ConversationMessage, repeated)
  field 2:  allow_long_file_scan (bool)
  field 3:  explicit_context (ContextFile, repeated)
  field 4:  can_handle_filenames_after_language_ids (bool)
  field 5:  model_details (ModelDetails)
  field 6:  linter_errors (LinterError)
  field 30: full_conversation_headers_only (bool)
  (还有 30+ 更多字段)
```

---

## 五、proxy.py 修复

本轮已更新 `proxy.py` 中的 `decode_connect_response()` 函数:
- 添加了 flag 校验（仅 flag=0,1,2 时视为 ConnectRPC）
- 添加了说明注释关于协议双重性

---

## 六、仍待分析的领域（后续轮次）

### Priority 1 (P1 - 高)
1. **ChatService 调用修复** — 需要精确匹配 Protobuf 消息结构
2. **Agent Store 虚拟文件系统** — cursor-agent-exec 的 FUSE 文件系统实现
3. **Statsig 遥测重构** — 模拟 Statsig 客户端以获取所有 feature gates

### Priority 2 (P2 - 中)
4. **cursor-retrieval (31MB) 深度分析** — 代码智能和检索协议
5. **cursor-mcp (2.9MB) 深度分析** — MCP 协议实现细节
6. **网络隧道协议** — cursor-tunnel/code-tunnel 的 SSH/WSS 隧道

### Priority 3 (P3 - 低)
7. **风控绕过策略** — 基于 20+ 轮 anti-fingerprint 分析的实战实现
8. **浏览器自动化** — cursor-browser-automation 的 CDP 实现
9. **代码提交和 Git 协议** — cursor-commits 的提交管理

---

## 📋 本轮完成项

- [x] 确认协议双重性（JSON vs ConnectRPC 按服务区分）
- [x] ChatService 连接测试 + 错误分析
- [x] Statsig 遥测协议完整重建（endpoint, 缓冲, 事件类型）
- [x] 完整的 x-cursor-* 请求头清单（18 个）
- [x] Protobuf 消息定义提取（GetPlanInfo, GetMe, ChatService）
- [x] proxy.py decode_connect_response 修复
- [x] 输出第三轮分析报告
