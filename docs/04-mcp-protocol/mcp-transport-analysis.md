# Cursor MCP 传输层架构分析

> 分析时间: 2026-06-22 12:36 GMT+8
> 来源: mcpProcessMain.js (500KB)

---

## 一、传输层状态机

cursor-mcp 的传输层使用复杂的状态机管理 MCP 服务器连接。

### 状态转换

```
disconnected → connecting → connected → stabilized
                  ↓             ↓
              transport_error → degraded → (retry loop)
                  ↓
              server_removed → final

connected → idle_suspend → disconnected
connected → transport_closed (stdio: client closed)
connected → session_invalidated
```

### 事件触发
```
connect_start, connect_success, transport_error,
transport_closed, connection_stabilized, backoff_timer_expired,
session_invalidated, idle_suspend, server_removed
```

### 重试策略
```
backoff_timer_expired → retry with exponential delay
transport_error → isRetryable ? inc attempt + delay : terminal
```

---

## 二、支持的传输协议

### 1. stdio（标准输入输出）
- 子进程通过 stdio 通信
- 关闭时视为 `transport_closed`，标记为 `isStdio=true`
- 客户端关闭后不可重连（`Client closed` 状态）

### 2. streamable HTTP（首选）
- HTTP 流式传输
- 支持 OAuth 授权
- HTTP 请求被记录为 `mcp_http_exchange` 事件

### 3. SSE（已弃用）
- 服务端推送事件
- https://api2.cursor.sh 可能也支持

---

## 三、HTTP 交换事件

每次 MCP HTTP 请求都被记录的事件：
```typescript
{
  event: "mcp_http_exchange",
  outcome: "success" | "http_error" | "error",
  durationMs: number,
  cursorMcp: {
    transport: {
      request: { method, url, headers },
      response: { status, headers },
      oauth?: { grantType: string },
      oauthTokenErrorBody?: string
    }
  }
}
```

---

## 四、OAuth 授权机制

MCP 服务器支持 OAuth 2.0 授权，包括：
- `oauth_token_save` — token 持久化
- `oauth_token_client_binding_mismatch` — 客户端绑定错误
- `oauth_refresh_prepare` — token 刷新准备
- `oauth_refresh_error` / `oauth_refresh_result` — 刷新结果
- `oauth_redirect` — OAuth 重定向处理
- `oauth_invalidate_credentials` — 凭据作废

---

## 五、MCP 错误类型

| 错误类型 | 说明 |
|---------|------|
| `oauth_error` | OAuth 授权失败 |
| `auth_transport_error` | 认证传输错误 |
| `generic_error` | 通用错误 |
| `transport_error` | 传输层错误 |
| `transport_closed` | 传输连接关闭 |
