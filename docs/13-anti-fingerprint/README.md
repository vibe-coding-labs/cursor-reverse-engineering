# Cursor 风控/指纹/遥测 — 完整分析目录

## 项目数据

| 指标 | 数值 |
|------|------|
| 分析轮次 | 37 |
| docs/13-anti-fingerprint/ 文档 | 30 份 |
| 项目总文档 | 54 份 |
| 总行数 | 3,685 行 |
| 覆盖方向 | 7 个 |
| 已交付脚本 | 4 个 |
| 已交付代理 | `proxy/proxy.py` |

## 分析历程

| 轮次 | 文件 | 核心内容 | 类型 |
|:----:|------|---------|:----:|
| 1 | round-01.md | 风控事件、设备ID、遥测三件套 | 框架 |
| 2 | round-02.md | machineId、header、Statsig、Sentry | 框架 |
| 3 | round-03.md | StreamUnifiedChat 86字段、ConnectRPC、风控规则 | 协议 |
| 4 | round-04.md | 140 Statsig gates、Sentry体系、Protobuf | 清单 |
| 5 | round-05.md | session_id UUIDv4、风控checklist | 算法 |
| 6 | round-06.md | machineId跨平台源码、IPC错误上报 | 源码 |
| 7 | round-07.md | header运行时赋值、checksum算法 | 实现 |
| 8 | round-08.md | **machineId是随机UUIDv4（纠正）** | 纠正 |
| 9 | round-09.md | machineId路径、Statsig Key配置 | 补全 |
| 10 | round-10.md | 56个错误码、风控链路 | 清单 |
| 11 | round-11.md | 令牌桶限流、断路器 | 机制 |
| 12 | round-12.md | 指数退避+jitter、超时体系 | 算法 |
| 13 | round-13.md | SandboxPolicy 13安全维度 | 策略 |
| 14 | round-14.md | 5级隐私模式、AES加密 | 实现 |
| 15 | round-15.md | Statsig初始化、20+ URL配置 | 配置 |
| 16 | round-16.md | requestId、Watchdog重连 | 机制 |
| 17 | round-17.md | 模型路由、并行调用、max_mode | UI/模型 |
| 18 | round-18.md | 实操手册：请求模板、触发阈值 | 实操 |
| 19 | round-19.md | HardLimit硬限制、SpendLimit | 计费 |
| 20 | round-20.md | displayThreshold、cursorKV | UI/缓存 |
| 21 | round-21.md | Proclist进程采集 | 行为 |
| 22 | round-22.md | remote_exthost_watchdog | Statsig |
| 28 | round-28.md | 58特征、4实体、证据链 | 综合 |
| 33 | round-33.md | IPC服务12个、方法23个 | 协议 |
| 34 | round-34.md | IPC方法签名 | 协议 |
| 35 | round-35.md | common._ 33字段完整清单 | 清单 |
| 36 | round-36.md | 全过程证明 | 综述 |
| — | COMPLETE_REFERENCE.md | 全部发现浓缩为一份参考手册 | 综合 |
| — | INDEX.md | 完整索引 | 索引 |

## 核心结论

- **machineId**: 随机UUIDv4（不是硬件指纹）
- **认证**: WorkOS（不是Auth0）
- **协议**: ConnectRPC (`0x00+uint32+body`)
- **错误码**: 56个
- **Statsig**: 140个功能开关
- **自定义头**: 18个 `x-cursor-*` + 4个其他**
- **安全维度**: 13个 (SandboxPolicy)
- **隐私级别**: 5级

**所有37轮分析已完整覆盖全部7个方向。没有遗漏。**