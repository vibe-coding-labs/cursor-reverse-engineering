# Cursor 逆向分析 — 跨维度关联总览 (第28轮)

## 一、数据分析：按Entity关联

### Entity: OAuth Token
| 采集项 | 来源 | 范围 |
|--------|------|------|
| JWT payload | `authentication.cursor.sh` | sub, exp, iss, scope, aud, type |
| Refresh | `refresh_token` grant to `api2.cursor.sh/oauth/token` | 新 access_token |
| 存储 | Electron `safeStorage` encrypt → `applicationStorageMainService` | 加密后落盘 |
| 请求头 | `Authorization: Bearer {jwt}` | 每次 ConnectRPC 请求 |

### Entity: User Profile
| 采集项 | API 端点 | 返回数据 |
|--------|---------|---------|
| Email/注册类型 | `AuthService/GetEmail` | email, signUpType |
| 套餐 | `DashboardService/GetPlanInfo` | planName, price |
| 用量 | `DashboardService/GetCurrentPeriodUsage` | totalPercentUsed, displayThreshold |
| 订阅 | `auth/full_stripe_profile` | membershipType, subscriptionStatus, trialEligible |

### Entity: Device Identity
| 采集项 | 生成/来源 | 持久化 |
|--------|----------|--------|
| serviceMachineId | `Xr()` UUIDv4 | `~/.config/Cursor/machineid` + Storage |
| macMachineId | macOS `ioreg IOPlatformUUID` | macOS Keychain |
| sessionID | `Xr() + Date.now()` | 内存（运行时） |
| statsig_stable_id | Statsig SDK | `statsig_stable_id` cookie |
| cursor_anonymous_id | 首次访问生成 | `cursor_anonymous_id` cookie |

## 二、特征采集范围 — 完整清单 (58项)

### 浏览器/Web 端 (15项)
```
user_agent, platform, language, screen_resolution, timezone,
cursor_anonymous_id, statsig_stable_id, _ca_device_id,
workos_id, stripe_mid, cookies, localStorage, sessionStorage,
webview_content, origin
```

### 桌面端 (18项)
```
machineId, macMachineId, sqmId, devDeviceId, sessionID,
os_type(os), os_version, arch, cursor_version, commit_hash,
product_name, window_title, window_bounds, display_count,
input_language, font_list, installed_extensions, startup_timing
```

### 网络层面 (10项)
```
ip_address, geolocation(region), dns_servers, proxy_config,
tls_version, http_version, connection_type(2g/3g/4g/wifi),
network_delay, packet_loss, request_id, session_id
```

### AI 交互 (15项)
```
model_selected, prompt_length, token_count, response_time,
tool_calls_made, tool_types, conversation_length, file_contexts,
language_detected, code_frameworks, error_types, retry_count,
streaming_enabled, parallel_calls, embedding_queries
```

## 三、证据链解析

一次完整的请求如何被追踪：

```
[用户] → cursor_anonymous_id → 关联匿名行为
         ↓ 登录
       WorkosSessionToken → user_id/authId
         ↓
       JWT → sub (github|user_xxx) → 最终身份
         
[设备] → serviceMachineId → file:/machineid (首次生成UUIDv4)
         ↓ 启动
       sessionID → Xr()+Date.now() → 本次会话
         ↓ 每次请求
       x-session-id: uuid → 请求级关联
         
[网络] → ip → geo → region
         ↓
       x-cursor-timezone → Asia/Shanghai
         ↓
       traceparent → 00-{trace}-{span}-01 (分布式追踪)

[行为] → x-cursor-client-* (os/arch/version)
         ↓
       Statsig gates → 实验/功能分组
         ↓
       Sentry captureException → 错误追踪
```

## 四、第28轮新增

| 内容 | 说明 |
|------|------|
| 跨维度 Entity 关联 | 4 个大实体 (OAuth/User/Device/Request) |
| 58 项特征采集清单 | Web15 + 桌面18 + 网络10 + AI15 |
| 证据链解析 | 从匿名到身份的全链路 |

*第28轮分析，2026-06-17*
*覆盖: 数据分析关联图谱*