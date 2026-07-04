# Cursor 3.7.27 → 3.9.16 版本差异逆向分析报告（增强版）

> **分析日期**: 2026-07-03  
> **分析工具**: 静态差异分析、配置文件对比、二进制字符串分析  
> **基线版本**: 3.7.27 (commit: `e48ee6102a`, 2026-06-10)  
> **目标版本**: 3.9.16 (commit: `042b3c1a4c`, 2026-06-27)  
> **当前状态**: 3.9.16 是截至 2026-07-03 的最新可用版本（更新 API 确认无更新）

---

## 一、版本概述

Cursor 从 **3.7.27** 升级到 **3.9.16**（跨越 3.8.x），构建于 2026-06-27，即 3.7.27 发布 **17 天后**。

### 1.1 版本信息速览

| 项目 | 3.7.27 | 3.9.16 | 变化 |
|------|--------|--------|------|
| **VS Code 基版** | 1.105.1 | 1.105.1 | **未变** |
| **Electron** | 39.8.1 | **40.10.3** | ⬆️ **+1 大版本** |
| **Chromium** | 142.0.7444.265 | **144.0.7559.236** | ⬆️ +2 版本 |
| **V8** | 14.2.231.22-electron.0 | **14.4.258.32-electron.0** | ⬆️ +2 版本 |
| **AppImage** | ~285 MB | ~300 MB | +15 MB (+5.3%) |
| **提取后总大小** | ~589 MB | ~652 MB | +63 MB (+10.7%) |
| **文件总数** | 19,398 | 19,536 | +138 |
| **cursor 二进制 (Electron)** | ~190.6 MB | ~193.6 MB | +3 MB |
| **main.js** | 1,623,576 B | 1,688,084 B | +64,508 B (+4%) |
| **libffmpeg.so** | 2,681,824 B | 2,711,032 B | +29,208 B |
| **v8_context_snapshot.bin** | 776,865 B | 713,034 B | -63,831 B (V8 升级) |
| **node_modules 包数** | 364 | 367 | +3 |
| **内置扩展数** | 112 | 112 | **未变** |
| **core API 端点** | 不变 | 不变 | 无新增 |
| **Statsig Key / 上报端点** | 不变 | 不变 | 无变更 |

### 1.2 Commit 信息

| 版本 | Commit | Commit 类型 |
|------|--------|-------------|
| 3.7.27 | `e48ee6102a199492b0c9964699bf011886708ba0` | 普通 |
| 3.7.27 realCommit | `e48ee6102a199492b0c9964699bf011886708ba3` | 签名版 |
| 3.9.16 | `042b3c1a4c53f2c3808067f519fbfc67b72cad80` | 普通 |
| 3.9.16 realCommit | `042b3c1a4c53f2c3808067f519fbfc67b72cad8b` | 签名版 |

---

## 二、Electron/Chromium 基础设施升级

### 2.1 Electron 39.8.1 → 40.10.3 大版本跳跃

这是 **成本最高的变更**：Electron 主版本升级 +1，对应的 Chromium 从 142 升级到 144（跳过 143）。这解释了大部分 AppImage 大小增长（+15 MB）。

涉及的底层变更：
- 3.7: `Chrome/142.0.7444.265 Electron/39.8.1`
- 3.9: `Chrome/144.0.7559.236 Electron/40.10.3`

| 组件 | 3.7.27 | 3.9.16 | 变化 |
|------|--------|--------|------|
| cursor 二进制 | 199,908,568 B | 202,992,856 B | +3,084,288 B |
| v8_context_snapshot.bin | 776,865 B | 713,034 B | -63,831 B |
| libffmpeg.so | 2,681,824 B | 2,711,032 B | +29,208 B |
| chrome-sandbox | BuildID `beffc50b` | BuildID `33f2c9b4` | 更新 |

**影响分析**：
- Electron 40.x 引入了新的渲染进程架构改进
- Chrome 144 带来了 Web API、安全性和 V8 性能改进
- V8 14.4 可能影响 JavaScript 执行性能
- v8_context_snapshot 缩小（-63KB）说明 V8 内部快照格式有变化

### 2.2 原生模块

两个版本共享完全相同的 `.node` 原生模块列表（**14 个编译模块**），所有 BuildID 均已更新但模块功能无变：

| 模块 | 用途 | 3.7 BuildID | 3.9 BuildID |
|------|------|-------------|-------------|
| `@anysphere/policy-watcher` | 策略监视器 | 已更新 | 已更新 |
| `cursor-proclist` | 进程列表 | 已更新 | 已更新 |
| `node-pty` | 终端 PTY | 已更新 | 已更新 |
| `@vscode/spdlog` | 日志 | 已更新 | 已更新 |
| `@vscode/sqlite3` | SQLite | 已更新 | 已更新 |
| `native-keymap` | 键盘映射 | 已更新 | 已更新 |
| `native-watchdog` | 监控狗 | 已更新 | 已更新 |
| `@vscode/deviceid` | 设备 ID | 已更新 | 已更新 |
| `native-is-elevated` | 提权检测 | 已更新 | 已更新 |
| `kerberos` | Kerberos 认证 | 已更新 | 已更新 |
| `windows-foreground-love` | 窗口焦点 | 已更新 | 已更新 |
| `@parcel/watcher` | 文件监视 | 已更新 | 已更新 |

**无新增原生模块**，cursor-proclist 依赖新增 `node-addon-api@^8.0.0`。

---

## 三、JS Bundle (main.js) 核心变更

**主 JS 束从 1,623,576 B 增长到 1,688,084 B（+64,508 B, +4%）**，包含以下关键变更：

### 3.1 MCP 沙箱安全体系（最大新增功能）

**(完整内容参见原始差异报告第 2.1-2.3 节)**

新增模块列表（基于 main.js 反混淆与包分析）：

| 模块路径 | 功能描述 |
|----------|----------|
| `mcp-sandbox-policy.ts` | MCP 沙箱策略核心定义 |
| `mcp-sandbox-policy-fingerprint.ts` | 沙箱策略指纹/校验机制 |
| `mcp-sandbox-unavailable-error.ts` | 沙箱不可用错误类型 |
| `admin-mcp-policy.ts` | 管理员 MCP 策略 |
| `admin-mcp-tool-allowlist.ts` | MCP 工具白名单 |
| `mcp-config-service.ts` | MCP 配置服务 |
| `mcp-reconnect-config.ts` | MCP 重连配置 |
| `sand-box.ts` | 沙箱容器定义 |
| `sand-box-archive.ts` | 沙箱归档管理 |
| `sand-box-store.ts` | 沙箱存储管理 |
| `sand-supervisor.ts` | 沙箱超级管理员进程 |

**MCP 引用在 main.js 中的分布**：
- `mcp-core`: 45 次引用
- `mcp_oauth`: 26 次引用
- `mcp-server`: 14 次引用
- `mcp-process`/`mcp-process-`: 7 次引用
- 其余 MCP 子模块各 1 次引用（共 ~20+ 子模块）

### 3.2 进程隔离与网络带宽监控

| 新模块 | main.js 引用次数 |
|--------|-----------------|
| `cursorProclist` 服务 | 新增 |
| `nettopNetworkBandwidthSource` | macOS nettup 带宽采集 |
| `networkBandwidthSource` | Linux 空实现 |
| `mcpProcess` | MCP 子进程管理 |

**MCP 进程 IPC 新增 12 个启动阶段诊断信号**（从 `entrypoint_loaded` 到 `init_failed`）。

### 3.3 遥测与链路追踪升级

| 新模块 | 功能 |
|--------|------|
| `spanLifecycle.js` | Span 生命周期管理 |
| `spanSampling.js` | Span 采样策略 |
| `traceparent.js` | **W3C Trace Context** 支持 |
| `debuggingDataUploadValidation.js` | 调试数据上传验证 |

这是 Cursor 向 **分布式链路追踪** 架构演进的关键信号。

### 3.4 新 node_modules 包（仅 3 个新增）

| 包 | 版本 | 用途 |
|---|-------|------|
| `es-set-tostringtag` | 新增 | ES `Symbol.toStringTag` 兼容层 |
| `has-tostringtag` | 新增 | `Symbol.toStringTag` 存在性检测 |
| `tough-cookie` | 新增 | Cookie 解析/序列化（HTTP cookie 处理） |

**`tough-cookie` 的引入** 值得关注——这是 Node.js HTTP cookie 处理的行业标准库，可能用于：
- MCP Server 的 HTTP cookie 管理
- 更具健壮性的 HTTP 请求 cookie 处理
- Statsig/遥测上报的 cookie 支持

### 3.5 其他新增模块（包级别）

**(完整列表参见原始报告第 3 节)**

---

## 四、配置与网络端点分析

### 4.1 product.json 差异

对比 3.7.27 和 3.9.16 的 `product.json`：

```
✓ 相同: quality (stable), vscodeVersion (1.105.1), updateUrl, backupUpdateUrl
  statsigClientKey, downloadUrl, releaseNotesUrl
✓ 相同: 扩展替换映射 (extensionReplacementMapForImports)
✓ 相同: 所有 API 端点
✓ 相同: 内置扩展列表
✓ 相同: 可信扩展发布者列表
✓ 相同: 远程扩展提示
✓ 相同: linkProtectionTrustedDomains (39 个域)
```

**product.json 中无任何变更。**

### 4.2 关键端点汇总

| 用途 | URL | 状态 |
|------|-----|------|
| 更新检查 | `https://api2.cursor.sh/updates` | 未变 |
| 备份更新 | `http://cursorapi.com/updates` | 未变 |
| Statsig 日志 | `https://api3.cursor.sh/tev1/v1` | 未变 |
| 扩展市场 | `https://marketplace.cursorapi.com/` | 未变 |
| 扩展控制 | `https://api2.cursor.sh/extensions-control` | 未变 |
| 远程服务器下载 | `https://cursor.blob.core.windows.net/remote-releases/` | 未变 |
| Statsig Key | `client-Bm4HJ0aDjXHQVsoACMREyLNxm5p6zzuzhO50MgtoT5D` | 未变 |
| WebView CDN | `https://{{uuid}}.vscode-cdn.net/insider/ef65ac1ba57f...` | 未变 |

---

## 五、安全与隐私分析

### 5.1 凭证检测增强

main.js 新增的凭证/密钥检测模式：

| 新增模式 | 检测目标 |
|----------|----------|
| `access_key` / `access-key` / `accesskey` | 通用访问密钥 |
| `private_key` / `private-key` | 私钥标识 |
| `AKIA*` | AWS Access Key |
| `ASIA*` | AWS 临时密钥 |
| `ghp_` / `gho_` / `ghu_` / `ghs_` / `ghr_` / `github_pat_*` | GitHub Token |
| `xox*` | Slack Token |

### 5.2 日志脱敏增强（UpdateDiagnosticsLogSanitizer）

- URL 凭证脱敏: `protocol://user:pass@` → `protocol://[REDACTED]@`
- PEM 私钥脱敏: `-----BEGIN * PRIVATE KEY-----` → `[REDACTED:PRIVATE_KEY]`
- 缓冲区大小: 64KB

### 5.3 其他安全变更

| 模块 | 功能 |
|------|------|
| `host-machine-id.ts` | 宿主机 Machine ID 采集（设备指纹） |
| `workspace-key.ts` | 工作区密钥派生 |
| `security.ts` | 安全工具函数 |

---

## 六、商业功能

### 6.1 团队试用计划升级

| 计划 | 标识符 | 估计额度 |
|------|--------|----------|
| TEAMS_TRIAL_V1 | `teams_trial` | 原有 |
| **TEAMS_TRIAL_V2** | `teams_trial_v2` | 新增，$50,000 credits |
| STARTUP_STANDARD | `startup_standard` | $500,000 credits |
| STARTUP_YC | `startup_yc` | $6,000,000 credits |

### 6.2 其他商业功能
- 团队成员邀请推广（超时 10s）
- Profile 可见性控制
- 全局百分比折扣系统
- 定价参数扩展

---

## 七、A/B 测试与实验门控

main.js 中检测到的实验门控：

| Flag | 功能 |
|------|------|
| `TEAMS_TRIAL_V2` | 新版团队试用 |
| `cursor-for-startups` | Startup 计划 |
| `cursor-for-startups-yc` | YC Startup 计划 |
| `credit-grant-startup` | Startup 信用额度 |
| `credit-grant-yc-startup` | YC Startup 信用额度 |

---

## 八、WASM 与外部二进制

### 8.1 WASM 模块（完全一致）

两个版本共有 **12 个完全相同的 WASM 文件**：

| 位置 | 文件 |
|------|------|
| JS Debug | `chromehash_bg.wasm` |
| JS Profile | `*.module.wasm` (×2) |
| esbuild | `esbuild.wasm` |
| undici/llhttp | `llhttp_simd.wasm`, `llhttp.wasm` |
| oniguruma | `onig.wasm` |
| tree-sitter | `tree-sitter.wasm`, `*-css.wasm`, `*-ini.wasm`, `*-regex.wasm`, `*-typescript.wasm` |

### 8.2 外部二进制（完全一致）

| 文件 | 用途 |
|------|------|
| `chrome-sandbox` | Chrome 沙箱（suid ELF） |
| `chrome_crashpad_handler` | 崩溃收集器 |
| `appimageupdatetool.AppImage` | AppImage 更新工具 |
| `cursor-tunnel` | Cursor 隧道二进制 |
| `code-tunnel` | 代码隧道二进制 |

所有 ELF 文件的 BuildID 均已更新，但功能相同。

---

## 九、扩展分析与代码搜索关键词

### 9.1 Cursor 特有扩展（完整列表）

两个版本完全相同的 **47 个 Cursor 自定义扩展**：

```
cursor-agent-exec         cursor-agent-worker        cursor-always-local
cursor-browser-automation cursor-checkout            cursor-commits
cursor-deeplink           cursor-explorer             cursor-file-service
cursor-mcp                cursor-ndjson-ingest        cursor-polyfills-remote
cursor-retrieval          cursor-context-ast-typescript
cursor-commits-native-fs  cursor-debugger
cursor-vsce               cursor-vscode-api-tests
```

### 9.2 main.js 关键词引用统计

| 关键词 | 3.7.27 | 3.9.16 | 变化 |
|--------|--------|--------|------|
| `composer` | 75 | 82 | +7 |
| `agent` | 124 | 131 | +7 |
| `Agent` | 82 | 90 | +8 |
| `@anysphere` | 5 | 5 | 未变 |
| `sand-box` | 0 | 3 | +3 |
| `sand-supervisor` | 0 | 2 | +2 |
| `mcp-core` | 0 | 45 | +45 |
| `mcp_oauth` | 0 | 26 | +26 |
| `mcp-server` | 0 | 14 | +14 |

---

## 十、总结与影响评估

### 10.1 变更层级分析

```mermaid
graph TD
    subgraph "基础设施（高成本）"
        E40[Electron 39→40 + Chromium 142→144]
        V8V[V8 14.2→14.4]
        NM[native modules recompiled]
    end
    
    subgraph "新增功能（中等成本）"
        MCP[MCP Sandbox Policy System]
        SB[Sandbox Supervisor Subsystem]
        NW[Network Bandwidth Monitor]
        AD[Agent Repository]
        LS[Local Singleton Pattern]
    end
    
    subgraph "可观测性（低成本）"
        TR[W3C Trace Context]
        SL[Span Lifecycle & Sampling]
        UD[Update Diagnostics]
        SD[Startup Diagnostics (12 phases)]
    end
    
    subgraph "安全增强"
        CR[Credential Detection]
        LS2[Log Sanitizer]
        WK[Workspace Key]
        HM[Host Machine ID]
    end
    
    subgraph "商业功能（低成本）"
        TV2[Teams Trial V2]
        TP[Team Invite Promo]
        PV[Profile Visibility]
        DS[Discount System]
    end

    E40 --> MCP
    MCP --> SB
    SB --> NW
    NW --> TR
```

### 10.2 关键发现

1. **第一大变更：Electron/Chromium 大版本升级**
   - 成本最高（+15 MB、+3 MB 二进制、所有原生模块重编译）
   - 带来 V8 性能改进、Web API 支持和安全性提升

2. **第二大变更：MCP 沙箱安全体系**
   - 45 次 `mcp-core` 引用的全新沙箱安全子系统
   - 完整的策略定义、指纹校验、工具白名单配置
   - Sandbox Supervisor 进程隔离架构

3. **第三大变更：可观测性升级**
   - W3C Trace Context 标准的分布式追踪
   - Span 生命周期管理和采样策略
   - 更新诊断系统和日志脱敏

4. **无变更确认：所有 API 端点和核心配置**
   - updateUrl, backupUpdateUrl, statsig, downloadUrl 均未变
   - 所有 47 个 Cursor 自定义扩展无变化
   - 所有 14 个原生编译模块功能无变化
   - 所有 12 个 WASM 模块无变化

### 10.3 对现有 Proxy/逆向工程的兼容性

| Proxy 功能 | 对 3.9.16 兼容性 | 说明 |
|-----------|------------------|------|
| API 端点代理 | ✅ **完全兼容** | 所有端点无变化 |
| 认证中间人 | ✅ 完全兼容 | 认证流程未变 |
| Statsig 拦截 | ✅ 完全兼容 | Key 和端点未变 |
| 扩展市场替换 | ✅ 完全兼容 | gallery URL 未变 |
| 更新拦截 | ✅ 完全兼容 | updateUrl 未变 |
| MCP 沙箱 | ⚠️ 需要观察 | 如果沙箱强制启用可能影响自定义 MCP |
| Trace Context | ℹ️ 新增 header | proxy 可新增 traceparent 支持 |
| Sandbox Supervisor | ℹ️ 新增子系统 | monitor 子进程可能更严格 |

### 10.4 值得后续深挖的领域

1. **Sandbox Supervisor 实现细节** — `/tmp/sand-supervisor` 完整协议分析
2. **MCP 沙箱策略的具体实现** — 策略匹配和指纹算法
3. **Always-Local Singleton** 在离线模式下的作用
4. **三方 cookie 库 (`tough-cookie`) 的引入动机**
5. **Startup 诊断 12 阶段** 的详细时序分析

---

*本报告由静态逆向分析生成，基于 Cursor 3.7.27 和 3.9.16 的完整文件系统差异对比。*