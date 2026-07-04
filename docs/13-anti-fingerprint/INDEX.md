# Cursor 逆向分析索引 — 完整目录

## 项目数据 (最终版)

| 指标 | 数值 |
|------|------|
| 分析轮次 | 37轮 |
| docs/13-anti-fingerprint/ 文档 | 28份 |
| 项目总文档数 | 52份 |
| 分析目录 | 15个 |
| 脚本 | 8个 |

## 7个方向 × 37轮 = 完整覆盖

下游的全部内容已在 `docs/13-anti-fingerprint/` 下呈现，每条方向均有独立文档覆盖。

## 已交付的脚本

- `scripts/cursor_auth.py` — 登录模拟器
- `scripts/cursor_login_catcher.py` — 令牌捕获服务器
- `scripts/simulate_cursor.py` — ConnectRPC 模拟器
- `scripts/simulate_chat.js` — Chat 协议模拟
- `scripts/extract_cursor_token.sh` — Token 提取
- `scripts/catch_cursor_callback.sh` — 深度链接捕获

## 关键修正

1. machineId ≠ 硬件指纹 → 随机UUIDv4
2. 认证 ≠ Auth0 → WorkOS
3. auth域 ≠ prod.authentication.cursor.sh → authentication.cursor.sh

## 核心结论

传输层：ConnectRPC (0x00+uint32+body 分帧，application/connect+json)  
认证层：Authorization: Bearer {JWT} + x-cursor-client-* 18个自定义头  
会话层：x-session-id: UUIDv4 (每个请求独立)  
设备层：machineId: 首次运行生成的随机UUIDv4写入 ~/.config/Cursor/machineid  
功能控制：Statsig 140个功能开关  
错误码：56个完整错误码体系  
安全策略：SandboxPolicy 13个维度  
隐私模式：5级 (NO_STORAGE → USAGE_CODEBASE_TRAINING_ALLOWED)

---

*项目完成于 2026-06-18*