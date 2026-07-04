# Cursor 扩展批量分析 (未覆盖的13个扩展)

## 按功能分组分析

---

## 一、Git/分支相关

### cursor-checkout (28KB)
**功能**: 分支迁移操作 (Checkout provider for branch migration operations)
**入口**: `./dist/main` | **API**: `cursor`
**分析**: 提供分支迁移的 checkout provider，可能用于 Agent 在 GitHub PR 上下文中自动切换分支。

### cursor-commits (已分析)
> 已有文档: `docs/14-agent-protocols/commits-protocol.md`

---

## 二、远程/网络相关

### cursor-resolver (64KB)
**功能**: Background composer remote authority resolver
**入口**: `./dist/main` | **API**: `cursor`, `cursorNoDeps`, `resolvers`
**分析**: 远程解析器，将 `cursor://` URIs 解析为远程 VS Code 实例的 authority。使用的 API 提案 `resolvers` 说明它与 VSCode 的远程开发解析器接口集成。

### cursor-resolver-helper (2.8MB)
**功能**: Connection token provider for Cursor resolver
**入口**: `./dist/main` | **API**: `cursor`, `cursorNoDeps`
**分析**: 提供远程连接令牌，用于 `cursor-resolver` 的认证握手。提供连接凭据给解析器。

### cursor-polyfills-remote (112KB)
**功能**: Polyfills for workspace extension host
**入口**: `./dist/main` | **API**: 无
**分析**: 为远程工作区扩展主机提供 polyfill（如 `fs`、`net` 等 Node.js 模块的浏览器端实现）。

### cursor-socket (28KB)
**功能**: TCP/TLS socket provider for Cursor extensions
**入口**: `./dist/main` | **API**: `cursor`, `cursorNoDeps`
**分析**: 为扩展提供 TCP/TLS socket 能力，特别是在远程/Web 环境中。

---

## 三、工作区/文件相关

### cursor-explorer (28KB)
**功能**: Workspace extension for Cursor Explorer
**入口**: `./dist/main` | **API**: `cursor`
**分析**: Cursor Explorer 功能，可能提供工作区文件浏览器或 AI 驱动的代码探索功能。

### cursor-file-service (16KB)
**功能**: Handles indexing and retrieval for Cursor
**入口**: `N/A` | **API**: 无
**分析**: 文件索引服务，但入口未定义——可能其功能已经整合到 `cursor-retrieval` 中。最小体积的扩展之一。

### cursor-worktree-textmate (128KB)
**功能**: TextMate-only syntax highlighting for `.cursor/worktrees` files
**入口**: `N/A` | **API**: 无
**分析**: 仅提供 TextMate 语法高亮，不激活语言服务器。用于 `.cursor/worktrees/` 目录下的文件。

---

## 四、日志/调试相关

### cursor-ndjson-ingest (32KB)
**功能**: HTTP server for ingesting NDJSON logs
**入口**: `./dist/main` | **API**: 无
**分析**: 启动本地 HTTP 服务器，接收 NDJSON 格式的日志并写入 `workspace/.cursor/debug.log`。用于捕获 Agent/Composer 的调试日志。

---

## 五、认证/协议相关

### cursor-deeplink (900KB)
**功能**: Handles deep-link URIs
**入口**: `./dist/main` | **API**: `cursor`, `control`, `externalUriOpener`
**分析**: 处理自定义 URI 协议 (`cursor://`)，登录流程的深度链接处理。`externalUriOpener` 提案说明它能打开外部 URI。

### cursor-shadow-workspace (1.2MB)
**功能**: 影子工作区 (Shadow Workspace)
**入口**: `./dist/extension` | **API**: `cursor`
**分析**: 创建隔离的工作区副本用于 AI 操作，在不影响原始文件的情况下进行实验性更改。

```protobuf
service ShadowWorkspaceService {
  rpc GetLintsForChange(GetLintsForChangeRequest) returns (GetLintsForChangeResponse);
  // 在影子工作区中获取变更的 lint 结果
}
```

通信方式: Unix Socket (`shadowWorkspaceSocketPath`)，用于主进程与扩展进程通信。

---

## 六、Agent 基础设施

### cursor-agent-worker (2.0MB)
**功能**: Install and run Cursor agent worker from extension startup
**入口**: `./dist/main` | **API**: `cursor`, `cursorNoDeps`
**分析**: 
- worker API key 管理: `cursor-agent-worker.apiKey` / `cursor-agent-worker.apiKeyHash`
- Worker 进程生命周期管理
- 通过 `agent.v1.PrivateWorkerApiService/GetWorkerId` 获取 Worker ID
- 支持 `workerScope` 和 `workerName` 参数
- 管理 API 密钥的秘密存储 (`secrets.get`)

### cursor-always-local (3.9MB)
**功能**: Implements experimentation features for Cursor
**入口**: `./dist/main` | **API**: `cursor`, `control`, `externalUriOpener`, `contribSourceControlInputBoxMenu`
**分析**: 
核心的**传输层工厂**和**后端服务连接管理器**。
- 管理与 `api2.cursor.sh` 的所有 ConnectRPC 连接
- DNS 查询（DNS-over-HTTPS 或系统 DNS）
- TLS 检查和 HTTP/2 ping 保活
- 多个传输通道: backend, repo, geoCpp, cppConfig, cmdk, telem, agentBidi
- `getCursorCreds()` 和 `getCursorAuthToken()` 提供认证凭据
- 网络变更监控自动重连

---

## 七、Glass UI

```
docs/10-glass-ui 下资源:
├── cursor-splash-logo-normal.png      — 启动画面 Logo
├── cursor-splash-logo-glass.png       — Glass 主题 Logo
├── cursor-logo-for-dark-theme.webm    — 深色主题动画 Logo
├── cursor-logo-for-light-theme.webm   — 浅色主题动画 Logo
└── cloud-environment-setup.png        — 云环境设置 UI

源文件位置: out/vs/glass/browser/media/
Glass 是 Cursor 的 Web/Cloud UI 层，用于云端环境。
```

## 八、核心文件

| 文件 | 大小 | 功能 |
|------|:----:|------|
| `out/bootstrap-fork.js` | 20KB | 子进程启动器，管理扩展/终端/搜索等子进程生命周期 |
| `out/cli.js` | 208KB | CLI 命令行入口，支持 diff/open/wait 等命令 |
| `out/vs/code/electron-utility/mcpProcess/mcpProcessMain.js` | 500KB | MCP 子进程，管理 MCP 服务器(stdio/SSE/streamableHttp) |
| `out/vs/code/electron-sandbox/workbench/workbench.js` | 24KB | 渲染进程工作台入口 |