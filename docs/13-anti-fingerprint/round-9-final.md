# Cursor 风控、设备指纹与遥测机制分析 (第9轮 — 终章)

## 最终发现的细节补全

### 1. machineid 文件路径确认

```javascript
// 从 EnvironmentService 中:
get serviceMachineIdResource() {
    return joinPath(file(this.userDataPath), "machineid");
}
// 实际路径: ~/.config/Cursor/machineid (Linux)
//           ~/Library/Application Support/Cursor/machineid (macOS)
//           %APPDATA%/Cursor/machineid (Windows)
```

### 2. Statsig 配置完整还原

```javascript
// product.json 中:
{
    "statsigClientKey": "client-Bm4HJ0aDjXHQVsoACMREyLNxm5p6zzuzhO50MgtoT5D",
    "statsigLogEventProxyUrl": "https://api3.cursor.sh/tev1/v1"
}

// SDK 使用: statsig-js-client v3.31.0
// 初始化: StatsigClient(statsigClientKey, user, options)
// 用户标识: stableID 来自 statsig_stable_id cookie
// 事件上报: POST https://api3.cursor.sh/tev1/v1
```

### 3. firstSessionDate 来源

```json
"telemetry.firstSessionDate"  // 首次运行日期存储键
// 在 TelemetryService 初始化时设置，首次运行时记录
// 存储在 storage.json 中，用于计算用户生命周期指标
```

---

## 最终汇总

### 已覆盖的 7 个方向 (9轮, 10份文档)

| 方向 | 轮次 | 核心结论 |
|------|:----:|---------|
| machineId | 2-3-4-6-8-9 | **随机 UUIDv4** 写入 `~/.config/Cursor/machineid`。非硬件指纹。 |
| Statsig | 2-4-5-9 | 140 gates + StatsigClient Key + `api3.cursor.sh/tev1/v1` 上报 |
| Sentry | 1-2-4-6 | 双 DSN，6 种捕获类型，IPC 上报链路 |
| session_id | 2-3-5 | `Xr()` UUIDv4 函数 + `sessionID = UUID + Date.now()` |
| ModelConfig | 3-5 | `default_model`/`fallback_models`/`best_of_n_default_models` |
| x-cursor-* header | 2-3-7 | 18 + 8 个，运行时赋值 (`ad1()` checksum, `n6n()` ghost-mode) |
| ConnectRPC | 3-4-6-7 | `0x00+uint32+body`, 3 种 content-type, 12 services, 86 字段 |

### 从根本上纠正的错误

1. ~~machineId = `/etc/machine-id` 硬件指纹~~ → **随机 UUIDv4**
2. ~~Auth0 认证~~ → **WorkOS**
3. ~~`prod.authentication.cursor.sh`~~ → **`authentication.cursor.sh`**

### 无法仅从静态代码确定的

这些需要运行时才能验证：
- Statsig gate 的服务端精确值
- `cursorvm-manager.com` 的 ConnectRPC 路由
- 风控 `ERROR_UNAUTHORIZED` 后的恢复流程

---

**这是最终轮。** `docs/13-anti-fingerprint/` 下已有 10 份文档，7 个方向全部挖透。
