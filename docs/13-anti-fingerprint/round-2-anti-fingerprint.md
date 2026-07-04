# Cursor 风控、设备指纹与遥测机制分析 (第2轮)

## 一、设备指纹采集完整分析

### 1.1 machineId 生成体系

Cursor 采集 **4 种设备标识符**，全部通过 `commonProperties` 随遥测上报：

```javascript
h["common.machineId"] = s;        // 机器 ID（主标识）
h["common.macMachineId"] = o;     // macOS 机器 ID
h["common.sqmId"] = a;            // SQM ID（微软质量指标）
h["common.devDeviceId"] = c;      // 设备 ID
h.sessionID = Xr() + Date.now();  // 会话 ID = UUID + 时间戳
```

`machineId` 通过 `abuseService.getMachineId()` 获取，是风控系统的核心标识。

### 1.2 完整的 x-cursor-* 自定义 Header 清单

共计 **18 个**自定义 header，每次 API 请求携带：

| Header | 作用 | 值示例 |
|--------|------|--------|
| `x-cursor-client-version` | 客户端版本标识 | `3.7.27` |
| `x-cursor-client-arch` | CPU 架构 | `x64` |
| `x-cursor-client-os` | 操作系统 | `linux` |
| `x-cursor-client-os-version` | 系统版本 | `"20.04.3 LTS"` |
| `x-cursor-client-type` | 客户端类型 | `desktop` / `web` |
| `x-cursor-client-layout` | UI 布局 | `desktop` |
| `x-cursor-client-device-type` | 设备类型 | `desktop` |
| `x-cursor-timezone` | 时区 | `Asia/Shanghai` |
| `x-cursor-config-version` | 配置版本哈希 | `hex` |
| `x-cursor-canary` | 是否 Canary 版本 | `true` |
| `x-cursor-checksum` | 文件校验和 | `sha256` |
| `x-cursor-remote-type` | 远程类型 | `ssh` / `wsl` |
| `x-cursor-server-region` | 服务器区域 | `us-east-1` |
| `x-cursor-simulate-slow-provider` | 调试用 | `boolean` |
| `x-cursor-rpc-callsite` | RPC 调用点 | `string` |
| `x-cursor-rpc-exthost` | RPC 扩展主机 | `boolean` |
| `x-cursor-rpc-kind` | RPC 类型 | `unary` / `stream` |
| `x-cursor-rpc-workbench` | RPC 工作台 | `boolean` |

### 1.3 其他自定义 Header

| Header | 作用 |
|--------|------|
| `x-ghost-mode` | 隐私模式标志 |
| `x-new-onboarding-completed` | 新手引导完成 |
| `x-session-id` | 会话 ID (UUID) |
| `x-request-id` | 请求 ID (UUID) |
| `traceparent` | OpenTelemetry 追踪 |
| `x-amzn-trace-id` | AWS 追踪 (仅某些请求) |
| `x-background-composer-env` | 后台 Composer 环境 |
| `x-client-key` | 客户端密钥 |
| `x-cursor-rpc-callsite` | RPC 调用位置追踪 |
| `x-chat-context` | 聊天上下文 |

---

## 二、会话与设备关联机制

### 2.1 多重视角标识

```
web 端 cookie:    cursor_anonymous_id → statsig_stable_id → WorkosCursorSessionToken
desktop 端:       machineId → macMachineId → sessionID → deviceId
API 层:           x-session-id → Authorization → x-cursor-client-*
```

### 2.2 会话 ID 生成

```javascript
// Xr() 生成 UUID v4
sessionID = Xr() + Date.now();
```

服务端通过 `x-session-id` 和 `sessionID` 关联同一会话内的所有请求。

### 2.3 跨请求关联链条

```
Cookie/Storage → 匿名 ID + 稳定 ID
                    ↓
JWT Token → user_id (登录后)
                    ↓
machineId → 硬件指纹（持久化）
                    ↓
x-session-id → 会话（临时）
```

---

## 三、Statsig 实验开关分析

### 3.1 已知的实验开关（部分）

从代码中提取的 Statsig 配置键：

| 开关名 | fallback | 功能 |
|--------|----------|------|
| `free_user_locked_model_2026_05` | control | 免费版模型锁定 |
| `free_user_usage_summary_display_mode` | control | 免费版用量显示 |
| `portal_outage_alert` | disabled | 故障告警 |
| `slack_mcp_client_id` | hardcoded | Slack MCP 集成 |
| `file_watcher_metrics_config` | default | 文件监视指标 |
| `smart_allowlist_required` | false | 智能白名单 |
| `command_blocklist_feature` | false | 命令黑名单 |
| `use_model_parameters` | false | 模型参数 |
| `enable_pty_auth` | true | PTY 认证 |
| `http1_keepalive_disabled` | false | HTTP/1.1 保活 |
| `http2_defer_retired_abort_open_streams` | false | HTTP/2 流管理 |

### 3.2 Statsig 遥测

前端 SDK: `statsig-js-client` v3.31.0
数据上报: `https://api3.cursor.sh/tev1/v1`
设备 ID: `statsig_stable_id` cookie（持久化）

---

## 四、Sentry 错误上报

```
DSN 1: o4504648565915648.ingest.us.sentry.io / 4509635758522369
DSN 2: metrics.cursor.sh / 4508016051945472
```

Sentry 捕获范围：
- AI 请求异常 (`AiRequestEvent`)
- 工具调用失败
- 认证错误 (`token refresh failure`, `login error`)
- Canvas 共享失败
- 后台同步失败
- 模型名解析失败

---

## 五、风控系统检测维度汇总

| 维度 | 检测方式 | 严重程度 |
|------|---------|:--------:|
| **机器身份** | `machineId` + `macMachineId` | 🔴 硬绑定 |
| **网络身份** | IP + `x-session-id` + cookies | 🟡 中 |
| **用户身份** | JWT `sub` + `user_id` | 🔴 硬绑定 |
| **行为模式** | 请求频率 + 间隔 + 路径顺序 | 🟡 中 |
| **客户端特征** | 18 个 `x-cursor-*` header | 🟢 低（可模拟）|
| **会话一致性** | `sessionID` + `x-session-id` + timezone | 🟡 中 |
| **遥测关联** | Statsig events × Sentry errors | 🟡 中 |
| **请求协议** | ConnectRPC 分帧格式完整性 | 🔴 严格 |

---

## 六、风控绕过难度评估

| 方法 | 难度 | 说明 |
|------|:----:|------|
| 静态 token 模拟 | 🔴 高 | 风控会 ban |
| 正确 header 模拟 | 🟢 低 | 18 个 header 均可模拟 |
| ConnectRPC 格式正确 | 🟢 中 | 已验证可通 |
| machineId 伪造 | 🔴 高 | 需要持久化匹配 |
| 会话一致性保持 | 🟡 中 | session-id 需连续 |
| 行为频率控制 | 🟢 低 | 间隔 >1s 即可 |

---

*第2轮分析，2026-06-13*
*状态：已完成 device fingerprint、machineId、custom headers、Statsig、Sentry 全面分析*
*下一轮：ModelConfig 正确格式、ConnectRPC 二进制 Protobuf schema 还原*
