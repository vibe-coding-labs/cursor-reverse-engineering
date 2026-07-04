# Cursor Agent 执行系统分析 (cursor-agent-exec)

## 概述

cursor-agent-exec 是 Cursor 3.7.27 中**最大且最重要的扩展**（68MB），实现了完整的 AI Agent 执行引擎。它代理 AI Agent 在用户本地环境中的操作，包括文件操作、命令执行、工具调用等。

## 扩展元数据

| 字段 | 值 |
|------|------|
| 名称 | cursor-agent-exec |
| 发布者 | anysphere |
| 版本 | 0.0.1 |
| 入口 | ./dist/main |
| API提案 | control, cursor, cursorTracing, cursorPseudoterminal |

## 发现的 API 端点

### LLM 提供者
```
https://api.anthropic.com/v1    — Anthropic Claude API
https://api.openai.com/v1        — OpenAI API
https://bedrock-runtime.us-east-1.amazonaws.com  — AWS Bedrock
```

### Cursor VM 管理（Cursor 自己的推理基础设施）
```
格式: https://{region}.cursorvm-manager.com
生产区域:
- us1.cursorvm-manager.com, us1p.cursorvm-manager.com
- us3.cursorvm-manager.com, us3p.cursorvm-manager.com
- us4.cursorvm-manager.com, us4p.cursorvm-manager.com
- us5.cursorvm-manager.com, us5p.cursorvm-manager.com
- us6.cursorvm-manager.com, us6p.cursorvm-manager.com
- us7.cursorvm-manager.com, us7p.cursorvm-manager.com

训练集群:
- train1 ~ train9.cursorvm-manager.com

评估集群:
- eval1 ~ eval3.cursorvm-manager.com

测试集群:
- test1.cursorvm-manager.com, test2-gcp.cursorvm-manager.com

开发集群:
- dev.cursorvm-manager.com
```

### Cursor 网站集成
```
https://cursor.com/llms.txt                    — LLM 控制文件
https://cursor.com/docs/cloud-agent/setup      — Cloud Agent 文档
https://cursor.com/docs/integrations/slack      — Slack 集成
https://cursor.com/onboard                      — 新手引导
https://www.cursor.com/agents/mcp/oauth/callback — MCP OAuth 回调
```

## Agent Store 系统

扩展注册了6个命令，全部与 **Agent Store** 相关：

### 命令列表
| 命令 | 功能 | 可见条件 |
|------|------|---------|
| `cursor-agent-exec.revealAgentStoreDir` | 显示 Agent Store 目录 | isDevUser |
| `cursor-agent-exec.forceAgentStoreSync` | 强制同步 Agent Store | isDevUser |
| `cursor-agent-exec.rebootstrapAgentStore` | 从服务器重新初始化 | isDevUser |
| `cursor-agent-exec.mountAgentStore` | 挂载 Agent Store | isDevUser |
| `cursor-agent-exec.detachAgentStoreMount` | 卸载 Agent Store | isDevUser |
| `cursor-agent-exec.listAgentStoreMounts` | 列出所有挂载 | isDevUser |

**分析**: Agent Store 是一个**可挂载的虚拟文件系统**，支持挂载/卸载操作。这意味着 Agent 的工具和知识以文件系统形式组织。

## API 提案分析

扩展使用4个Cursor特有API提案：
1. **control** — 控制相关API
2. **cursor** — 基础Cursor API  
3. **cursorTracing** — 追踪和遥测
4. **cursorPseudoterminal** — **伪终端** — Agent 可以直接操作终端

**分析**: `cursorPseudoterminal` 的存在说明 Agent 有能力在伪终端中执行命令

## 工具调用能力

基于代码中的 URL 和 API 端点分析，Agent 可以调用：

### LLM/推理
- Claude (Anthropic API)
- GPT (OpenAI API)
- AWS Bedrock (多种模型)
- Cursor 自有推理基础设施 (cursorvm-manager.com)

### 代码执行
- 终端命令执行 (pseudoterminal)
- 文件读写操作
- 代码搜索和检索

### 网络
- HTTP 请求
- GitHub API 集成
- Docker 操作

### 集成
- Slack 集成 (`/integrations/slack`)
- Docker 容器管理 (`/download.docker.com`)
- MCP 工具 (`@modelcontextprotocol/sdk`)

## MCP SDK 覆盖

```json
"overrides": {
  "@modelcontextprotocol/sdk": "1.25.1"
}
```

使用 Anthropic 官方 MCP SDK v1.25.1，但应用了自定义 patch:
```
patches/@modelcontextprotocol+sdk+1.25.1.patch
```

## 文件结构

```
dist/
├── main.js          — 主入口 (打包后)
├── main.js.LICENSE.txt
├── 53.js
├── 112.js
├── 135.js
├── 178.js
├── 198.js
├── 279.js
├── 516.js
├── 538.js
├── 603.js
├── 605.js
├── 660.js
├── 741.js
├── 891.js
├── 908.js
├── 957.js
├── 961.js
patches/
├── @modelcontextprotocol+sdk+1.25.1.patch
package.json
```

## 安全模型

基于命令设计，用户需要：
- 明确的权限提示 (commands 设计模式)
- Agent Store 的挂载/卸载管理
- 开发模式下可见的调试命令

## 关键发现

1. **Cursor 拥有自己的推理基础设施**: cursorvm-manager.com 多区域部署
2. **多LLM提供商支持**: Anthropic + OpenAI + AWS Bedrock + 自有
3. **Agent Store 是核心概念**: 可挂载的文件系统式工具/知识管理
4. **MCP 深度集成**: 使用 Anthropic MCP SDK，有自定义补丁
5. **伪终端能力**: Agent 可以在终端中执行命令
6. **大量内部基础设施**: 训练、评估、测试、生产多套集群