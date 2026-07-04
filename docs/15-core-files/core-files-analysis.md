# Cursor 核心进程文件分析

## 一、bootstrap-fork.js (20KB)

### 功能
VSCode/Cursor 的**子进程启动器**，负责创建和管理所有子工作进程。

### 启动流程
```
bootstrap-fork.js
  ↓
设置 NLS (本地化) 环境
  ↓
设置控制台重定向 (日志通过 IPC 发给父进程)
  ↓
设置未捕获异常处理器
  ↓
设置父进程存活监控 (每5秒检查，父进程退出则自杀)
  ↓
设置崩溃报告器 (CrashReporter)
  ↓
设置模块解析路径 (核心模块注入)
  ↓
import 对应进程入口 (由 VSCODE_ESM_ENTRYPOINT 环境变量指定)
```

### 子进程类型 (通过 VSCODE_ESM_ENTRYPOINT 区分)
| 入口点 | 用途 |
|--------|------|
| `vs/workbench/api/node/extensionHostProcess` | 扩展主机进程 |
| `vs/code/electron-utility/sharedProcess/sharedProcessMain` | 共享进程 |
| `vs/code/electron-utility/mcpProcess/mcpProcessMain` | MCP 进程 |
| `vs/platform/files/node/watcher/watcherMain` | 文件监视器 |
| `vs/platform/terminal/node/ptyHostMain` | 终端 PTY 主机 |
| `vs/workbench/services/search/worker/localFileSearchMain` | 搜索 Worker |

### 关键特性
- **SIGPIPE 处理**: 忽略 SIGPIPE 信号
- **Windows chdir**: Windows 上自动切到 exe 目录
- **父进程监控**: 每 5 秒 `process.kill(parentPid, 0)` 检查父进程
- **崩溃报告**: 注入 `crashReporter.addExtraParameter("processType", ...)`

---

## 二、cli.js (208KB)

### 功能
独立 CLI 入口，支持与桌面端分离的 CLI 模式：

| 功能 | 说明 |
|------|------|
| `cursor --version` | 版本信息 |
| `cursor --diff <file1> <file2>` | 文件对比 |
| `cursor --add <folder>` | 添加文件夹 |
| `cursor --goto <file:line:col>` | 定位到文件位置 |
| `cursor --wait` | 等待窗口关闭 |
| `cursor --locale <locale>` | 设置语言 |
| `cursor --disable-extensions` | 禁用扩展 |
| `cursor --inspect-extensions <port>` | 调试扩展 |

### 内部
- 解析命令行参数
- 管理 Cursor 窗口生命周期
- 通过 IPC 与主进程通信
- 控制扩展进程管理

---

## 三、mcpProcessMain.js (500KB)

### 功能
MCP 子进程，负责运行 MCP (Model Context Protocol) 服务器。

### 架构
```
主进程 → fork bootstrap-fork.js → MCP 进程 (mcpProcessMain.js)
         ↓
  管理 MCP 服务器 (stdio/SSE/streamableHttp)
         ↓
  工具调用代理
         ↓
  Agent 通过 MCP 调用外部工具
```

### 支持的 MCP 传输方式
| 传输类型 | 说明 |
|---------|------|
| `stdio` | 标准输入输出 |
| `streamableHttp` | HTTP 流式（推荐）|
| SSE (已废弃) | Server-Sent Events |

### 核心功能
- **服务器生命周期管理**: 启动、监控、重启 MCP 服务器
- **会话复用**: sessionIdHash 追踪连接，支持 session 池
- **自动恢复**: 最大重连次数可配置，断线自动重连
- **度量收集**: MCP 服务器性能指标（`mcp_browser_provider_push_duration_ms`）
- **健康探测**: Heartbeat 检测连接状态

### 服务器端点
```javascript
// MCP 服务器通过以下方式注册:
mcpServerConfig = {
  name: string,
  transport: "stdio" | "streamableHttp",
  command: string,      // stdio 模式
  url: string,           // HTTP 模式
  headers: object,       // HTTP 头
}
```

---

## 四、Glass UI

### 资源列表
| 资源 | 用途 |
|------|------|
| `cursor-splash-logo-normal.png` | 正常启动画面 Logo |
| `cursor-splash-logo-glass.png` | Glass 主题启动画面 Logo |
| `cursor-logo-for-dark-theme.webm` | 深色主题动态 Logo |
| `cursor-logo-for-light-theme.webm` | 浅色主题动态 Logo |
| `cloud-environment-setup.png` | 云环境设置界面图 |

### 功能
Glass 是 Cursor 的 Web/云端 UI 层，包含：
- **启动画面** (splash screen)
- **品牌 Logo** (动态 webm 动画)
- **云环境设置界面** (cloud environment setup)
- **统一登录 UI** (`glass` 参数控制)