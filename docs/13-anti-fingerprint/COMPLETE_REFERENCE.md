# Cursor 风控/指纹/遥测 — 完整参考手册

> 基于37轮逆向分析（29份文档，3425行）的浓缩总结

## 一、认证与令牌

| 项目 | 值 |
|------|------|
| **认证系统** | WorkOS（不是Auth0） |
| **Auth域** | `authentication.cursor.sh`（不是prod.开头） |
| **Client ID** | `KbZUR41cY7W6zRSdpSUJ7I7mLYBKOCmB` |
| **Token端点** | `POST api2.cursor.sh/oauth/token` |
| **grant_type** | `refresh_token` |
| **令牌类型** | JWT (type: session) |
| **有效期** | ~59天 |
| **Access = Refresh?** | **是**，两个令牌是同一个JWT |
| **存储** | Electron `safeStorage`加密 → `applicationStorageMainService`(key: `cursorAuth/accessToken`)|

### 登录流程
```
1. 生成PKCE: verifier + sha256 → challenge
2. 打开 https://cursor.com/loginDeepControl?challenge=X&uuid=Y&mode=login
3. 用户通过 WorkOS 登录
4. 轮询 GET api2.cursor.sh/auth/poll?uuid=Y&verifier=Z (500ms, 最多30次)
5. 返回 { accessToken, refreshToken, authId }
6. 刷新: POST api2.cursor.sh/oauth/token { grant_type, client_id, refresh_token }
```

---

## 二、通信协议 (ConnectRPC)

| 项目 | 值 |
|------|------|
| **baseUrl** | `https://api2.cursor.sh` |
| **Content-Type** | `application/connect+json` |
| **分帧格式** | `0x00` + `uint32(body长度)` + `JSON body` |
| **幂等** | `x-request-id` UUIDv4 |

### Core Services (已验证可通)
```
aiserver.v1.AuthService/GetEmail              → email + signUpType
aiserver.v1.AuthService/GetUserMeta            → 用户元数据
aiserver.v1.DashboardService/GetPlanInfo       → 套餐信息
aiserver.v1.DashboardService/GetCurrentPeriodUsage → 用量
aiserver.v1.DashboardService/GetHardLimit      → 硬限制
aiserver.v1.DashboardService/GetTeams          → 团队列表
aiserver.v1.DashboardService/GetMe             → 用户信息
aiserver.v1.ChatService/StreamUnifiedChatWithTools → AI对话（核心）
ahref/full_stripe_profile                      → 订阅详情
ahref/has_valid_payment_method                 → 支付方式
```

### StreamUnifiedChatRequest (86字段，核心5个)
```
conversation (repeated)  → 消息历史
model_details (object)   → 模型配置 { default_model, fallback_models, best_of_n_default_models }
unified_mode (enum)      → CHAT=1, AGENT=2, EDIT=3, PLAN=5
max_tokens (int32)       → 最大token数量
allow_model_fallbacks    → 是否允许模型降级
```

---

## 三、56个错误码

| 类别 | 数量 | 代表错误 |
|------|:----:|---------|
| 认证 | 8 | ERROR_NOT_LOGGED_IN, ERROR_AUTH_TOKEN_EXPIRED |
| 账户/订阅 | 8 | ERROR_FREE_USER_RATE_LIMIT, ERROR_PRO_USER_ONLY |
| **风控/安全** | **10** | **ERROR_UNAUTHORIZED, ERROR_SUSPICIOUS_USAGE_BLOCKED** |
| 模型/请求 | 13 | ERROR_BAD_MODEL_NAME, ERROR_MAX_TOKENS |
| 功能限制 | 8 | ERROR_DEPRECATED, ERROR_OUTDATED_CLIENT |
| GitHub | 4 | ERROR_GITHUB_NO_USER_CREDENTIALS |
| 其他 | 5 | ERROR_INTERNAL, ERROR_UNSUPPORTED_REGION |

---

## 四、自定义Header (22个)

### x-cursor-* (18个)
```
x-cursor-client-version: 3.7.27       # 版本
x-cursor-client-os: linux              # OS类型
x-cursor-client-arch: x64             # CPU架构
x-cursor-client-type: ide             # 客户端类型
x-cursor-client-layout:               # UI布局
x-cursor-client-device-type: desktop  # 设备类型
x-cursor-client-os-version: "20.04"   # OS版本
x-cursor-timezone: Asia/Shanghai      # 时区
x-cursor-config-version: {hash}       # 配置哈希
x-cursor-checksum: {ad1(data)}        # 文件校验和(ad1算法)
x-cursor-canary: true                 # Canary标志
x-cursor-session-id: {uuid}           # 会话ID
x-cursor-remote-type: ssh             # 远程连接类型
x-cursor-server-region: us-east-1     # 服务器区域
x-cursor-rpc-callsite: pr_tab_init    # RPC调用来源
x-cursor-rpc-kind: unary              # RPC类型
x-cursor-rpc-exthost: true            # RPC扩展主机
x-cursor-rpc-workbench: true          # RPC工作台
```

### 其他 (4个)
```
x-ghost-mode: false / true / implicit-false  # 隐私模式
x-new-onboarding-completed: true             # 新手引导
x-session-id: {uuid}                         # 请求级会话
traceparent: 00-{trace}-{span}-01            # OpenTelemetry
```

---

## 五、风控体系

### 7层检测链
```
分帧正确 → x-cursor-* header完整 → machineId匹配 → session-id连续 → IP/区域正常 → 请求频率正常 → 模型名有效
```

### 客户端限流
| 机制 | 实现 |
|------|------|
| 令牌桶 | `refillTokens()` + `tokens < 1` |
| 断路器 | 429/5xx累积 → 熔断 → 冷却 → 半开 |
| 指数退避 | `delay * backoff^attempt + jitter` |
| 可重试 | `Unavailable`, `Internal`, `DeadlineExceeded` |

### 安全策略 (SandboxPolicy, 13个维度)
```
模型访问 / 命令执行 / 网络访问 / 云出口 / 浏览器
文件保护 / MCP工具 / PTY认证 / 团队控制 / 沙箱
重试策略 / 速率限制 / 错误码
```

### 隐私模式 (5级)
```
NO_STORAGE → USAGE_DATA_TRAINING_ALLOWED → USAGE_CODEBASE_TRAINING_ALLOWED → NO_TRAINING → UNSPECIFIED
```

---

## 六、设备指纹

| 标识 | 生成方式 | 持久化 |
|------|---------|--------|
| **serviceMachineId** | UUIDv4, 首次运行生成 | `~/.config/Cursor/machineid` |
| macMachineId | macOS `ioreg IOPlatformUUID` | macOS Keychain |
| sessionID | `Xr() + Date.now()` | 内存 |
| statsig_stable_id | Statsig SDK | Cookie |
| cursor_anonymous_id | 首次访问生成 | Cookie |

> 关键纠正：machineId 是**随机UUIDv4**，不是从`/etc/machine-id`读取的硬件指纹。

---

## 七、Statsig (140 gates)

| Key | 值 |
|------|------|
| **Client Key** | `client-Bm4HJ0aDjXHQVsoACMREyLNxm5p6zzuzhO50MgtoT5D` |
| **上报URL** | `https://api3.cursor.sh/tev1/v1` |
| **SDK** | statsig-js-client v3.31.0 |

典型 gates:
```
free_user_locked_model_2026_05  → 免费版模型锁定
command_blocklist_feature       → 命令黑名单
smart_allowlist_required        → 智能白名单
enable_pty_auth                 → PTY认证
retry_interceptor_config        → 重试策略
```

---

## 八、Sentry

| DSN | 用途 |
|-----|------|
| `o4504648565915648.ingest.us.sentry.io/4509635758522369` | 主错误追踪 |
| `metrics.cursor.sh/4508016051945472` | 指标监控 |

捕获类型：`captureException`, `captureMessage`, `captureEvent`, `captureFeedback`, `captureSession`

---

## 九、IPC 服务 (12个)

```
cursorCommandsService    → 命令管理
cursorCredsService       → 凭据管理
cursorDevToolsService    → 开发者工具
cursorExtensionIsolationService → 扩展隔离
cursorHooksService       → Hook系统
cursorIgnoreService      → 忽略列表
cursorLocalTraceService  → 本地追踪
cursorPredictionService  → AI预测
cursorProclistService    → 进程列表
cursorRulesService       → 规则引擎
cursorServerUrlWarmupService → 服务器预热
cursorUpdateService      → 更新服务
```

---

## 十、项目交付物

| 路径 | 内容 |
|------|------|
| `docs/13-anti-fingerprint/` | 29份文档，37轮分析 |
| `docs/01-15/` | 15个分析目录，52份文档 |
| `scripts/cursor_auth.py` | 登录模拟器（已验证跑通） |
| `scripts/simulate_cursor.py` | ConnectRPC模拟器（已验证Dashboard） |
| `scripts/cursor_login_catcher.py` | 登录填补服务器 |
| `scripts/extract_cursor_token.sh` | Token提取 |
| `docs/README.md` | 项目索引 |

> 生成于第38轮。浓缩37轮分析成果。这是这7个方向能产出的全部内容。