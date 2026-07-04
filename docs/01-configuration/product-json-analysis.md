# Cursor 3.7.27 product.json 深度分析

## 基本信息

| 字段 | 值 |
|------|------|
| 版本 | 3.7.27 |
| 质量渠道 | stable |
| VSCode基底 | 1.105.1 |
| 提交Hash | e48ee6102a199492b0c9964699bf011886708ba3 |
| 构建日期 | 2026-06-10T01:46:16.942Z |
| 许可 | MIT |

## 基础设施 URLs

### 更新服务器
```
主更新URL:  https://api2.cursor.sh/updates
备用更新URL: http://cursorapi.com/updates
发布说明:    https://www.cursor.com/changelog
下载页:      https://cursor.com/downloads
```

### 远程服务器
```
远程下载模板: https://cursor.blob.core.windows.net/remote-releases/${commit}/vscode-reh-${os}-${arch}.tar.gz
```

### 扩展市场
```
市场服务:  https://marketplace.cursorapi.com/_apis/public/gallery
项目URL:   https://marketplace.cursorapi.com/items
资源模板:  https://marketplace.cursorapi.com/{publisher}/{name}/{version}/{path}
控制URL:   https://api2.cursor.sh/extensions-control
```

### WebView 内容
```
URL模板: https://{{uuid}}.vscode-cdn.net/insider/ef65ac1ba57f57f2a3961bfe94aa20481caca4c6/out/vs/workbench/contrib/webview/browser/pre/
```

## AI 配置

### aiConfig
```json
{
  "ariaKey": "control-key"   // AI功能的热键前缀
}
```

### statsig (功能开关/遥测)
```json
{
  "statsigClientKey": "client-Bm4HJ0aDjXHQVsoACMREyLNxm5p6zzuzhO50MgtoT5D",
  "statsigLogEventProxyUrl": "https://api3.cursor.sh/tev1/v1"
}
```
- **Statsig** 是功能开关和实验平台
- 客户端密钥用于初始化 Statsig SDK
- 遥测事件通过 `api3.cursor.sh/tev1/v1` 代理上报

### defaultChatAgent
默认AI聊天代理配置为 **GitHub Copilot**：
```json
{
  "extensionId": "GitHub.copilot",
  "chatExtensionId": "GitHub.copilot-chat",
  "providerId": "github",
  "providerScopes": [
    ["user:email"],
    ["read:user"],
    ["read:user", "user:email", "repo", "workflow"]
  ],
  "entitlementUrl": "https://api.github.com/copilot_internal/user"
}
```
支持:
- GitHub.com 和 GitHub Enterprise (GHE.com)
- Copilot Chat 和 Completions
- 套餐检查、配额限制、令牌刷新

## Cursor 信任的扩展

### 认证访问
```json
"cursorTrustedExtensionAuthAccess": [
  "anysphere.cursor-retrieval",
  "anysphere.cursor-commits"
]
```

### 协议处理器
```json
"trustedExtensionProtocolHandlers": [
  "vscode.git",
  "vscode.github-authentication",
  "vscode.microsoft-authentication",
  "anysphere.cursor-deeplink",
  "anysphere.cursor-mcp"
]
```

### 信任域 (链接保护白名单)
从 `linkProtectionTrustedDomains` 提取的Cursor特定域：
```
cursor.so, cursor.sh, cursor.com, *.cursor.com
docs.cursor.sh, changelog.cursor.sh/changelog.cursor.com
review.cursor.com
marketplace.cursorapi.com, cursor-cdn.com, cursor-marketplace.com
```

外部信任的MCP域：
```
mcp.notion.com, mcp.sentry.dev, mcp.atlassian.com, mcp.intercom.com
mcp.asana.com, mcp.linear.app, mcp.figma.com, mcp.context7.com
mcp.prisma.io, mcp.squareup.com
```

**分析**: Cursor 支持大量第三方MCP服务器集成

## 扩展替换映射

Cursor 用自己的扩展替换 VSCode 的以下扩展：

| VSCode 扩展 | Cursor 替换 |
|------------|------------|
| ms-vscode-remote.remote-ssh | anysphere.remote-ssh |
| ms-vscode-remote.remote-containers | anysphere.remote-containers |
| ms-vscode-remote.remote-wsl | anysphere.remote-wsl |
| jeanp413.open-remote-ssh | anysphere.remote-ssh |
| jeanp413.open-remote-wsl | anysphere.remote-wsl |
| ms-python.vscode-pylance | anysphere.cursorpyright |
| ms-vscode.cpptools | anysphere.cpptools |
| ms-dotnettools.csharp | anysphere.csharp |

### Cursor 特有 API 提案
Cursor 扩展使用特有 API 提案：
- `cursor` — 基础 Cursor API
- `cursorTracing` — Cursor 追踪
- `cursorNoDeps` — 无依赖模式

## 扩展版本锁定

| 扩展 | 最低版本 | 最高版本 |
|------|---------|---------|
| ms-vscode.cpptools | 1.20.5 | 1.23.6 |
| ms-python.vscode-pylance | 2024.4.1 | 2024.8.1 |
| ms-vscode-remote.remote-containers | 0.394.0 | 0.394.0 |
| ms-vscode-remote.remote-wsl | 0.81.8 | 0.81.8 |
| ms-vscode-remote.remote-ssh | 0.113.1 | 0.113.1 |
| ms-vscode-remote.remote-server | 1.5.1 | 1.5.1 |

**分析**: 远程扩展版本被严格锁定，C++工具和 Pylance 也有版本范围限制

## 阻止的扩展
```json
"cannotImportExtensions": [
  "github.copilot-chat",
  "github.copilot",
  "ms-vscode.remote-explorer"
]
```
**分析**: Cursor 阻止导入 GitHub Copilot，用自己的AI功能替代

## 遥测设置

```json
{
  "removeTelemetryMachineId": true,     // 移除机器ID以保护隐私
  "enabledTelemetryLevels": {
    "error": true,                       // 启用错误遥测
    "usage": true                        // 启用使用遥测
  },
  "enableTelemetry": true                // 总开关
}
```

## 构建时移除的调试功能

编译过程中会删除这些标记行的代码（42个功能标记）：
```
__disable_development_tooling__
__disable_separate_product_json_for_remote_ssh__
__disable_composer_handle_debugging__
__disable_backend_selection_keyboard_shortcuts__
__remove_to_default_use_prod_backend__
__disable_console_log__
__disable_cpp_control_token__
__disable_cursoreval__
__disable_ai_assert__
__disable_ai_debugger__
__disable_shadow_workspace_debugging__
__disable_context_ast_typescript_fork__
__disable_cpp_eval__
__disable_dev_flush_logs__
__disable_multi_file_applies__
__disable_embedding_model_switch__
__disable_cursor_prediction_options__
__disable_ttft_logging__
__disable_always_on_fast_apply_chunk_speculation__
__disable_runnable_code_blocks__
__disable_auto_import_experiments__
__disable_warning_on_too_many_update_locks__
__disable_dev_only_prompt_quality_link__
__disable_menubar_debugging__
__disable_multiple_embeddings__
__disable_hmr__
__disable_resume__
__disable_console_error__
__disable_composer_migration_warning__
__disable_rcp_server__
__disable_agent_cli_formatter__
__disable_performance_events__
__allow_skip_privacy_mode_grace_period__
__disable_kill_all_modes_and_surface_bg__
__disable_statsig__
__disable_dev_backend_and_login_argv_args__
__disable_fill_screen__
__disable_user_intent_agents__
__disable_local_mode__
```

**分析**: 这些标记揭示了大量内部功能：
1. **AI Composer**: 有 composer 处理、迁移、调试功能
2. **Agent CLI 格式化器**: Agent的命令行输出格式化
3. **RCP 服务器**: 远程控制协议服务器
4. **Shadow Workspace**: 影子工作区调试
5. **C++ 控制令牌**: C++代码生成的控制机制
6. **Multi-file applies**: 多文件应用
7. **Fast apply chunk speculation**: 快速应用块推测
8. **TTFT 日志**: 首令牌时间监控
9. **Typescript AST Context**: TypeScript AST上下文分析
10. **Statsig**: 功能开关系统
11. **Backend selection**: 后端选择快捷键
12. **User intent agents**: 用户意图智能体
13. **Local mode**: 本地模式
14. **Privacy mode grace period**: 隐私模式宽限期

## 应用标识

| 平台 | 标识符 |
|------|--------|
| macOS (bundle) | com.todesktop.230313mzl4w4u92 |
| Linux (icon) | co.anysphere.cursor |
| 数据文件夹 | .cursor |
| URL协议 | cursor:// |
| 应用名 | Cursor |

## GitHub Copilot 集成

GitHub Copilot 被完全集成到 Cursor 中：
```json
{
  "gitHubEntitlement": {
    "providerId": "github",
    "entitlementUrl": "https://api.github.com/copilot_internal/user",
    "extensionId": "github.copilot"
  }
}
```
但是同时 `cannotImportExtensions` 阻止了原版 Copilot 扩展的导入，这意味着：**Cursor 内部集成了 Copilot 功能，但阻止用户单独安装原版 Copilot 扩展**。

## 信任的扩展发布者
```json
["microsoft", "github", "anysphere", "ms-toolsai", "ms-python", 
 "ms-dotnettools", "ms-azuretools", "ms-vscode", "ms-vsliveshare"]
```

## 文件校验和
```json
{
  "vs/base/parts/sandbox/electron-sandbox/preload.js": "vPLRg69F6fcLz5NLATH8eXPlHCtQTiwNOrlDviuQwtw",
  "vs/workbench/workbench.desktop.main.js": "OaoM+9OVIEgFoFGA0hQxXFErR1Gchw1zzuOI9T3SY5c",
  "vs/workbench/workbench.desktop.main.css": "M4KHUUGfIiJCK/wkwBwVbu1sdA2odbMkD/vDbEL56O0",
  "vs/workbench/api/node/extensionHostProcess.js": "TGijJADde9urp2ymd0C4TxEzK4/ivShfbxe0VtDeALo",
  "vs/code/electron-sandbox/workbench/workbench.html": "xM88riEAB8YOlPKfLX9onuni9D3kgWC6L0LspVZUvQs",
  "vs/code/electron-sandbox/workbench/workbench.js": "e1+mjyhWTrEq5iNi14VQCPNNianc1bWIjW2hxbLxKAc"
}
```

## 总结：关键发现

1. **Cursor 是 Copilot 的替代品而非补充**: 阻止导入原版 Copilot，但同时内置了类 Copilot 功能
2. **AI 功能开关丰富**: 42个开发标记，大量 AI 功能可动态控制
3. **远程开发全面替换**: VSCode 的远程扩展全部被 Cursor 版本替换
4. **MCP 生态支持**: 信任多个第三方 MCP 服务器
5. **Statsig 驱动**: 遥测和功能开关通过 Statsig 管理
6. **双遥测体系**: Sentry (错误追踪) + Statsig (功能开关/实验)
7. **产品名统一**: 所有代号都是"Cursor"，系统名简洁
