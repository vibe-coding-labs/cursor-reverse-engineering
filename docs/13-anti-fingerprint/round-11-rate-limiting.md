# Cursor 风控体系 — 运行时风控实现 (第11轮)

## 一、客户端限流: 令牌桶 + 断路器

### 1.1 令牌桶算法

```javascript
// cursor-always-local 中实现的令牌桶限流
function checkRateLimit(e) {
    if (this.checkCircuitBreaker(e)) 
        throw new Error(`Circuit breaker open for ${e} because it is rate limiting too often or is failing too often.`);
    this.refillTokens();
    if (this.tokens < 1) 
        throw this.incrementFailures(e);
}
```

| 组件 | 行为 |
|------|------|
| `refillTokens()` | 按时间间隔补充令牌 |
| `tokens < 1` | 令牌耗尽，触发限流 |
| `checkCircuitBreaker()` | 检查断路器状态 |
| `incrementFailures(e)` | 增加失败计数 |

### 1.2 断路器模式

```
正常状态 → 失败累积 → 熔断打开 → 冷却时间 → 半开 → 恢复正常
```

断路器在以下 HTTP 状态码时触发：

```javascript
statusCodes: [500, 502, 503, 504, 429];
// 429 = 限流
// 5xx = 服务器错误
```

网络错误码也触发断路器：

```javascript
errorCodes: [
  "ECONNRESET", "ECONNREFUSED", "ENOTFOUND", 
  "ENETDOWN", "ENETUNREACH", "EHOSTDOWN", "EHOSTUNREACH"
];
```

---

## 二、abuseService IPC 通道

```javascript
// main.js 中注册的 abuse IPC 通道
const abuseChannel = Service.fromService(abuseService);
registerChannel("abuse", abuseChannel);
```

通过 IPC 暴露给扩展进程：

```javascript
// 扩展进程通过以下方式访问:
MainThreadCursor.$getMachineId()      // 获取 machineId
MainThreadCursor.$getMacMachineId()   // 获取 macMachineId
```

---

## 三、x-cursor-streaming header

```javascript
// 所有 ConnectRPC 流式请求携带此 header
n.header.set("x-cursor-streaming", "true");
```

作用：标记请求为流式（ServerStreaming），服务端据此选择响应传输模式。

---

## 四、网络策略控制

```protobuf
message SandboxPolicy {
  repeated string allowed_models = 1;     // 允许的模型
  repeated string blocked_models = 2;     // 阻止的模型
  AutoRunControls auto_run_controls = 3;   // 自动运行控制
  bool dot_cursor_protection = 4;          // .cursor 目录保护
  repeated string browser_origin_allowlist = 5;  // 浏览器来源白名单
  repeated string network_denylist = 6;    // 网络拒绝列表
  repeated string network_allowlist = 7;   // 网络允许列表
  repeated string cloud_agent_egress_allowlist = 8;  // Cloud Agent 出口白名单
}
```

### 网络控制用途

| 字段 | 用途 |
|------|------|
| `network_denylist` | 阻止 Agent 访问特定域名 |
| `network_allowlist` | 仅允许访问的域名 |
| `cloud_agent_egress_allowlist` | Cloud Agent 出口白名单 |
| `browser_origin_allowlist` | 浏览器自动化允许的来源 |

---

## 五、large_proto_logging 调试功能

```javascript
// 通过 Statsig feature gate 控制
const enabled = await checkFeatureGate("large_proto_logging_enabled");
```

用于调试大型 Protobuf 消息的日志记录。

---

## 第11轮新增发现汇总

| 发现 | 重要度 |
|------|:------:|
| **令牌桶限流 + 断路器模式** | ⭐⭐⭐ 客户端侧自我限流 |
| **abuseService IPC 通道** | ⭐⭐ 主进程与扩展进程的 abuse 通信 |
| **x-cursor-streaming header** | ⭐ 流式标记 |
| **SandboxPolicy 完整字段** | ⭐⭐⭐ 7个安全策略维度 |
| **网络拒绝/允许列表** | ⭐⭐ Agent 网络访问控制 |
| **错误码触发条件** | 429/5xx/ECONNRESET 触发断路器 |

*第11轮分析，2026-06-16*
*覆盖: 令牌桶、断路器、abuse IPC、SandboxPolicy、网络策略*