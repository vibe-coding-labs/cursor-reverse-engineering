# Cursor 主进程 ⇄ 扩展进程 IPC 协议 (第33轮)

## 一、12 个 Cursor IPC 服务

```javascript
// 所有通过 `registerChannel` 或 DI 注册的 cursor 服务
"cursorCommandsService"              // Cursor 命令
"cursorCredsService"                 // 凭据管理
"cursorDevToolsService"              // 开发者工具
"cursorExtensionIsolationService"    // 扩展隔离
"cursorHooksService"                 // Hook 系统
"cursorIgnoreService"                // 忽略列表
"cursorLocalTraceService"            // 本地追踪
"cursorPredictionService"            // AI 预测
"cursorProclistService"              // 进程列表
"cursorRulesService"                 // 规则引擎
"cursorServerUrlWarmupService"       // 服务器预热
"cursorUpdateService"                // 更新服务
```

## 二、IPC 方法完整清单

### 认证/凭据 (8个)
```
$getCursorAuthToken          // 获取 Auth token
$changeCursorAuthToken       // 更新 Auth token
$getCursorCreds              // 获取凭据(backendUrl/websiteUrl等)
$changeCursorCreds           // 更新凭据
$getAuthId                   // 获取 Auth ID
$getMachineId                // 获取设备 ID
$getMacMachineId             // 获取 macOS 设备 ID
$lookupAuthorization         // 查询授权
```

### 隐私/功能开关 (5个)
```
$getPrivacyMode              // 获取隐私模式(旧)
$getPrivacyModeEnum          // 获取隐私模式(枚举)
$changePrivacyMode           // 更新隐私模式(旧)
$changePrivacyModeEnum       // 更新隐私模式(枚举)
$checkFeatureGate            // 检查功能开关(Statsig)
$getGranularPrivacyMode      // 获取细粒度隐私模式
```

### MCP/远程 (8个)
```
$connectionTokenProvider              // 连接令牌提供者
$connectionTokenProviderGetOrCreate   // 获取或创建令牌
$getOrCreateConnectionToken           // 获取或创建连接令牌
$cursorMcp                            // MCP 基础
$cursorMcpOAuthStoreCall              // MCP OAuth 存储
$cursorMcpSharedOAuthGet              // 获取共享 OAuth
$cursorMcpSharedOAuthStore            // 存储共享 OAuth
$getMcpSharedProcessGateEnabled       // MCP 进程门控
```

### 扩展/隔离 (2个)
```
$getCursorExtensionsIsolationEnabled  // 扩展隔离开关
$registerConnectionTokenProvider      // 注册令牌提供者
```

## 三、IPC 调用流程

```
扩展进程(ExtensionHost)
  ↓ 调用 this._proxy.$getCursorAuthToken()
  ↓
IPC 通道 "cursorCredsService"
  ↓
主进程(MainProcess) 处理
  ↓
读取 applicationStorageMainService 中的 "cursorAuth/accessToken"
  ↓
返回给扩展进程
```

## 四、第33轮新增

| 发现 | 重要度 |
|------|:------:|
| **12 个 Cursor IPC 服务** | ⭐⭐⭐ 完整 IPC 架构 |
| **所有 IPC 方法清单** | ⭐⭐⭐ 23 个方法 |
| 认证/凭据 IPC | ⭐⭐ |
| MCP/OAuth IPC | ⭐⭐ |
| 隐私/功能开关 IPC | ⭐⭐ |

*第33轮分析，2026-06-18*
*覆盖: IPC 协议、服务清单、方法清单*