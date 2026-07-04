# Cursor 3.7.27 授权登录流程 — Python 模拟指南

> 目标：用 Python 完整模拟 Cursor 的授权登录流程

---

## 一、登录流程全景

```
┌──────────────────────────────────────────────────────────────────────┐
│                      Cursor 登录流程 (OAuth 2.0 + Auth0)              │
└──────────────────────────────────────────────────────────────────────┘

步骤 1: 生成 PKCE 挑战
  challenge = base64url(sha256(verifier))
  
步骤 2: 构造登录 URL
  URL = https://cursor.com/loginDeepControl
        ?challenge={base64url_encoded_challenge}
        &uuid={random_uuid}
        &mode=login
        &supportsSelectedTeamLogin=true

步骤 3: 打开浏览器让用户登录
  用户通过 Auth0 Universal Login 完成认证
  
步骤 4: 轮询获取令牌
  GET https://api2.cursor.sh/auth/poll
      ?challenge={base64url_encoded_challenge}
      &uuid={random_uuid}
      &verifier={verifier}
  Headers:
    x-cursor-privacy-mode: false
    x-cursor-snippet-learning-eligible: false
    x-cursor-timezone: UTC
    x-cursor-version: 3.7.27
  
  响应: { accessToken, refreshToken, authId, selectedTeamId }

步骤 5: 存储令牌
  accessToken → "cursorAuth/accessToken"
  refreshToken → "cursorAuth/refreshToken"
  注意: 两者存储的是相同的 access_token 值!
```

---

## 二、关键端点

### 2.1 登录

```
GET https://cursor.com/loginDeepControl?challenge={challenge}&uuid={uuid}&mode={mode}&supportsSelectedTeamLogin=true

参数:
  challenge: base64url(sha256(verifier))
  uuid: 随机 UUID
  mode: "login" 或 "signup"
  supportsSelectedTeamLogin: "true"
```

### 2.2 轮询 (Polling)

```
GET https://api2.cursor.sh/auth/poll?challenge={challenge}&uuid={uuid}&verifier={verifier}

自定义 Headers:
  x-cursor-privacy-mode: "false"
  x-cursor-snippet-learning-eligible: "false"
  x-cursor-timezone: "Asia/Shanghai"
  x-cursor-version: "3.7.27"

轮询间隔: 500ms
超时轮数: 30 轮 (15秒)
状态 404: 用户尚未登录，继续轮询
成功响应: { accessToken, refreshToken, authId, selectedTeamId }
```

### 2.3 令牌刷新 (Token Refresh)

```
POST https://api2.cursor.sh/oauth/token
Content-Type: application/json

Body:
{
  "grant_type": "refresh_token",
  "client_id": "KbZUR41cY7W6zRSdpSUJ7I7mLYBKOCmB",
  "refresh_token": "<refresh_token>"
}

超时: 20秒
成功响应:
{
  "access_token": "eyJ...JWT",
  "refresh_token": "eyJ...JWT",  // 注意: 返回的是新 access_token
  "shouldLogout": false          // true 表示需要重新登录
}

存储: accessToken 和 refreshToken 都存为 access_token 的值!
```

### 2.4 会员信息

```
GET https://api2.cursor.sh/auth/full_stripe_profile
Authorization: Bearer {accessToken}
Headers: x-cursor-privacy-mode, x-cursor-snippet-learning-eligible, x-cursor-timezone, x-cursor-version

GET https://api2.cursor.sh/auth/has_valid_payment_method
Authorization: Bearer {accessToken}
Headers: x-cursor-privacy-mode, x-cursor-snippet-learning-eligible, x-cursor-timezone, x-cursor-version
```

### 2.5 登出

```
GET https://cursor.com/api/auth/logout
```

### 2.6 连接 GitHub

```
GET https://cursor.com/api/auth/connect-github?auth_id={authId}&github_repo={repo}&source=BACKGROUND_AGENT
或
GET https://api2.cursor.sh/api/auth/connect-github?auth_id={authId}&github_repo={repo}&source=BACKGROUND_AGENT
```

---

## 三、核心常量

```python
# 认证配置
AUTH_CLIENT_ID = "KbZUR41cY7W6zRSdpSUJ7I7mLYBKOCmB"
AUTH_DOMAIN = "prod.authentication.cursor.sh"

# URL
WEBSITE_URL = "https://cursor.com"
BACKEND_URL = "https://api2.cursor.sh"
TELEM_URL = "https://api3.cursor.sh"

# API 路径
LOGIN_PATH = "/loginDeepControl"
POLL_PATH = "/auth/poll"
TOKEN_PATH = "/oauth/token"
PROFILE_PATH = "/auth/full_stripe_profile"
LOGOUT_PATH = "/api/auth/logout"

# 轮询配置
POLL_INTERVAL_MS = 500        # 500ms
POLL_MAX_RETRIES = 30         # 30次
POLL_TIMEOUT_MS = 20000       # 20秒
TOKEN_REFRESH_THRESHOLD_MS = 60000  # 过期前1分钟刷新

# 版本
CURSOR_VERSION = "3.7.27"
CURSOR_COMMIT = "e48ee6102a199492b0c9964699bf011886708ba3"
```

---

## 四、JWT 结构

Access Token 是 JWT 格式，包含用户身份信息：

```javascript
// token 解码示例 (eyJ... -> JSON)
const decoded = {
  "exp": 1718200000,    // 过期时间戳
  "iat": 1718113600,    // 签发时间
  "sub": "auth0|xxxx",  // Auth0 用户 ID
  "aud": "KbZUR41cY7W6zRSdpSUJ7I7mLYBKOCmB",  // Audience = Client ID
  "iss": "https://prod.authentication.cursor.sh/",  // 签发者
  "azp": "KbZUR41cY7W6zRSdpSUJ7I7mLYBKOCmB"  // 授权方
};
```

---

## 五、自定义 HTTP Headers

### 5.1 完整的请求头列表

所有向 `api2.cursor.sh` 发出的请求都包含以下自定义 header：

```http
Authorization: Bearer {access_token}
x-ghost-mode: false                # 隐私模式 (r6n)
x-new-onboarding-completed: false  # 新手引导状态 (s6n) 
traceparent: {trace_id}            # OpenTelemetry 追踪 (fMn)
x-cursor-client-version: 3.7.27    # 客户端版本 (jRi)
x-cursor-timezone: Asia/Shanghai   # 时区（自动检测）
x-session-id: {uuid}               # 会话ID (z9_)
x-cursor-canary: true              # Canary 标志（可选）
x-cursor-config-version: {hash}    # 配置版本（可选）
```

### 5.2 Header 名称对照表

| 变量名 | Header 名 | 值来源 |
|--------|----------|--------|
| `r6n` | `x-ghost-mode` | `n6n(privacyMode)` → "true" / "false" / "implicit-false" |
| `s6n` | `x-new-onboarding-completed` | `eligibleForSnippetLearning() && !privacyMode` → "true"/"false" |
| `fMn` | `traceparent` | OpenTelemetry trace ID 格式 `00-{trace-id}-{span-id}-01` |
| `jRi` | `x-cursor-client-version` | `productService.version` → "3.7.27" |
| `z9_` | `x-session-id` | 随机 UUID |
| `H9_` | `x-cursor-config-version` | 配置哈希（可选） |
| — | `x-cursor-timezone` | `Intl.DateTimeFormat().resolvedOptions().timeZone` |
| — | `x-cursor-canary` | 是否为 canary 版本 |

### 5.3 Python Header 生成

```python
import uuid
import json
import base64
import hashlib
from datetime import datetime, timezone


def generate_traceparent() -> str:
    """生成 OpenTelemetry traceparent 格式"""
    trace_id = uuid.uuid4().hex  # 32 位 hex
    span_id = uuid.uuid4().hex[:16]  # 16 位 hex
    return f"00-{trace_id}-{span_id}-01"


def get_common_headers(access_token: str = None) -> dict:
    """构造 Cursor API 通用请求头"""
    headers = {
        "x-ghost-mode": "false",
        "x-new-onboarding-completed": "false",
        "traceparent": generate_traceparent(),
        "x-cursor-client-version": "3.7.27",
        "x-session-id": str(uuid.uuid4()),
        "x-cursor-timezone": "Asia/Shanghai",
    }
    if access_token:
        headers["Authorization"] = f"Bearer {access_token}"
    return headers
```

---

## 六、Python 实现

### 6.1 完整登录模拟

```python
import base64
import hashlib
import json
import time
import uuid
from urllib.parse import urlencode

import requests


class CursorAuthSimulator:
    """Cursor 授权登录模拟器"""
    
    # === 常量 ===
    WEBSITE_URL = "https://cursor.com"
    BACKEND_URL = "https://api2.cursor.sh"
    AUTH_CLIENT_ID = "KbZUR41cY7W6zRSdpSUJ7I7mLYBKOCmB"
    CURSOR_VERSION = "3.7.27"
    
    def __init__(self):
        self.access_token = None
        self.refresh_token = None
        self.auth_id = None
        self.team_id = None
        self.session = requests.Session()
    
    @staticmethod
    def base64url_encode(data: bytes) -> str:
        """PKCE: base64url 编码 (无 padding)"""
        return base64.urlsafe_b64encode(data).rstrip(b"=").decode()
    
    @staticmethod
    def generate_traceparent() -> str:
        """生成 OpenTelemetry traceparent"""
        trace_id = uuid.uuid4().hex
        span_id = uuid.uuid4().hex[:16]
        return f"00-{trace_id}-{span_id}-01"
    
    @staticmethod
    def generate_pkce_pair() -> tuple:
        """生成 PKCE 验证码和挑战码"""
        verifier = base64.urlsafe_b64encode(
            uuid.uuid4().bytes * 4
        ).rstrip(b"=").decode()
        challenge = CursorAuthSimulator.base64url_encode(
            hashlib.sha256(verifier.encode()).digest()
        )
        return verifier, challenge
    
    def get_common_headers(self, extra: dict = None) -> dict:
        """构造 Cursor API 通用请求头"""
        headers = {
            "x-ghost-mode": "false",
            "x-new-onboarding-completed": "false",
            "traceparent": self.generate_traceparent(),
            "x-cursor-client-version": self.CURSOR_VERSION,
            "x-session-id": str(uuid.uuid4()),
            "x-cursor-timezone": "Asia/Shanghai",
        }
        if self.access_token:
            headers["Authorization"] = f"Bearer {self.access_token}"
        if extra:
            headers.update(extra)
        return headers
    
    def login(self, mode: str = "login") -> str:
        """
        步骤 1-2: 生成登录 URL
        返回: 需要在浏览器中打开的登录 URL
        """
        self.verifier, self.challenge = self.generate_pkce_pair()
        self.login_uuid = str(uuid.uuid4())
        
        params = {
            "challenge": self.challenge,
            "uuid": self.login_uuid,
            "mode": mode,
            "supportsSelectedTeamLogin": "true",
        }
        login_url = f"{self.WEBSITE_URL}/loginDeepControl?{urlencode(params)}"
        return login_url
    
    def poll_for_tokens(self) -> dict:
        """
        步骤 4: 轮询等待用户完成登录
        注意: poll 请求的 headers 不包含 Authorization
        """
        poll_url = f"{self.BACKEND_URL}/auth/poll"
        
        for attempt in range(30):  # 最多 30 次
            params = {
                "uuid": self.login_uuid,
                "verifier": self.verifier,
            }
            
            # Polling 请求不带 Authorization
            resp = self.session.get(
                poll_url,
                params=params,
                headers=self.get_common_headers(),
            )
            
            if resp.status_code == 200:
                data = resp.json()
                self.auth_id = data.get("authId")
                self.team_id = data.get("selectedTeamId")
                
                if data.get("accessToken") and data.get("refreshToken"):
                    self.access_token = data["accessToken"]
                    self.refresh_token = data["refreshToken"]
                    print(f"[OK] 登录成功! authId={self.auth_id}")
                    return data
                else:
                    print(f"[WARN] 响应缺少令牌: {data}")
                    return data
                    
            elif resp.status_code == 404:
                # 用户尚未登录，继续轮询
                print(f"    ...等待用户登录 ({attempt + 1}/30)", end="\r")
                time.sleep(0.5)
            else:
                print(f"\n[ERROR] 轮询失败: HTTP {resp.status_code}")
                return None
        
        print("\n[ERROR] 登录超时")
        return None
    
    def refresh_access_token(self, force: bool = False) -> bool:
        """
        步骤 5: 刷新 access token
        注意: 此接口 Content-Type 为 application/json
        """
        if not self.refresh_token:
            print("[ERROR] 没有 refresh token 可用")
            return False
        
        url = f"{self.BACKEND_URL}/oauth/token"
        body = {
            "grant_type": "refresh_token",
            "client_id": self.AUTH_CLIENT_ID,
            "refresh_token": self.refresh_token,
        }
        
        try:
            resp = self.session.post(
                url,
                json=body,
                headers={"content-type": "application/json"},
                timeout=20,
            )
            
            if resp.status_code != 200:
                print(f"[ERROR] 刷新令牌失败: HTTP {resp.status_code}")
                return False
            
            data = resp.json()
            
            if data.get("shouldLogout") is True:
                print("[ERROR] 服务器要求重新登录")
                return False
            
            # 关键细节: access_token 和 refresh_token 存同一个值!
            self.access_token = data["access_token"]
            self.refresh_token = data["access_token"]
            print("[OK] 令牌刷新成功")
            return True
            
        except requests.Timeout:
            print("[ERROR] 刷新令牌超时")
            return False
    
    def get_stripe_profile(self) -> dict:
        """获取订阅信息（带自动刷新）"""
        url = f"{self.BACKEND_URL}/auth/full_stripe_profile"
        resp = self.session.get(url, headers=self.get_common_headers())
        if resp.status_code == 200:
            return resp.json()
        elif resp.status_code == 401:
            print("[WARN] 令牌过期，尝试刷新...")
            if self.refresh_access_token(force=True):
                return self.get_stripe_profile()
        return None
    
    def has_valid_payment_method(self) -> bool:
        """检查是否有有效支付方式"""
        url = f"{self.BACKEND_URL}/auth/has_valid_payment_method"
        resp = self.session.get(url, headers=self.get_common_headers())
        if resp.status_code == 200:
            return resp.json().get("has_valid_payment_method", False)
        return False
    
    def is_token_expired(self) -> bool:
        """检查当前 access token 是否过期"""
        if not self.access_token:
            return True
        try:
            payload_b64 = self.access_token.split(".")[1]
            padding = 4 - len(payload_b64) % 4
            if padding != 4:
                payload_b64 += "=" * padding
            payload = json.loads(base64.b64decode(payload_b64))
            exp = payload.get("exp", 0)
            return time.time() >= exp - 60  # 提前1分钟视为过期
        except Exception:
            return True
    
    def logout(self):
        """登出"""
        url = f"{self.BACKEND_URL}/auth/logout"
        self.session.post(url, headers=self.get_common_headers())
        self.access_token = None
        self.refresh_token = None
    
    # === 完整登录流程 ===
    
    def login_flow(self, mode: str = "login"):
        """完整登录流程"""
        login_url = self.login(mode)
        
        print("=" * 60)
        print("请在浏览器中打开以下链接完成登录:")
        print(login_url)
        print("=" * 60)
        
        result = self.poll_for_tokens()
        if not result:
            return False
        
        print(f"\n登录成功!")
        print(f"  authId: {self.auth_id}")
        print(f"  access_token: {self.access_token[:30]}...")
        
        return True


# ============= 使用示例 =============
if __name__ == "__main__":
    auth = CursorAuthSimulator()
    
    # 交互式登录
    auth.login_flow("login")
    
    # 查看订阅
    if auth.access_token:
        profile = auth.get_stripe_profile()
        print(f"订阅: {json.dumps(profile, indent=2)}")
```

### 6.2 仅使用 refresh_token

如果已有有效的 refresh_token：

```python
def login_with_refresh_token(refresh_token: str) -> CursorAuthSimulator:
    """使用已有的 refresh_token"""
    auth = CursorAuthSimulator()
    auth.refresh_token = refresh_token
    
    if auth.refresh_access_token():
        print(f"登录成功! token={auth.access_token[:30]}...")
        return auth
    else:
        print("刷新失败，令牌可能已过期")
        return None
```

---

## 七、关键细节

### 7.1 令牌存储键名

```
Cursor 内部存储:
  "cursorAuth/accessToken"   → JWT access token
  "cursorAuth/refreshToken"  → refresh token (同 access_token)
  "cursorAuth/claudeKey"     → Anthropic API Key (可选)
  "cursorAuth/googleKey"     → Google AI Key (可选)
```

### 7.2 tokens 复用逻辑

在刷新令牌时，Cursor 的代码中：
```javascript
// refreshAccessToken 中
this.storeAccessRefreshToken(le.access_token, le.access_token);
// 同一值存两遍!
```

### 7.3 令牌过期检测

```javascript
// getAccessToken 中
if (isTokenExpired or aboutToExpire) {
    await refreshAccessToken();
}
// 提前 60 秒刷新阈值
```

### 7.4 认证状态变更

```javascript
// 令牌变化时触发通知
notifyLoginChangedListeners(isLoggedIn);

// 监听登录状态
cursorAuthenticationService.addLoginChangedListener(callback);
```

---

## 八、与代理结合

将 Python 模拟用于反向代理的关键点：

```python
# 代理需要拦截/替换的端点
INTERCEPTIONS = {
    # 1. 登录端点
    "/loginDeepControl": "代理自己的登录页",
    
    # 2. 轮询端点  
    "/auth/poll": "返回代理签发的令牌",
    
    # 3. 令牌刷新
    "/oauth/token": "返回代理的 JWT",
    
    # 4. 会员信息
    "/auth/full_stripe_profile": "返回代理的订阅状态",
    
    # 5. API 调用中的认证头
    "Authorization: Bearer {cursor_token}": "替换为代理令牌",
}
```