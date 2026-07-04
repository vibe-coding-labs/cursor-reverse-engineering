# Cursor 3.7.27 main.js 主进程逆向分析

## 概述

`main.js` (1.6MB) 是 Cursor 的主进程入口，负责应用生命周期、窗口管理、IPC 通信和核心服务。

## Cursor 特有 API 提案

主进程定义了以下 Cursor 特有 API（通过 vscode.proposed.cursor*.d.ts）：

| API 提案 | 出现次数 | 功能推测 |
|----------|---------|---------|
| cursorDiskKV | 21 | 磁盘键值存储（持久化配置/状态） |
| cursorDiskKVGet | 19 | KV 读取操作 |
| cursorProclist | 5 | 进程列表管理 |
| cursorTracing | 2 | 分布式追踪 |
| cursorPseudoterminal | 2 | 伪终端（Agent 命令执行） |
| cursorNoDeps | 2 | 无依赖模式 |
| cursorPublic | 2 | 公开 API |
| cursorAuth | 1 | 认证相关 |
| cursorRpcDevtools | 1 | RPC 开发者工具 |
| cursorSocketCloseError | 1 | Socket 断开错误处理 |
| cursorSentryEvents | 1 | Sentry 事件 |
| cursorPredictionOptions | 1 | AI 预测选项 |
| cursorPlan | 1 | Cursor Plan 功能 |
| cursorKV | 1 | 通用键值存储 |
| cursorFrames / cursorFrame | 2 | 帧处理 |
| cursorFileBlame | 1 | Git Blame 集成 |

## 核心 API 端点

### Cursor 服务器 API
```
https://api2.cursor.sh                      — 主 API
  /aiserver.v1.AnalyticsService/UploadIssueTrace  — 遥测上传
https://api3.cursor.sh                      — 遥测代理
```

### Cursor VM 管理
```
格式: https://{region}.cursorvm-manager.com
用途: AI 推理基础设施管理

区域:
  生产: us1, us1p, us3, us3p, us4, us4p, us5, us5p, us6, us6p, us7, us7p
  训练: train1 ~ train9
  评估: eval1 ~ eval3
  测试: test1, test2-gcp
  开发: dev
```

### 扩展市场
```
https://marketplace.cursorapi.com/   — Cursor 扩展市场
https://marketplace.cursor.sh/       — Cursor 市场（备用）
https://staging-marketplace.cursor.sh/ — 测试市场
https://open-vsx.org                 — 兼容市场
```

## 认证相关关键词

| 关键词 | 出现次数 | 说明 |
|--------|---------|------|
| auth | 172 | 认证相关 |
| token | 89 | 令牌处理 |
| secret | 27 | 密钥管理 |
| login | 12 | 登录 |
| signIn | 7 | 登录操作 |
| accessToken | 3 | 访问令牌 |
| license | 3 | 许可验证 |
| trial | 1 | 试用期 |
| subscription | 1 | 订阅状态 |

## 存储系统

### cursorDiskKV — 磁盘键值存储
主进程大量使用 `cursorDiskKV` API，有 14 种不同操作：
- Get, GetBatch, GetWithLogs, GetBinary, GetPrefix, GetPrefixKeys, GetPrefixBinary
- Set, SetBinary, SetBatch, SetBinaryBatch, SetIfAbsent, ReplaceIfEquals
- Delete, ClearPrefix

这表示 Cursor 使用一个**完整的键值存储系统**来管理持久化数据，可能用于：
- 用户配置/首选项
- 认证令牌
- AI 模型缓存
- Agent 状态数据

## VSCode API 提案扩展

Cursor 3.7 扩展了大量 VSCode API 提案，按功能分类：

### AI/Chat
- chatEditing, chatParticipantAdditions, chatProvider
- chatReferenceBinaryData, chatStatusItem
- interactive, embeddings
- languageModelSystem, languageModelCapabilities
- **languageModelToolsForAgent** — Agent 工具调用 API
- **mcpConfigurationProvider** — MCP 配置提供者
- **aiRelatedInformation**, **aiTextSearchProvider**

### Agent/Terminal
- cursorPseudoterminal — 伪终端
- terminalDataWriteEvent, terminalExecuteCommandEvent
- terminalQuickFixProvider, terminalSelection

### 内联补全
- inlineCompletionsAdditions
- inlineEdit — 内联编辑

### 其他
- tunnelFactory, tunnels — 隧道
- resolvers — 远程解析器
- testObserver, testRelatedCode — 测试

## 进程列表管理 (cursorProclist)

这是主进程的一个独特功能，用于管理系统进程列表。可能用于：
- Agent 运行时的子进程管理
- 终端进程跟踪
- 进程监控和清理

## 关键分析发现

1. **Cursor 扩展了大量 VSCode API**: 从 VSCode 的主分支引用自定义 API 提案
2. **存储系统完整**: cursorDiskKV 提供了类似 Redis 的键值存储能力
3. **遥测直连**: 直接通过 api2.cursor.sh 上传遥测
4. **自有推理基础设施**: cursorvm-manager.com 多区域部署
5. **MCP 原生支持**: mcpConfigurationProvider 是 VSCode API 提案的一部分
6. **语言模型工具**: languageModelToolsForAgent 说明 Agent 可以直接调用工具