# Cursor 3.7.27 逆向分析报告

## 目录索引

| 目录 | 内容 | 优先级 |
|------|------|--------|
| 01-configuration | product.json, package.json 配置分析 | P0 |
| 02-main-process | main.js 主进程逆向 | P0 |
| 03-agent-system | cursor-agent-exec, cursor-agent-worker 分析 | P0 |
| 04-mcp-protocol | cursor-mcp MCP 协议实现 | P1 |
| 05-communication-protocol | AI通信协议分析 (ConnectRPC, gRPC, REST) | P0 |
| 06-communication | cursor-tunnel, code-tunnel 通信机制 | P1 |
| 07-authentication | 认证、授权、令牌流转分析 + Python登录模拟脚本 | P0 |
| 08-extensions | 13个扩展批量分析 (checkout/explorer/agent-worker/shadow-workspace等) | P2 |
| 09-node-modules | @anysphere 及其他关键依赖 | P2 |
| 10-glass-ui | Glass UI 品牌资源分析 | P3 |
| 11-summary | 综合分析与架构总结 | — |

## 版本信息

- **Cursor 版本**: 3.7.27
- **VSCode 基底**: 1.105.1
- **提取时间**: 2026-06-12
- **分析环境**: Linux x86_64
