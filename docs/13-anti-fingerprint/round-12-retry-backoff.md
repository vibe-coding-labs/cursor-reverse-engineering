# Cursor 风控体系 — 重试、退避与超时策略 (第12轮)

## 一、RetryInterceptor (ConnectRPC 重试拦截器)

### 1.1 Statsig 配置

```javascript
"retry_interceptor_config": {
  "client": true,
  "fallbackValues": {
    "retriableErrors": [
      { "code": "Unavailable" },
      { "code": "Internal" },
      { "code": "DeadlineExceeded" }
    ]
  }
},
"retry_interceptor_disabled": {
  "client": true,
  "default": false
}
```

### 1.2 可重试的错误

| gRPC 错误码 | 是否重试 |
|-------------|:--------:|
| `Unavailable` | ✅ 是 |
| `Internal` | ✅ 是 |
| `DeadlineExceeded` | ✅ 是 |
| 其他 | ❌ 否 |

### 1.3 重试行为

```
请求失败 → 检查错误码是否可重试
  ↓ 是
检查 maxRetries
  ↓ 未超限
应用指数退避 + jitter
  ↓
发起重试
```

---

## 二、指数退避与 jitter

```javascript
// 退避策略参数
maxRetries: number;      // 最大重试次数
retryAfter: number;       // 退避时间(ms)
backoff: number;          // 退避乘数
jitter: number;           // 随机抖动(ms)，防止惊群效应
```

**退避计算**: `delay = min(retryAfter * backoff^attempt + random(-jitter, +jitter), maxDelay)`

| 特性 | 用途 |
|------|------|
| 指数退避 | 防止重试风暴 |
| jitter (随机抖动) | 避免所有客户端同时重试 |
| maxRetries | 防止无限重试 |
| retryAfter | 从 429 响应的 `Retry-After` header 读取 |

---

## 三、超时与截止时间

```javascript
// 各级超时配置
timeoutMs: number;    // 单次请求超时 (ms)
deadlineMs: number;   // 总截止时间 (ms)

// 单次请求构造
const request = {
  url, method, headers, body,
  timeoutMs,        // 请求超时
  signal,            // 取消信号
  cleanup: () => clearTimeout(timer)
};
```

### 关键超时

| 场景 | 超时值 |
|------|--------|
| 单次 ConnectRPC 请求 | 由 `timeoutMs` 参数指定 |
| 流式请求 | 单独配置 |
| 总截止时间 | `deadlineMs` |
| 心跳 | `intervalMs` |

---

## 四、Statsig 控制的风控相关参数

```javascript
// 完整的 statsig 风控配置
{
  "retry_interceptor_config": {
    retriableErrors: ["Unavailable", "Internal", "DeadlineExceeded"]
  },
  "retry_interceptor_disabled": false,
  "retry_interceptor_enabled_for_streaming": false,
  
  "http1_keepalive_disabled": false,
  "http2_defer_retired_abort_open_streams": false,
  
  "smart_allowlist_required": false,
  "command_blocklist_feature": false,
  "enable_pty_auth": true,
  
  "agent_exec_stream_start_timeout_recovery": true,
  
  "nal_agent_retries": false,         // Agent 级别重试
  "nal_human_changes": false,         // 人工变更检测
  "nal_trace": false,                  // Agent 追踪
}
```

---

## 第12轮新增发现汇总

| 发现 | 重要度 |
|------|:------:|
| **RetryInterceptor 完整配置** | ⭐⭐⭐ 3 种可重试错误码 |
| **指数退避 + jitter 算法** | ⭐⭐ 防止惊群效应 |
| **超时/截止时间体系** | ⭐⭐ 多层超时保护 |
| **Statsig 风控配置的完整值** | ⭐⭐⭐ 运行时参数确认 |
| **retry_interceptor_disabled 开关** | ⭐ 可动态关闭重试 |

*第12轮分析，2026-06-16*
*覆盖: 重试策略、指数退避、超时体系、Statsig 风控参数*