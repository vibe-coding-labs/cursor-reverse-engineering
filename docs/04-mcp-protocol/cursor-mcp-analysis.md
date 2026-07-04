# Cursor MCP 协议实现分析 (cursor-mcp)

## 概述

cursor-mcp 扩展实现了 **Model Context Protocol (MCP)** 支持，这是 Anthropic 提出的 AI 工具集成标准协议。Cursor 使用 MCP 作为 Agent 与外部工具/服务交互的标准接口。

## 扩展元数据

| 字段 | 值 |
|------|------|
| 名称 | cursor-mcp |
| 发布者 | anysphere |
| 版本 | 0.0.1 |
| 入口 | ./dist/main (2.8MB) |
| 激活事件 | onStartupFinished, onUri |
| 运行类型 | workspace |
| API提案 | control, cursor, cursorTracing |

## MCP SDK 版本

- **@modelcontextprotocol/sdk**: v1.25.1
- **官方源**: Anthropic, PBC (https://anthropic.com)
- **文档**: https://modelcontextprotocol.io
- **SDK 仓库**: https://github.com/modelcontextprotocol/typescript-sdk
- **Cursor 补丁**: 应用了自定义 patch

## 架构设计

### MCP OAuth 集成
```
OAuth 回调端点: https://www.cursor.com/agents/mcp/oauth/callback
```
MCP 服务器可以通过 OAuth 进行身份认证。

### MCP 服务器列表
信任的第三方 MCP 服务器（从 product.json 的 linkProtectionTrustedDomains 提取）：
```
mcp.notion.com         — Notion 知识库
mcp.sentry.dev         — Sentry 错误追踪
mcp.atlassian.com      — Atlassian 全家桶
mcp.intercom.com       — Intercom 客服
mcp.asana.com          — Asana 项目管理
mcp.linear.app         — Linear 项目管理
mcp.figma.com          — Figma 设计工具
mcp.context7.com       — Context7 上下文
mcp.prisma.io          — Prisma 数据库
mcp.squareup.com       — Square 支付
playwright.dev         — Playwright 浏览器测试
```

## 核心发现

### 1. 品牌资源
MCP 使用的品牌标志：
```
https://ptht05hbb1ssoooe.public.blob.vercel-storage.com/assets/uploads/cursorlogomcpv3.svg
```
存储在 Vercel Blob Storage 上的 Cursor MCP Logo。

### 2. Cursor VM 基础设施 (与 Agent 共享)
```
https://dev.cursorvm-manager.com
https://us1.cursorvm-manager.com  (及更多区域)
```
MCP 扩展同样引用 Cursor VM 管理基础设施。

### 3. 扩展钩子
- 启动完成时激活 (`onStartupFinished`)
- URI 协议处理 (`onUri`)，用于处理 MCP OAuth 回调

## MCP 集成点

MCP 在 Cursor 中服务于以下场景：
1. **Agent 工具扩展** — Agent 可以通过 MCP 调用外部服务
2. **第三方集成** — 信任的第三方 MCP 服务器
3. **OAuth 认证** — MCP 服务器的认证流程
4. **工具发现** — 发现可用工具和资源

## Cursor 对 MCP SDK 的定制 (Patch 分析)

Cursor 对 @modelcontextprotocol/sdk v1.25.1 应用了自定义 patch，文件位于：
```
extensions/cursor-agent-exec/patches/@modelcontextprotocol+sdk+1.25.1.patch
extensions/cursor-mcp/patches/@modelcontextprotocol+sdk+1.25.1.patch
```

这表明 Cursor 对标准 MCP 协议进行了扩展修改。

## 安全考虑

- MCP 服务器通过链接保护白名单控制
- OAuth 认证流程保护敏感操作
- 扩展在 workspace 级别运行（可访问工作区资源）
- 信任的第三方 MCP 服务器经过审核