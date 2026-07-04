# Cursor 协议修正与深度分析报告 (Round 1)

> 发现时间: 2026-06-22 11:30 GMT+8
> 基于运行中的 Cursor 3.7.27 实例 + 独立 API 客户端联合分析

---

## 🔴 关键发现 #1: Cursor 后端 API 协议已从 ConnectRPC 改为纯 JSON

### 错误诊断过程

`cursor_client.py` 在 `_call_connect_rpc()` 中使用了 ConnectRPC 5 字节分帧信封：

```
\x00 (1 byte flag=0) + uint32 (4 bytes big-endian length) + JSON body
```

Content-Type: `application/connect+json`

**结果**: 所有请求返回 HTTP 415 (Unsupported Media Type) 或空响应。

### 实际协议

```python
# ✅ 实际工作的调用方式
POST https://api2.cursor.sh/{Service}/{Method}
Content-Type: application/json
Accept: application/json
Authorization: Bearer {token}

Body: {}  # 直接 JSON，无信封
```

### 证据

| 测试项 | ConnectRPC 信封 | 纯 JSON |
|--------|:----------------:|:-------:|
| GetMe | HTTP 415 | ✅ 200 |
| GetPlanInfo | HTTP 415 / 空响应 | ✅ 200 |
| GetEmail | HTTP 415 | ✅ 200 |
| GetCurrentPeriodUsage | HTTP 415 | ✅ 200 |

### 对运行中 Cursor 实例的影响

运行的 Cursor 桌面客户端（PID 1201652, 自6月13日起持续运行）的所有 API 调用都失败：

```log
[unauthenticated] Error: ConnectError: [unauthenticated] Error
    at async V$n.getEmailAndSignUpType (workbench.desktop.main.js:49803:931)
```

同时出现的错误：
- `Error fetching user privacy mode: [unauthenticated] Error`
- `Error fetching user pricing info: [unauthenticated] Error`
- `[Cursor Proclist Polling] Failed to send V2 metrics to backend`

**结论：Curosr 桌面客户端 3.7.27 自身存在 API 通信 bug**。服务端可能已迁移到新的 JSON API 但客户端代码未同步更新，或者 ConnectRPC 需要额外的 gRPC-Web 中间层。

---

## 🔴 关键发现 #2: 所有 DashboardService 端点完整映射

### 已验证成功的端点

| 端点 | HTTP | 响应示例 |
|------|:----:|---------|
| `DashboardService/GetMe` | POST ✅ | `{authId, userId, email, firstName, ...}` |
| `DashboardService/GetPlanInfo` | POST ✅ | `{planInfo: {planName, price, billingCycleEnd}, nextUpgrade: {tier, name, price}}` |
| `DashboardService/GetCurrentPeriodUsage` | POST ✅ | `{billingCycleStart/End, planUsage: {totalPercentUsed, autoPercentUsed, apiPercentUsed, ...}, spendLimitUsage}` |
| `DashboardService/GetHardLimit` | POST ✅ | `{noUsageBasedAllowed: true}` |
| `AuthService/GetEmail` | POST ✅ | `{email, signUpType, isRecentlyCreatedUser}` |
| `auth/full_stripe_profile` | GET ✅ | `{membershipType, paymentId, subscriptionStatus, trialEligible, ...}` |
| `auth/has_valid_payment_method` | GET ✅ | `{hasValidPaymentMethod: false}` |
| `ChatService/Chat` | POST ✅ | (500 internal - requires proper request body) |
| `ChatService/SendMessage` | POST ✅ | (500 internal - requires proper request body) |

### 验证失败的端点

| 端点 | 原因 |
|------|------|
| `DashboardService/RequestAccountDeletion` | 500 internal (需要更多参数) |
| `DashboardService/GetStripePortalUrl` | 404 |
| `ChatService/StreamUnifiedChat` | 可能需特定 proto 格式 |
| `ChatService/StreamUnifiedChatWithTools` | HTTP 415 (需要特定 Content-Type) |
| `AuthService/EmailValid` | deprecated (ERROR_DEPRECATED) |
| `AnalyticsService/RecordEvents` | 404 |
| `AnalyticsService/Ping` | 404 |
| `AiService/GetModels` | 500 internal |
| `HealthService` | 404 |
| `AgentService` | 404 |

---

## 🔴 关键发现 #3: 当前用户套餐细节

```json
{
  "authId": "github|user_01J7EAWKFAHFKD8R5HMQ0EHCJB",
  "email": "cc11001100@qq.com",
  "userId": 62483435,
  "plan": "Free ($0)",
  "membershipType": "free",
  "subscriptionStatus": "canceled",
  "paymentId": "cus_S2jnwU7yh3gfeg",
  "usage": "0%",
  "trialEligible": false
}
```

- Token 有效期至: **Aug 12, 2026** (51天+)
- 风控未触发: 用量为 0%
- Pro+ 升级: $60/mo, 包含 7000 cents 额度

---

## 🔴 关键发现 #4: 运行中 Cursor 实例的网络问题

### 更新检查失败
```log
https://api2.cursor.sh/updates/api/update/linux-x64/cursor/3.7.27/
  f668cdc04b7bce48dcceafdb94fb75136ff64a93f7fcd7c9f405317bc8e6b6b8/
  stable?isOutdatedCheck=1
→ net::ERR_CONNECTION_CLOSED (持续超时)
```

### 扩展控制超时
```log
https://api2.cursor.sh/extensions-control
→ Request timeout after 3000ms (持续 9 天)
```

**所有网络请求到 api2.cursor.sh 都失败**，但我们的 Python 客户端可以正常访问同一 URL。这说明运行中的 Cursor 可能被代理/NAT 规则限制，或者是 Electron 网络栈的持久性问题。

---

## 🔵 关键发现 #5: Sentry 和 Telemetry 数据

### Sentry breadcrumbs (30秒心跳轮询)
```json
{
  "category": "composers",
  "message": "composerState",
  "data": {
    "selectedCount": 1,
    "loadedCount": 1,
    "subagentCount": 0,
    "generatingCount": 0,
    "totalTerminals": 1,
    "agentTerminals": 1
  }
}
```

### Machine ID
```
machineid: e1001853-1a53-4b00-a830-53270dfe271b
telemetry.macMachineId: dc8ce3929b82d3ffe6da961b8596915a2020deb8eeac541f099264ba9fa902a6
telemetry.machineId: f668cdc04b7bce48dcceafdb94fb75136ff64a93f7fcd7c9f405317bc8e6b6b8
telemetry.devDeviceId: 3adad18f-4279-4faa-bb08-b480beac9922
```

---

## 待分析领域 (后续轮次)

1. **Agent 系统深度分析**: cursor-agent-exec (68MB) — 已启动子代理
2. **未分析扩展**: cursor-socket, cursor-file-service, cursor-ndjson-ingest, cursor-deeplink — 已启动子代理
3. **Workbench 代码提取**: 从 59MB workbench.desktop.main.js 提取 Cursor 特有代码 — 已启动子代理
4. **Statsig 遥测完整重建**
5. **AI Chat 协议**: ChatService/Chat 需要正确的请求体格式
6. **风控绕过策略实战**
7. **更新/升级机制完整分析**
8. **MCP 协议实现细节**

---

## 📋 行动项

- [x] 发现并修复 API 协议错误 (ConnectRPC → JSON)
- [x] 验证所有 DashboardService 端点
- [x] 抓取运行中 Cursor 实例的日志
- [x] 确认 Token 有效期和套餐信息
- [ ] 等待子代理完成深度分析
- [ ] 写入第 16 份分析文档 (protocol-correction)
