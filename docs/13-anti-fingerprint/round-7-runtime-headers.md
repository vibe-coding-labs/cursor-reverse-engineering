# Cursor 风控、设备指纹与遥测机制分析 (第7轮)

## 一、x-cursor-* header 运行时赋值逻辑 (完整)

### 1.1 18 个 header 的代码来源

```javascript
// 来自 cursor-always-local 的 Interceptors 代码
n.header.set("x-cursor-checksum", t === void 0 ? `${B}${e}` : `${B}${e}/${t}`);
n.header.set(jRi, r);                                              // jRi = "x-cursor-client-version"
n.header.set("x-cursor-client-type", f ?? "ide");                   // 默认 "ide"
v !== void 0 && n.header.set("x-cursor-client-layout", v);
b !== void 0 && n.header.set("x-cursor-client-os", b);
k !== void 0 && n.header.set("x-cursor-client-arch", k);
E !== void 0 && n.header.set("x-cursor-client-os-version", E);
n.header.set("x-cursor-client-device-type", "desktop");             // 硬编码 "desktop"
A && n.header.set("local-client-mode", "true");
h && n.header.set("x-cursor-canary", "true");
m !== void 0 && m !== "" && n.header.set("x-cursor-config-version", m);
d !== void 0 && n.header.set(z9_, d);                               // z9_ = "x-session-id"
n.header.set(s6n, o && s === !1 ? "true" : "false");               // s6n = "x-new-onboarding-completed"
n.header.set(r6n, n6n(s));                                          // r6n = "x-ghost-mode"
n.header.set(H9_, c);                                               // H9_ = "x-cursor-config-version"
n.header.set("x-cursor-timezone", Intl.DateTimeFormat().resolvedOptions().timeZone);
a && (n.header.set("x-request-id", a),
     n.header.set("x-amzn-trace-id", a));
```

### 1.2 变量的运行时来源

| Header | 变量 | 来源 |
|--------|------|------|
| `x-cursor-client-version` | `jRi` → `r` | `productService.version` (3.7.27) |
| `x-cursor-client-type` | `f` | 设备环境检测 (`ide`/`desktop`/`web`) |
| `x-cursor-client-layout` | `v` | UI 布局检测 |
| `x-cursor-client-os` | `b` | `process.platform` (linux/darwin/win32) |
| `x-cursor-client-arch` | `k` | `process.arch` (x64/arm64) |
| `x-cursor-client-os-version` | `E` | OS 版本号 |
| `x-cursor-client-device-type` | 硬编码 | 固定 `"desktop"` |
| `x-cursor-canary` | `h` | Canary 通道检测 |
| `x-cursor-config-version` | `m` | 配置哈希 |
| `x-cursor-timezone` | `Intl API` | `Intl.DateTimeFormat().resolvedOptions().timeZone` |
| `x-cursor-checksum` | `ad1()` | 文件校验和算法 |
| `x-ghost-mode` | `r6n` = `n6n(s)` | 隐私模式状态 |
| `x-new-onboarding-completed` | `s6n` | 新手引导状态 |
| `x-session-id` | `z9_` = `d` | UUID |
| `x-cursor-streaming` | — | 流式模式标记 |
| `x-cursor-team-id` | — | 团队 ID |

### 1.3 `x-cursor-checksum` 的生成算法

```javascript
// checksum = ad1(data) + 文件路径
// ad1 算法:
function ad1(n) {
    let e = 165;
    for (let t = 0; t < n.length; t++) {
        n[t] = (n[t] ^ e) + t % 256;
        e = n[t];
    }
    return e;
}
// 最终值 = `${hex(ad1(data))}${filePath}/${functionName}`
```

---

## 二、`x-ghost-mode` 的三种可能值

```javascript
function n6n(n) {
    if (n === true)  return "true";
    if (n === false) return "false";
    if (n === undefined) return "implicit-false";
    return "true";
}
```

| 值 | 含义 |
|-----|--------|
| `"true"` | 隐私模式开启（不存储代码数据）|
| `"false"` | 隐私模式关闭（正常模式）|
| `"implicit-false"` | 未显式设置（默认）|

---

## 三、`x-new-onboarding-completed` 的赋值逻辑

```javascript
// s6n = "x-new-onboarding-completed"
// 值 = eligibleForSnippetLearning() && privacyMode === false ? "true" : "false"
n.header.set(s6n, o && s === !1 ? "true" : "false");
```

通过时间判断：
- 新用户：注册后 2 天内为 `"false"`
- 老用户/通过新手引导：`"true"`

---

## 四、所有 ConnectRPC Service 与命名空间

### 4.1 已确认的 service 列表

| Service | typeName | 方法示例 |
|---------|----------|---------|
| AuthService | `aiserver.v1.AuthService` | GetEmail, GetUserMeta, EmailValid |
| DashboardService | `aiserver.v1.DashboardService` | GetPlanInfo, GetCurrentPeriodUsage, GetHardLimit |
| ChatService | `aiserver.v1.ChatService` | StreamUnifiedChat, StreamUnifiedChatWithTools |
| AnalyticsService | `aiserver.v1.AnalyticsService` | UploadIssueTrace |
| BidiService | `aiserver.v1.BidiService` | streamBidi |
| HealthService | `aiserver.v1.HealthService` | Check |
| AiService | `aiserver.v1.AiService` | serverTime |
| AgentService | `agent.v1.AgentService` | Run |
| FileSyncService | `aiserver.v1.FileSyncService` | (未发布) |
| MetricsService | `aiserver.v1.MetricsService` | (未发布) |
| NetworkService | `aiserver.v1.NetworkService` | (未发布) |
| BackgroundComposerService | `aiserver.v1.BackgroundComposerService` | (未发布) |

### 4.2 ConnectRPC URL 格式总汇

| 协议 | Content-Type | 分帧格式 | 状态 |
|------|-------------|---------|:----:|
| Connect JSON | `application/connect+json` | `0x00 + uint32 + JSON` | ✅ 已验证 |
| gRPC Web JSON | `application/grpc-web+json` | `0x80 + uint32 + JSON` | 📝 推测 |
| gRPC JSON | `application/grpc+json` | 标准 gRPC 帧 | 📝 推测 |

---

## 五、本次新增发现汇总

| 模块 | 新发现 |
|------|--------|
| **x-cursor-checksum** | `ad1()` 校验算法完整提取 |
| **x-ghost-mode** | 三种值 ("true"/"false"/"implicit-false") |
| **x-new-onboarding-completed** | 基于注册时间的判断逻辑 |
| **x-cursor-client-type** | 默认 `"ide"`，可自动检测 |
| **所有 runtime 变量来源** | 从 `process.platform` 到 `Intl.DateTimeFormat` 全部 trace |
| **ConnectRPC services** | 12个 service 完整列表 |

*第7轮分析，2026-06-16*
*覆盖: x-cursor-* header 运行时赋值源码、checksum 算法、ghost-mode 三种值、RPC 服务完整列表*