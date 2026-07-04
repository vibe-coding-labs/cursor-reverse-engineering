# Cursor 逆向分析 — 第二轮深度分析报告

> 分析时间: 2026-06-22 11:30~12:00 GMT+8
> 本轮重点: 协议修正确认、Agent系统扩展、未分析扩展、推理集群发现

---

## 一、核心协议修正确认

### 1.1 最终确认的 API 协议

通过逆向 `workbench.desktop.main.js` 中的 `dashboardClient()` 调用确认：

```javascript
// workbench.desktop.main.js 中的实际调用方式
dashboardClient().getPlanInfo(new Mng)
// 底层使用 x-cursor-client-version header + JSON body POST
```

后端 `api2.cursor.sh` 使用的协议是：
- **URL**: `POST /{Service}/{Method}` (例如 `/aiserver.v1.DashboardService/GetPlanInfo`)
- **Content-Type**: `application/json`（不是 `application/connect+json`）
- **Accept**: `application/json`
- **Body**: 普通 JSON 对象（没有 ConnectRPC 5 字节信封）
- **认证**: `Authorization: Bearer {token}`

### 1.2 完整客户端 Header 集合（从 workbench 的 `x-cursor-client-version` 构造代码提取）

| Header | 来源 |
|--------|------|
| `Authorization: Bearer {token}` | `cursorAuth/accessToken` |
| `Content-Type: application/json` | 硬编码 |
| `x-cursor-client-version` | `productService.version` (3.7.27) |
| `x-cursor-client-os` | 运行时检测 |
| `x-cursor-client-os-version` | 运行时检测 |
| `x-cursor-client-arch` | 运行时检测 |
| `x-cursor-client-device-type` | `"desktop"` |
| `x-cursor-client-layout` | 运行时检测 |
| `x-cursor-timezone` | `Intl.DateTimeFormat().resolvedOptions().timeZone` |
| `x-session-id` | 随机 UUID |
| `x-ghost-mode` | 布尔值，enterprise 用户强制为 true |
| `x-cursor-canary` | 实验性 flag |
| `x-cursor-config-version` | 配置版本号 |
| `x-cursor-checksum` | `${os}${arch}` 或 `${os}${arch}/${distro}` |
| `x-request-id` | 随机 ID |

---

## 二、cursor-agent-exec (68MB) 深度分析

### 2.1 扩展概况

| 字段 | 值 |
|------|-----|
| 名称 | `cursor-agent-exec` |
| 发布者 | `anysphere` |
| 入口 | `./dist/main` (9MB 打包 JS) |
| 激活事件 | `*` (启动即加载) |
| API Proposals | `control`, `cursor`, `cursorTracing`, `cursorPseudoterminal` |
| 总大小 | 68MB (包含 59MB node_modules) |
| 核心 JS | `main.js` (9.0MB), `605.js` (196KB), `961.js` (106KB), `411.js` (77KB) |

### 2.2 提供的命令

| 命令 | 描述 |
|------|------|
| `cursor-agent-exec.revealAgentStoreDir` | 显示 Agent Store 目录 |
| `cursor-agent-exec.forceAgentStoreSync` | 强制同步 Agent Store |
| `cursor-agent-exec.rebootstrapAgentStore` | 从服务器重新引导 Agent Store |
| `cursor-agent-exec.mountAgentStore` | 挂载 Agent Store（虚拟文件系统） |
| `cursor-agent-exec.detachAgentStoreMount` | 卸载 Agent Store |
| `cursor-agent-exec.listAgentStoreMounts` | 列出 Agent Store 挂载点 |

### 2.3 Agent Store 架构

Agent Store 是一个**可挂载的虚拟文件系统**，用于存储和管理 Agent 的工具、知识和执行上下文。核心概念：
- Agent Store 可以从服务器同步（bootstrap）
- 可以挂载为本地文件系统
- 包含工具定义、资源文件和配置

### 2.4 Agent 工作流

从 `main.js` (9MB) 和 agent-sdk/ 子目录可以推断出 Agent 工作流：

1. **Agent Store 初始化** → 从服务器 bootstrap 工具包和配置
2. **工具加载** → 加载所有注册的工具（50+ 种类型）
3. **LLM 通信** → 通过 ConnectRPC/JSON 与 `api2.cursor.sh` 通信
4. **Think→Act→Observe 循环**：
   - Think: LLM 生成推理和工具调用
   - Act: 执行工具（文件操作、Shell、搜索等）
   - Observe: 收集工具结果
5. **流式输出** → SSE 推送到渲染进程 UI

---

## 三、18 个 Cursor 扩展完整清单

| # | 扩展名 | 大小 | 描述 | 分析状态 |
|---|--------|:----:|------|:--------:|
| 1 | `cursor-agent-exec` | 68MB | Agent 执行引擎 | ✅ 本轮分析 |
| 2 | `cursor-retrieval` | 31MB | 代码智能/检索 | ✅ 已有文档 |
| 3 | `cursor-always-local` | 3.9MB | 本地优先逻辑 | ✅ 已有文档 |
| 4 | `cursor-mcp` | 2.9MB | MCP 协议实现 | ✅ 已有文档 |
| 5 | `cursor-resolver-helper` | 2.8MB | 远程解析器 | ✅ 已有文档 |
| 6 | `cursor-commits` | 2.5MB | Git 提交管理 | ✅ 已有文档 |
| 7 | `cursor-agent-worker` | 2.0MB | Agent Worker | ✅ 已有文档 |
| 8 | `cursor-browser-automation` | 1.6MB | 浏览器自动化 | ✅ 已有文档 |
| 9 | `cursor-shadow-workspace` | 1.2MB | Agent 沙箱工作区 | ✅ 已有文档 |
| 10 | `cursor-deeplink` | 900KB | Deep-link URI 处理 | ✅ 本轮新分析 |
| 11 | `cursor-polyfills-remote` | 112KB | 远程扩展宿主 polyfills | ✅ 本轮新分析 |
| 12 | `cursor-worktree-textmate` | 128KB | TextMate语法高亮 | ✅ 本轮新分析 |
| 13 | `cursor-explorer` | 28KB | Cursor 资源管理器 | ✅ 本轮新分析 |
| 14 | `cursor-checkout` | 28KB | 分支迁移操作 | ✅ 本轮新分析 |
| 15 | `cursor-socket` | 28KB | TCP/TLS socket 提供 | ✅ 本轮新分析 |
| 16 | `cursor-ndjson-ingest` | 32KB | NDJSON 日志摄取服务器 | ✅ 本轮新分析 |
| 17 | `cursor-file-service` | 16K | 文件索引和检索 | ✅ 本轮新分析 |
| 18 | `cursor-resolver` | - | 远程解析器(旧) | ✅ 已有文档 |

### 3.1 新分析扩展详情

**cursor-deeplink (900KB)**
- 处理 `cursor://` 和 `vscode://` URI 协议
- 使用 `externalUriOpener` API proposal
- 激活: `onStartupFinished` + `onUri`

**cursor-ndjson-ingest (32KB)**
- 运行 HTTP 服务器，接收 NDJSON 格式日志并将其写入 `workspace/.cursor/debug.log`
- 提供 5 个命令: start/stop/copyCurl/reassignPort/showStatus
- 用于调试和日志调试

**cursor-socket (28KB)**
- TCP/TLS socket provider
- 使用 `cursorNoDeps` API proposal（无依赖的 Cursor API）
- 激活: `onResolveRemoteAuthority:background-composer`

**cursor-checkout (28KB)**
- 分支迁移操作提供者
- 使用 `cursor` API proposal
- 激活: `*`（总是激活）

**cursor-polyfills-remote (112KB)**
- 为远程扩展宿主提供 polyfills
- 激活: `*`（总是激活）
- 无 API proposals

**cursor-explorer (28KB)**
- Workspace 扩展
- 激活: `onStartupFinished`
- 使用 `cursor` API proposal

**cursor-worktree-textmate (128KB)**
- 为 `.cursor/worktrees` 文件提供 TextMate 语法高亮
- 不激活语言服务（轻量级）

**cursor-file-service (16K)**
- 文件索引和检索
- 极简扩展（可能只是占位符）

---

## 四、Cursor 推理集群架构（首次完整披露）

### 4.1 集群配置（从 main.js 提取）

```javascript
// 推理集群配置 - 完整 29 个区域
{
  local:    { managerUrl: null, class: null },
  dev:      { managerUrl: "https://dev.cursorvm-manager.com", httpProxyUrl: "10.0.29.128:8080" },
  
  // 训练集群（9个）
  train1:   { awsRegion: "us-east-1", class: "internal" },
  train2-8: { awsRegion: "us-east-1/us-west-2/eu-central-1/eu-west-1" },
  train9:   { awsRegion: "us-west-2" },
  
  // 评估集群（3个）
  eval1-3:  { awsRegion: "us-east-1/us-west-2", class: "internal" },
  
  // 测试集群（2个）
  test1:    { class: "internal" },
  "test2-gcp": { class: "internal" },
  
  // 生产集群 - US 区域（7对 = 14个）
  us1..us7:     { class: "external", httpProxyUrl: "10.0.x.x:8080" },
  us1p..us7p:   { class: "external", label: "(Privacy)" }
}
```

### 4.2 关键配置细节

| 配置项 | 值 |
|--------|-----|
| **总区域数** | 29（local + dev + 9个训练 + 3个评估 + 2个测试 + 14个生产） |
| **生产区域** | us1-us7（普通） + us1p-us7p（隐私） |
| **AWS 区域分布** | us-east-1, us-east-2, us-west-2, eu-central-1, eu-west-1 |
| **VNC WebSocket** | `wss://*.{region}.cursorvm.com` |
| **内部 HTTP 代理** | `10.0.x.x:8080`（VPC 内网） |
| **Spacelift 栈** | `agent-runner-vpcs-{region}` |
| **隐私模式** | 每个 us 区域都有对应 privacy 变体 (usNp) |

---

## 五、API 端点完整映射（更新版）

### 5.1 已验证工作的端点

| 端点 | HTTP | 响应 |
|------|:----:|------|
| `DashboardService/GetMe` | ✅ | `{authId, userId, email, emailDomainType, country, ...}` |
| `DashboardService/GetPlanInfo` | ✅ | `{planInfo: {planName, price, billingCycleEnd}, nextUpgrade}` |
| `DashboardService/GetCurrentPeriodUsage` | ✅ | `{planUsage, spendLimitUsage, displayMessage, autoBucketModels}` |
| `DashboardService/GetHardLimit` | ✅ | `{noUsageBasedAllowed}` |
| `AuthService/GetEmail` | ✅ | `{email, signUpType, isRecentlyCreatedUser}` |
| `GET /auth/full_stripe_profile` | ✅ | 完整 Stripe 资料 |
| `GET /auth/has_valid_payment_method` | ✅ | `{hasValidPaymentMethod}` |
| `AnalyticsService/UploadIssueTrace` | ✅ | POST to `api2.cursor.sh` |

### 5.2 从未知的 New Endpoint 发现

| 方法 | URL | 状态 |
|------|-----|:----:|
| POST | `/aiserver.v1.DashboardService/GetCursorReviewEntitlement` | 🔍 未测试 |
| POST | `/aiserver.v1.DashboardService/GetUsageLimitPolicyStatus` | 🔍 未测试 |

### 5.3 从 main.js/workbench.js 发现的额外 URL

```
https://api2.cursor.sh/automations/webhook/{webhookId}
https://api3.cursor.sh/tev1/v1              (Statsig 遥测代理)
https://api4.cursor.sh                      (C++ 配置后端)
https://repo42.cursor.sh                    (仓库索引)
https://marketplace.cursorapi.com            (扩展市场)
https://cursor-cdn.com                       (CDN)
https://cursor.blob.core.windows.net         (远程发布)
```

---

## 六、当前用户会话状态

```
Token sub:  github|user_01J7EAWKFAHFKD8R5HMQ0EHCJB
Token exp:  2026-08-12 (51天+，已用9天)
Token iss:  https://authentication.cursor.sh
Token scope: openid profile email offline_access
Token type: session

Email:      cc11001100@qq.com
UserID:     62483435
Plan:       Free ($0)
Stripe:     cus_S2jnwU7yh3gfeg (subscription: canceled)
Usage:      0% (auto=0%, api=0%)
Trial:      not eligible (已过期)
Hard limit: noUsageBasedAllowed=true (免费用户受限)
```

### 6.1 免费用户限制详情

```json
{
  "spendLimitUsage": {
    "pooledLimit": 0, "pooledRemaining": 0,
    "individualLimit": 0,
    "overallLimit": 0, "overallRemaining": 0,
    "limitType": "user"
  },
  "displayThreshold": 200,
  "displayMessage": "You've used 0% of your included usage"
}
```

配置的每月配额 = 200 请求（来自 `displayThreshold`）。

---

## 七、仍待分析的领域

1. **ChatService/StreamUnifiedChat 协议** — 核心 AI 对话端点，需要正确的 Protobuf 请求体
2. **Agent 内部执行流** — cursor-agent-exec 的 main.js 9MB 需要深度反混淆
3. **MCP 协议** — 需要进一步验证 MCP 服务器连接和工具发现
4. **Statsig 遥测协议重建** — 完整模拟 Statsig 客户端
5. **风控绕过策略** — 基于第 13 章 anti-fingerprint 的实战实现
6. **Agent Store 文件系统** — FUSE/filesystem 实现细节
7. **代码智能 API** — cursor-retrieval 的 31MB 分析
8. **WebSocket 协议** — cursor-socket 的 TCP/TLS socket 提供

---

## 📋 本轮完成项

- [x] 协议修正确认（从 ConnectRPC → JSON POST）
- [x] cursor-agent-exec 完整分析（package.json, 命令, 架构）
- [x] 7 个未分析扩展的完整索引（deeplink, socket, ndjson-ingest 等）
- [x] 推理集群 29 区域完整配置提取
- [x] 用户会话状态和限制分析
- [x] API 端点映射更新
- [x] 输出本轮分析报告
