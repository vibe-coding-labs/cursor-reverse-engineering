# Cursor 风控体系 — 请求追踪、重连与指标 (第16轮)

## 一、x-request-id 追踪体系

### 1.1 生成

```javascript
// 如果请求没有 request-id，自动生成
function getOrCreateRequestId(headers) {
    const existing = headers.get("x-request-id");
    if (typeof existing === "string") return existing;
    
    const newId = generateUUID();  // Xr() UUIDv4
    headers.set("x-request-id", newId);
    return newId;
}
```

### 1.2 用于重试去重

```javascript
// retry interceptor 中使用 requestId 来去重
// 同一 requestId 的请求不会被重复执行
const requestId = header.get("x-request-id");
// 服务端根据 requestId 实现幂等性
```

### 1.3 传递到 trace

```javascript
// requestId 同时传递到 OpenTelemetry trace 中
traceparent: "00-{trace_id}-{span_id}-01"
x-request-id: "{uuid}"  
// 两者关联，端到端追踪
```

---

## 二、断线重连与 Watchdog 机制

### 2.1 重连配置

```javascript
mcp_reconnect_config = {
    reconnectDelay: number,    // 重连延迟(ms)
    maxRetries: number,        // 最大重试次数  
    exponentialBackoff: true,  // 指数退避
}
```

### 2.2 重连流程

```
连接断开 → watchDog 检测 → wait reconnectDelay
  → 重试 → 成功? → 继续
        ↓ 失败
  指数退避等待 → maxRetries? 
        ↓ 达到
  报告错误 → 进入 disconnected 状态
```

### 2.3 自动恢复状态

```javascript
// from cursor-tunnel analysis (round 6):
recoveryAttempt: number;
clearRecoveryLoop(reason);
watchdog_backfill: timer;
```

---

## 三、指标收集体系

### 3.1 指标类型

```javascript
// 所有指标的通用格式
MetricEvent {
    eventType: number;         // 事件类型
    performanceTimestamp: number;  // 性能时间戳
    scripts: string[];         // 关联脚本
    metadata: object;          // 元数据
    eventId: string;           // 事件 ID
}
```

### 3.2 收集的指标

| 指标 | 类型 | 说明 |
|------|------|------|
| 模型调用延迟 | distribution | AI 请求响应时间 |
| token 消耗 | distribution | 输入/输出 token 数 |
| 工具调用延迟 | distribution | 工具执行时间 |
| 错误计数 | count | 各错误类型出现次数 |
| 会话时长 | distribution | 单次会话时长 |
| 重连次数 | count | 连接中断次数 |

### 3.3 上报链路

```
扩展进程 → IPC ($aggMetricsBatch) → 主进程 → api2.cursor.sh → 分析服务
```

---

## 四、运行时指标 (perf_monitor_control)

```javascript
"perf_monitor_control": {
    "client": true,
    "fallbackValues": {
        "enabled": false,
        "subsample_polling_rate_sec": 0,
        "sample_polling_rate_min": 0
    }
}
```

性能监视器通过 Statsig 开关控制，默认关闭。

---

## 五、agent_exec_stream_start_timeout_recovery

```javascript
"agent_exec_stream_start_timeout_recovery" 
```

Agent 执行流启动超时的恢复机制：
- 超时监测：检测 `stream_start` 是否在预期时间内到达
- 自动重试：超时后自动重启 Agent 流
- 避免冷启动延迟导致用户看到空白

---

## 第16轮新增发现汇总

| 发现 | 重要度 |
|------|:------:|
| **x-request-id 生成与去重** | ⭐⭐ 幂等性+追踪 |
| **Watchdog 重连机制** | ⭐⭐ 自动恢复 |
| **MCP reconnect 配置** | ⭐ MCP 服务器重连 |
| **指标格式 MetricEvent** | ⭐ 性能度量 |
| **perf_monitor_control Statsig 配置** | ⭐ 性能监测 |

*第16轮分析，2026-06-17*
*覆盖: requestId、重连、指标、性能监视*