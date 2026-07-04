# Cursor 风控、设备指纹与遥测机制分析 (第6轮)

## 一、machineId 完整实现

### 1.1 跨平台实现

`@opentelemetry/resources` 提供了各平台读取 machine-id 的完整实现：

| 平台 | 读取方式 | 来源文件 |
|------|---------|---------|
| **Linux** | 读取 `/etc/machine-id`，回退 `/var/lib/dbus/machine-id` | `getMachineId-linux.js` |
| **macOS** | 执行 `ioreg -rd1 -c "IOPlatformExpertDevice"`，提取 `IOPlatformUUID` | `getMachineId-darwin.js` |
| **Windows** | 执行 `REG QUERY HKLM\SOFTWARE\Microsoft\Cryptography /v MachineGuid` | `getMachineId-win.js` |
| **FreeBSD** | 同 Linux 方式 | `getMachineId-bsd.js` |
| **其他** | 返回 `undefined` | `getMachineId-unsupported.js` |

### 1.2 Linux 实现代码

```javascript
async function getMachineId() {
    const paths = ['/etc/machine-id', '/var/lib/dbus/machine-id'];
    for (const path of paths) {
        try {
            const result = await fs.promises.readFile(path, { encoding: 'utf8' });
            return result.trim();
        } catch (e) {
            // diag.debug
        }
    }
    return undefined;
}
```

### 1.3 macOS 实现代码

```javascript
async function getMachineId() {
    const result = await execAsync('ioreg -rd1 -c "IOPlatformExpertDevice"');
    const idLine = result.stdout.split('\n')
        .find(line => line.includes('IOPlatformUUID'));
    if (!idLine) return undefined;
    const parts = idLine.split('" = "');
    if (parts.length === 2) return parts[1].slice(0, -1);
}
```

### 1.4 Cursor 的 machineId 使用链路

```
Linux: /etc/machine-id → OpenTelemetry getMachineId()
macOS: ioreg IOPlatformUUID → OpenTelemetry getMachineId()
Windows: Registry MachineGuid → OpenTelemetry getMachineId()
                    ↓
        TelemetryService.common.machineId
                    ↓
        IPC: MainThreadCursor.$getMachineId (暴露给扩展进程)
                    ↓
        x-cursor-client-* headers (每次请求携带)
        statsig_stable_id cookie (关联)
        machineid 磁盘文件 (缓存)
```

---

## 二、x-cursor-rpc-callsite 追踪体系

### 2.1 已定义的 callsite 值

```javascript
// 从 scm-rpc-callsite.ts 编译而来
A__ = [
    "pr_tab_init",                 // PR 标签页初始化
    "pr_tab_refresh",              // PR 标签页刷新
    "pr_branch_poll",              // PR 分支轮询
    "pr_metadata_refresh",         // PR 元数据刷新
    "pr_reviews_subtab",           // PR 审查子标签
    "pr_diff_view",                // PR 差异视图
    "pr_status_pill",              // PR 状态标签
    "cloud_agent_pr_state",        // Cloud Agent PR 状态
    "agent_tool_call",             // Agent 工具调用
    "unknown"                      // 未知/未分类
]
```

### 2.2 用途

`x-cursor-rpc-callsite` header 标记每个 RPC 调用的来源场景，用于：
1. **服务端性能追踪** — 知道每个调用来自哪个 UI 操作
2. **风控行为分析** — 异常调用模式检测（如 `agent_tool_call` 频率异常）
3. **调试排障** — 追踪 RPC 调用链

---

## 三、异常处理与错误上报体系

### 3.1 IPC 暴露的错误处理方法

```javascript
MainThreadCursor.$captureException    // 扩展进程异常
MainThreadCursor.$aggMetricsBatch     // 指标批处理
MainThreadCursor.$getMachineId        // machineId 获取
MainThreadCursor.$getMacMachineId     // macMachineId 获取
```

### 3.2 Sentry 上报的完整事件流

```
浏览器/Node 运行时错误
     ↓
Sentry SDK 捕获 (captureException/captureMessage/captureEvent)
     ↓
通过 IPC 从扩展进程发送到主进程
     ↓
主进程通过 Sentry DSN 上报到：
  1. o4504648565915648.ingest.us.sentry.io (Sentry 官方)
  2. metrics.cursor.sh (Cursor 自建 Sentry)
```

---

## 四、补充协议细节

### 4.1 ConnectRPC 方法命名规则

```javascript
// 所有 ConnectRPC 方法的命名模式
// 前缀: stream = 服务端流, unary = 单次, bidi = 双向流
// 后缀: SSE = Server-Sent Events, Poll = 轮询

streamUnifiedChat         // 服务端流
streamUnifiedChatSSE      // SSE 流
streamUnifiedChatPoll     // 轮询
streamUnifiedChatWithTools       // 带工具的流
streamUnifiedChatWithToolsSSE    // 带工具的 SSE
streamUnifiedChatWithToolsPoll   // 带工具的轮询
```

### 4.2 风控触发后的恢复机制

从代码中 `ERROR_UNAUTHORIZED` 的错误消息推断：
```
"For troubleshooting, please visit the Cursor Docs at 
 https://cursor.com/docs/troubleshooting/common-issues#suspicious-activity-message"
```

风控后的恢复路径：
1. 访问上述文档
2. 可能需要重新登录
3. 可能需联系支持

### 4.3 5 轮分析后仍待解决的问题

| 问题 | 难度 | 原因 |
|------|:----:|------|
| Statsig gate 的具体数值型 fallback | 🟡 | 服务端动态下发，代码中看不到 |
| 完整的风控恢复流程 | 🔴 | 需要触发风控后实测 |
| cursorvm-manager.com 的 ConnectRPC 路由 | 🔴 | 内网不可达 |
| machineid 文件持久化路径 | 🟢 | 模拟运行 Cursor 后可确认 |
| Cursor 自定义 TelemetryService 完整类 | 🟡 | workbench 中代码混淆严重 |

---

*第6轮分析，2026-06-16*
*新增覆盖: OpenTelemetry machineId 源码完整提取、x-cursor-rpc-callsite 10个值、错误上报 IPC 体系、ConnectRPC 方法命名规则*
