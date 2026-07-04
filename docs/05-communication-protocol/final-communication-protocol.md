# Cursor AI 通信协议 — 最终确定性报告

## 架构全景

```
Cursor 客户端 ──ConnectRPC──→ api2.cursor.sh ──代理──→ LLM Provider
                               (baseUrl)             (Anthropic/OpenAI/etc)
```

**模型请求不直接发到 cursorvm-manager.com**。所有请求经过 `api2.cursor.sh` 的 ConnectRPC 网关。

---

## 1. 传输层协议

### 1.1 ConnectRPC（主协议）

| 项目 | 值 |
|------|------|
| 协议 | **ConnectRPC**（gRPC 兼容，HTTP/1.1 + HTTP/2） |
| 序列化 | Protocol Buffers（二进制）|
| 备用格式 | SSE ServerStreaming（JSON 事件流） |
| baseUrl | `https://api2.cursor.sh` |
| 认证 | `Authorization: Bearer {accessToken}` |
| 自定义头 | `x-ghost-mode`, `x-session-id`, `x-cursor-client-version` 等 |

### 1.2 核心服务列表

| 服务名 | typeName | 是否已验证可达 |
|--------|----------|:------------:|
| AuthService | `aiserver.v1.AuthService` | ✅ |
| DashboardService | `aiserver.v1.DashboardService` | ✅ |
| ChatService | `aiserver.v1.ChatService` | ⚠️ 需要 Protobuf |
| AnalyticsService | `aiserver.v1.AnalyticsService` | ✅ |
| HealthService | `aiserver.v1.HealthService` | ❌ 404 |
| AgentService | `agent.v1.AgentService` | ❌ 404 |
| AiService | `aiserver.v1.AiService` | ⚠️ 需要 Protobuf |

---

## 2. AI 对话核心协议

### 2.1 最终方法

```
Service:  aiserver.v1.ChatService
Method:   StreamUnifiedChat (ServerStreaming)
TypeName: aiserver.v1.StreamUnifiedChatRequest

ConnectRPC URL 格式 (POST):
  JSON:    https://api2.cursor.sh/aiserver.v1.ChatService/StreamUnifiedChat
           Content-Type: application/json
  二进制:  https://api2.cursor.sh/aiserver.v1.ChatService/StreamUnifiedChat
           Content-Type: application/proto
  SSE:     https://api2.cursor.sh/aiserver.v1.ChatService/StreamUnifiedChat
           Content-Type: application/json
           Accept: text/event-stream
```

### 2.2 StreamUnifiedChatRequest 字段列表（从 Protobuf 定义提取）

```
{
  "conversation":              // 对话历史
  "model":                     // 模型参数
  "mode":                      // 模式: CHAT / AGENT / EDIT / PLAN / DEBUG
  "thinking_level":            // 思考级别
  "selected_context":          // 附加上下文（文件、终端等）
  "hooks_config":              // Hook 配置
  "conversation_state":        // 对话状态（序列化）
  "metadata":                  // 元数据
  "ide_state":                 // IDE 状态
  "max_tokens":                // 最大 token
  "idempotency_key":           // 幂等键
  "client_side_tool_v2_result" // 客户端工具结果
}
```

### 2.3 已验证的可达端点

| 端点 | 方法 | 状态 | 备注 |
|------|------|:----:|------|
| `api2.cursor.sh/aiserver.v1.AuthService/GetEmail` | POST JSON | ✅ 200 | 需 Bearer token |
| `api2.cursor.sh/aiserver.v1.DashboardService/GetCurrentPeriodUsage` | POST JSON | ✅ 200 | 需 Bearer token |
| `api2.cursor.sh/aiserver.v1.DashboardService/GetPlanInfo` | POST JSON | ✅ 200 | 需 Bearer token |
| `api2.cursor.sh/aiserver.v1.DashboardService/GetHardLimit` | POST JSON | ✅ 200 | 需 Bearer token |
| `api2.cursor.sh/auth/full_stripe_profile` | GET | ✅ 200 | 需 Bearer token |
| `api2.cursor.sh/auth/has_valid_payment_method` | GET | ✅ 200 | 需 Bearer token |
| `api2.cursor.sh/aiserver.v1.AuthService/EmailValid` | POST | ❌ 401 | Protobuf 端点需认证 |

---

## 3. 登录认证协议

### 3.1 登录流程

```
1. 登录 URL:
   https://cursor.com/loginDeepControl
   ?challenge={base64url_sha256(verifier)}
   &uuid={random_uuid}
   &mode=login
   &supportsSelectedTeamLogin=true

2. 用户在浏览器完成 WorkOS 认证后，Cursor 后端保存 token

3. 轮询获取 token (500ms 间隔):
   GET https://api2.cursor.sh/auth/poll?uuid={uuid}&verifier={verifier}
   Headers:
     x-ghost-mode: false
     x-new-onboarding-completed: false
     x-cursor-client-version: 3.7.27
   
   ✅ 已验证返回:
   {
     "accessToken": "{JWT}",
     "refreshToken": "{JWT}",     // 注意: 和 accessToken 相同
     "authId": "github|user_01J7...",
     "challenge": "{...}",
     "uuid": "{...}"
   }

4. JWT 格式:
   {
     "sub": "github|user_01J7...",
     "exp": 1786505499,         // 59 天过期
     "iss": "https://authentication.cursor.sh",
     "scope": "openid profile email offline_access",
     "aud": "https://cursor.com",
     "type": "session"
   }

5. 令牌刷新:
   POST https://api2.cursor.sh/oauth/token
   Content-Type: application/json
   Body: {
     "grant_type": "refresh_token",
     "client_id": "KbZUR41cY7W6zRSdpSUJ7I7mLYBKOCmB",
     "refresh_token": "{current_token}"
   }
   ✅ 已验证: 返回 { access_token, shouldLogout }
```

### 3.2 认证常量

```python
AUTH_CLIENT_ID = "KbZUR41cY7W6zRSdpSUJ7I7mLYBKOCmB"
AUTH_DOMAIN = "authentication.cursor.sh"  # 不是 prod.authentication!
WEBSITE_URL = "https://cursor.com"
BACKEND_URL = "https://api2.cursor.sh"
```

---

## 4. 已知但未验证的端点

| 端点 | 说明 | 未验证原因 |
|------|------|-----------|
| `ChatService/StreamUnifiedChat` | 核心 AI 对话 | 需要 Protobuf 序列化 |
| `ChatService/StreamUnifiedChatWithTools` | Agent 工具调用 | 同上 |
| `BidiService/streamBidi` | 双向流 | 需要 ConnectRPC 客户端库 |
| `AiService/serverTime` | 服务器时间 | 低优先级 |
| CPU/Agent Service Runs | Agent 远程执行 | 需要 Protobuf 完整 schema |

---

## 5. 中转反向代理想法

### 5.1 可拦截的点

| 拦截点 | 难度 | 说明 |
|--------|:----:|------|
| **DNS: api2.cursor.sh → 代理 IP** | 🔴 高 | 需要 HTTPS 证书 |
| **登录 URL 的 redirect_uri** | 🟢 低 | 可以劫持 cursor:// 协议 |
| **auth/poll 返回后替换 token** | 🟡 中 | 可以注入自己的 JWT |
| **ConnectRPC 代理** | 🔴 高 | 需要实现 ConnectRPC 网关 |
| **SSE 流拦截** | 🟡 中 | JSON 文本，可解析 |

### 5.2 最简方案

托管自己的 `cursorvm-manager.com` 替代品，修改 Cursor 客户端的 provider 配置指向自己的端点，格式为 OpenAI 兼容 API。

---

## 6. 交付物

| 文件 | 说明 |
|------|------|
| `scripts/cursor_auth.py` | ✅ 登录脚本（已验证） |
| `scripts/cursor_login_catcher.py` | ✅ 登录捕获器 |
| `docs/07-authentication/auth-flow-analysis.md` | ✅ 认证流程 |
| `docs/07-authentication/auth-login-python-simulation.md` | ✅ Python 模拟指南 |
| `docs/05-communication-protocol/ai-communication-protocol.md` | ⚠️ 协议分析（需更新） |
| 本文件 | ✅ 最终确定性报告 |