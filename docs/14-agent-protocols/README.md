# Cursor 协议分析索引

## 已完成的协议分析

| 协议 | 文档 | 状态 |
|------|------|:----:|
| AI 通信协议 (ConnectRPC) | `docs/05-communication-protocol/` | ✅ |
| 认证/登录流程 | `docs/07-authentication/` | ✅ 已验证跑通 |
| 风控与遥测机制 | `docs/13-anti-fingerprint/` (7轮) | ✅ |
| **Tool Calling** | `docs/14-agent-protocols/tool-calling-protocol.md` | ✅ |
| **检索协议** | `docs/14-agent-protocols/retrieval-protocol.md` | ✅ |
| **浏览器自动化** | `docs/14-agent-protocols/browser-automation-protocol.md` | ✅ |
| **Git 集成指标** | `docs/14-agent-protocols/commits-protocol.md` | ✅ |
| **Protobuf Schema** | `docs/14-agent-protocols/protobuf-schema-reference.md` | ✅ |

## 交付物结构

```
docs/
├── 14-agent-protocols/
│   ├── tool-calling-protocol.md         ← 50+ 工具类型、调用格式
│   ├── retrieval-protocol.md            ← 语义搜索、代码块结构
│   ├── browser-automation-protocol.md   ← MCP + CDP 浏览器控制
│   ├── commits-protocol.md              ← Git 指标采集与上报
│   └── protobuf-schema-reference.md     ← 完整字段参考
├── 05-communication-protocol/
│   ├── ai-communication-protocol.md     ← AI 模型调用协议
│   └── final-communication-protocol.md  ← 最终版协议文档
├── 06-communication/
│   └── cursor-tunnel-analysis.md        ← SSH/隧道二进制协议
├── 07-authentication/
│   ├── auth-flow-analysis.md            ← 认证流程
│   ├── auth-login-python-simulation.md  ← Python 模拟脚本
│   └── FINAL_REPORT.md                 ← 最终报告
└── 13-anti-fingerprint/ (7轮/8文件)     ← 风控、指纹、遥测完整分析
```
