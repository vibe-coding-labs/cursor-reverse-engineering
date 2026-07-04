# Cursor 3.7.27 认证授权流程 — 完整逆向分析

> 目标：完全理解 Cursor 的认证和授权机制，支持中转反向代理实现

---

## 一、认证架构全景

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    Cursor 认证系统架构                                    │
└─────────────────────────────────────────────────────────────────────────┘

                         ┌───────────────┐
                         │   Auth0 认证   │
                         │  (主认证)      │
                         └───────┬───────┘
                                 │ OAuth 2.0 Device Code
                                 │ Password Grant / Refresh Token
                                 ▼
┌──────────────────────────────────────────────────────────────────┐
│                    cursorAuthenticationService                     │
│  (在 workbench.desktop.main.js 中实现的认证服务)                   │
├──────────────────────────────────────────────────────────────────┤
│  ● getAccessToken()          — 获取 JWT 访问令牌                  │
│  ● getAuthIdFromToken()      — 从 JWT 解析用户身份                │
│  ● refreshAuthentication()   — 刷新认证                          │
│  ● isAuthenticated()         — 检查是否已认证                     │
│  ● isTokenExpired()          — 检查令牌是否过期                   │
│  ● addLoginChangedListener() — 登录状态变更监听                    │
│  ● openAIKey()               — OpenAI API Key                     │
│  ● membershipType()          — 会员类型 (ENTERPRISE 等)           │
│  ● dashboardClient()         — 仪表板 API 客户端                  │
│  ● getEmailAndSignUpType()   — 获取邮箱和注册类型                  │
└──────────────────────────────────────────────────────────────────┘
         │
         ├── 存储: applicationStorageMainService (Electron)
         │   └── key: "cursorAuth/accessToken"
         │
         ├── 令牌刷新: POST {backendUrl}/oauth/token
         │   └── grant_type: refresh_token
         │
         └── 向外暴露: 
             ├── IPC: ExtHostCursor.$getCursorAuthToken()
             ├── IPC: MainThreadCursor.$getCursorCreds()
             └── Extension API: cursor.getCursorCreds(), cursor.getCursorAuthToken()
```

---

## 二、完整的 Credentials 数据结构

### 2.1 cursorCreds 结构

```typescript
interface CursorCreds {
  websiteUrl: string;           // https://cursor.com
  backendUrl: string;           // https://api2.cursor.sh
  authClientId: string;         // Auth0 Client ID
  authDomain: string;           // Auth0 Domain
  repoBackendUrl: string;       // 仓库后端 URL
  telemBackendUrl: string;      // 遥测后端 URL
  geoCppBackendUrl: string;     // Geo C++ 后端 URL
  cppConfigBackendUrl: string;  // C++ 配置后端 URL
  cmdkBackendUrl: string;       // CMDK 后端 URL
  bcProxyUrl: string;           // 后台代理 URL
  agentBackendUrlNonPrivacy?: string; // 非隐私模式 Agent URL
  credentialsDisplayName: string;     // 显示名称 (如 "Prod")
}
```

### 2.2 生产环境配置

```javascript
// 生产环境 (prod)
websiteUrl:    "https://cursor.com"
backendUrl:    "https://api2.cursor.sh"
telemUrl:      "https://api3.cursor.sh"
api4Url:       "https://api4.cursor.sh"
repo42Url:     "https://repo42.cursor.sh"
authClientId:  "KbZUR41cY7W6zRSdpSUJ7I7mLYBKOCmB"   // Auth0 Client ID
authDomain:    "prod.authentication.cursor.sh"         // Auth0 Domain
```

### 2.3 开发/测试环境

```javascript
// Staging
backendUrl:    "https://staging.cursor.sh"
// Dev Staging
backendUrl:    "https://dev-staging.cursor.sh"
// 本地开发
backendUrl:    "http://localhost:4000"
websiteUrl:    "http://localhost:4000"
// 真正的本地（含推理）
localhost:     "https://localhost:8000"
```

---

## 三、认证协议 (OAuth 2.0 + Auth0)

### 3.1 Auth0 配置

| 参数 | 生产值 |
|------|--------|
| **Auth Domain** | `prod.authentication.cursor.sh` |
| **Auth Client ID** | `KbZUR41cY7W6zRSdpSUJ7I7mLYBKOCmB` |
| **Token Endpoint** | `https://api2.cursor.sh/oauth/token` |
| **授权方式** | `refresh_token` + `client_id` |
| **Token 类型** | JWT (Bearer) |

### 3.2 认证登录流程

```mermaid
sequenceDiagram
    participant User as 用户
    participant App as Cursor App
    participant Auth0 as Auth0 (prod.authentication.cursor.sh)
    participant API as Cursor API (api2.cursor.sh)
    
    User->>App: 打开 Cursor / 登录
    App->>Auth0: 1. 打开登录页 (Universal Login)
    Auth0->>User: 2. 显示登录表单 (邮箱/密码/GitHub/Google)
    User->>Auth0: 3. 输入凭证
    Auth0->>App: 4. 回调: authorization code
    App->>Auth0: 5. 交换 code → ID Token + Access Token + Refresh Token
    Auth0->>App: 6. 返回 tokens
    App->>API: 7. 用 Access Token 调用 API
    Note over App,API: Authorization: Bearer {access_token}
    API->>App: 8. 返回数据
    
    Note over App: 令牌过期后
    App->>API: POST /oauth/token
    Note over App,API: grant_type=refresh_token<br>client_id={authClientId}<br>refresh_token={refreshToken}
    API->>App: 返回新的 access_token
```

### 3.3 令牌刷新

```http
POST https://api2.cursor.sh/oauth/token
Content-Type: application/json

{
  "grant_type": "refresh_token",
  "client_id": "KbZUR41cY7W6zRSdpSUJ7I7mLYBKOCmB",
  "refresh_token": "<stored_refresh_token>"
}
```

**响应**:
```json
{
  "access_token": "eyJhbGciOiJSUzI1NiIs...",  // JWT
  "refresh_token": "new_refresh_token...",
  "expires_in": 86400,
  "token_type": "Bearer"
}
```

### 3.4 令牌存储

```javascript
// 主存储 (Electron)
applicationStorageMainService.set("cursorAuth/accessToken", jwt_token);

// 令牌通过 IPC 暴露给扩展进程
// IPC 通道: MainThreadCursor.$getCursorCreds
//            MainThreadCursor.$getCursorAuthToken
//            ExtHostCursor.$changeCursorAuthToken
```

### 3.5 令牌监控

```javascript
// 监听令牌变化
applicationStorageMainService.onDidChangeValue("cursorAuth/accessToken", callback);

// 当令牌变化时自动刷新相关服务
// 例如 UpdateService 会重新设置 Feed URL

// 令牌过期检测
cursorAuthenticationService.isTokenExpired(token);

// 触发刷新
cursorAuthenticationService.refreshAuthentication();
// 或通过命令
commandService.executeCommand("cursorAuth.triggerTokenRefresh", true);
```

---

## 四、API 域列表

### 4.1 完整的 Cursor 子域名

```
api2.cursor.sh          — 主 API (backend)
api3.cursor.sh          — 遥测/CMDK/telem
api4.cursor.sh          — Geo C++
api5.cursor.sh          — Agent 推理
repo42.cursor.sh        — 仓库索引
prod.authentication.cursor.sh — Auth0 认证域

gcpp.cursor.sh          — Geo C++ (泛域名)
*.gcpp.cursor.sh        — 地理分布推理节点
*.api5.cursor.sh        — Agent 推理节点

agentn-gcpp-eucentral.api5.cursor.sh      — EU Central Agent
agentn-gcpp-apsoutheast.api5.cursor.sh    — AP Southeast Agent
```
```
staging.cursor.sh       — Staging 环境
dev-staging.cursor.sh   — Dev Staging 环境
lclhst.build            — 本地开发 (内部构建)
```

### 4.2 各服务 backend URL

| 服务 | 生产 URL | 说明 |
|------|---------|------|
| 主 API | `https://api2.cursor.sh` | 大部分 API 请求 |
| 遥测 | `https://api3.cursor.sh` | Statsig/遥测事件 |
| Geo C++ | `https://api4.cursor.sh` | 代码智能 (C++) |
| 仓库 | `https://repo42.cursor.sh` | 仓库索引服务 |
| Agent | `https://{region}.api5.cursor.sh` | Agent 推理 |
| MCP OAuth | `https://www.cursor.com/agents/mcp/oauth/callback` | MCP OAuth 回调 |

### 4.3 URL 软路由机制

Cursor 支持动态 URL 替换和软路由：

```javascript
// API 调用的 URL 替换规则
const resolvedUrl = url
  .replace("api3.cursor.sh", "api2.cursor.sh")   // 遥测 → 主API
  .replace("api4.cursor.sh", "api2.cursor.sh")   // Geo → 主API
  .replace(/.*\.gcpp\.cursor\.sh/, "api2.cursor.sh")  // Geo泛域名 → 主API
  .replace(/.*\.api5\.cursor\.sh/, "api2.cursor.sh"); // Agent → 主API
```

---

## 五、授权模型

### 5.1 令牌类型与使用范围

| 令牌 | 来源 | 用途 | 存储位置 |
|------|------|------|---------|
| **Auth0 Access Token** (JWT) | OAuth 认证 | 所有 Cursor API 请求 | `cursorAuth/accessToken` |
| **Auth0 Refresh Token** | OAuth 认证 | 刷新 access token | keyring / 加密存储 |
| **GitHub OAuth Token** | GitHub OAuth | GitHub API 调用 | keyring |
| **Microsoft OAuth Token** | Azure AD | Microsoft API 调用 | keyring |
| **OpenAI API Key** | 用户提供 | 直接调用 OpenAI | `openAIBaseUrl` 配置 |
| **repo42 Auth Token** | 仓库索引 | 仓库访问 | 缓存 |
| **spoofed CPP Token** | 本地开发 | 调试/本地 C++ | 生成 |

### 5.2 API 请求认证方式

| API 端点 | 认证头 |
|---------|--------|
| `api2.cursor.sh/*` | `Authorization: Bearer {accessToken}` |
| `cursorvm-manager.com/*` | ConnectRPC token (通过缓存客户端) |
| `api.anthropic.com/v1/*` | `Authorization: Bearer {apiKey}` |
| `api.openai.com/v1/*` | `Authorization: Bearer {apiKey}` |
| `api.github.com/*` | `Authorization: Bearer {githubToken}` |
| `extensions marketplace` | `Authorization: Bearer {accessToken}` |

### 5.3 扩展授权

#### 信任的扩展（可直接使用用户认证）
```json
"cursorTrustedExtensionAuthAccess": [
  "anysphere.cursor-retrieval",
  "anysphere.cursor-commits"
]
```

#### Cursor 扩展 API 提案
```json
{
  "anysphere.remote-ssh": ["cursor", "cursorTracing", "cursorNoDeps"],
  "anysphere.remote-wsl": ["cursor", "cursorTracing"],
  "anysphere.remote-containers": ["cursor", "cursorTracing"],
  "anysphere.remote-tunnels": ["cursor", "cursorTracing"],
  "anysphere.cpptools": ["cursorTracing"],
  "anysphere.cursorpyright": ["cursorTracing"]
}
```

### 5.4 企业策略监控

通过 `@anysphere/policy-watcher` (v1.3.2-cursor.2) 监控系统策略：
```javascript
policyWatcher.watch({
  UpdateMode: { type: 'string' },
  SCMInputFontSize: { type: 'number' },
  DisableFeedback: { type: 'boolean' },
});
```

---

## 六、认证状态管理

### 6.1 登录状态变更通知

```javascript
// 订阅登录状态变更
cursorAuthenticationService.addLoginChangedListener(() => {
  // 令牌变化后刷新相关服务
});

// 登录状态变更的触发条件
// 1. 登录成功
// 2. 登出
// 3. 令牌刷新
// 4. 账号切换
```

### 6.2 跨进程令牌传递

```
主进程                           扩展进程
─────                            ─────
cursorAuth/accessToken           cursor.getCursorAuthToken()
        │                               │
        │  IPC: $getCursorCreds ────────┤
        │  IPC: $getCursorAuthToken ────┤
        │  IPC: $changeCursorAuthToken ─┤
        │                               │
        ▼                               ▼
applicationStorage           ExtHostCursor API
```

### 6.3 登录/登出 URL

```javascript
// Cursor 登录 URL (通过 deep link)
const LOGIN_URL = `cursor://cursorAuth`;
// 或通过控制协议
const CONTROL_URL = `control://cursorAuth`;

// 登录后页面 - Auth0 Universal Login
// https://prod.authentication.cursor.sh/login

// 登出 URL
// POST {backendUrl}/api/auth/logout
```

---

## 七、本地开发模式认证

### 7.1 开发环境检测

```javascript
// 判断是否为本地开发环境
function isDevelopment() {
  const backendUrl = cursor.getCursorCreds()?.backendUrl;
  return backendUrl?.includes("localhost") || 
         backendUrl?.includes("lclhst.build");
}
```

### 7.2 本地 spoof 令牌

```javascript
// 在本地开发模式下，C++ 服务使用 spoofed token
// 绕过真实 Auth0 认证
function maybeGetSpoofedCppAccessToken(backendUrl, targetUrl) {
  if (isLocalhost(backendUrl) && targetUrl.includes("cursor.sh")) {
    return generateSpoofedToken(userId);
  }
}
```

---

## 八、认证请求的 Header

### 8.1 完整认证 Header 格式

```http
Authorization: Bearer eyJhbGciOiJSUzI1NiIs...
X-Cursor-Commit: e48ee6102a199492b0c9964699bf011886708ba3
X-Cursor-Version: 3.7.27
```

### 8.2 认证 Header 生成代码

```javascript
function getRequestHeaders() {
  const token = applicationStorageMainService.get("cursorAuth/accessToken");
  const commit = productService.commit;
  const version = productService.version;
  
  return {
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(commit ? { "X-Cursor-Commit": commit } : {}),
    ...(version ? { "X-Cursor-Version": version } : {})
  };
}
```

---

## 九、中转反向代理的认证替换方案

### 9.1 需要劫持的认证

| 认证点 | 劫持方式 |
|--------|---------|
| **Auth0 Access Token** | 在代理端验证并签发自定义 JWT |
| **Auth0 Refresh Token** | 替换为自定义刷新端点 |
| **GitHub OAuth Token** | 替换为自定义 OAuth 提供商 |
| **LLM API Key** | 在代理端替换为目标系统的 key |
| **repo42 Auth Token** | 可保留或忽略 |

### 9.2 认证替换代理策略

```javascript
// 代理服务器需要实现的替换
const AUTH_REPLACEMENTS = {
  // 1. Auth0 客户端 ID 替换
  authClientId: "KbZUR41cY7W6zRSdpSUJ7I7mLYBKOCmB" 
              → "your-auth0-client-id",
  
  // 2. Auth0 Domain 替换
  authDomain: "prod.authentication.cursor.sh" 
            → "your-auth.domain.com",
  
  // 3. Token 端点替换  
  "/oauth/token" → "/your-proxy/oauth/token",
  
  // 4. API 请求认证头替换
  "Authorization: Bearer {cursor_token}" 
              → "Authorization: Bearer {your_token}"
};
```

### 9.3 代理关键步骤

1. **DNS/URL 拦截**: 将所有 `api2.cursor.sh` → 代理地址
2. **Token 端点劫持**: 捕获 `/oauth/token` 请求，返回自定义令牌
3. **API 请求转发**: 保留 `X-Cursor-Commit` 和 `X-Cursor-Version`
4. **AI 调用替换**: 将 Cursor 的 AI 请求转发到目标 LLM Provider

---

## 十、认证安全机制

### 10.1 令牌保护

- 令牌存储在 Electron 安全存储中 (`applicationStorageMainService`)
- 通过 IPC 而非直接暴露令牌给扩展
- 支持系统密钥环（macOS Keychain, Linux Secret Service）
- 回退到加密文件存储

### 10.2 敏感信息过滤

```javascript
// Cursor 自动过滤日志中的敏感信息
const REDACTION_PATTERNS = [
  /(access_token|refresh_token|id_token|client_secret|authorization|code|password|assertion|token|secret)[^:=\r\n]{0,32}[:=]\s*["']?([^"',\s&}]+)/gi,
  /(\bBearer\s+)([A-Za-z0-9\-._~+/]+=*)/gi
];
// 日志输出: "${property}[REDACTED]"
```

### 10.3 隐私模式

Cursor 支持隐私模式 (`privacyMode`)，在该模式下：
- 不发送某些遥测数据
- 限制功能访问
- `shouldSendAuthHeaders()` 可能返回 false