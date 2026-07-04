# Cursor 风控体系 — 隐私模式、加密存储与代理认证 (第14轮)

## 一、隐私模式 (Privacy Mode) — 5 个级别

```typescript
enum PrivacyMode {
  UNSPECIFIED = 0,                       // 未指定
  NO_STORAGE = 1,                        // 不存储任何代码数据
  USAGE_DATA_TRAINING_ALLOWED = 2,       // 允许使用数据训练
  USAGE_CODEBASE_TRAINING_ALLOWED = 3,   // 允许代码库训练
  NO_TRAINING = 4,                       // 不允许训练
}
```

### 各级别行为

| 级别 | 存储代码 | 使用数据训练 | 代码库训练 | 适用场景 |
|------|:--------:|:-----------:|:---------:|---------|
| UNSPECIFIED | ? | ? | ? | 初始状态 |
| NO_STORAGE | ❌ | ❌ | ❌ | 隐私优先 |
| USAGE_DATA_TRAINING_ALLOWED | ✅ | ✅ | ❌ | 默认/正常 |
| USAGE_CODEBASE_TRAINING_ALLOWED | ✅ | ✅ | ✅ | 允许代码学习 |
| NO_TRAINING | ✅ | ❌ | ❌ | 只存不用 |

隐私模式通过 `x-ghost-mode` header 传递：
```javascript
x-ghost-mode = "true"      // NO_STORAGE → 完全隐私
x-ghost-mode = "false"     // 正常模式
x-ghost-mode = "implicit-false"  // 未设置
```

---

## 二、代理认证凭据加密存储

### 2.1 存储键

```javascript
PROXY_CREDENTIALS_SERVICE_KEY = "proxy-credentials://";
```

### 2.2 存储/读取流程

```javascript
// 读取
const encrypted = applicationStorageMainService.get(PROXY_CREDENTIALS_SERVICE_KEY + url);
const decrypted = await encryptionMainService.decrypt(encrypted);
const { username, password } = JSON.parse(decrypted);

// 存储
const encrypted = await encryptionMainService.encrypt(JSON.stringify({ username, password }));
applicationStorageMainService.store(PROXY_CREDENTIALS_SERVICE_KEY + url, encrypted);
```

**代理凭据在存储前使用 AES 加密**。

---

## 三、Secret Storage (密钥存储)

### 3.1 存储键格式

```javascript
getSecretStorageKey(service, account) {
    return `${service}${hash(account)}`;
}
```

### 3.2 支持的后端

| 后端 | 平台 |
|------|------|
| keychain (macOS) | macOS Keychain |
| keytar | 跨平台 (macOS/Linux/Win) |
| dpapi | Windows (Data Protection API) |
| safeStorage | Electron safeStorage |

### 3.3 存储链路

```
setSecret(service, account, value)
  ↓
getSecretStorageKey(service, account) // 生成存储键
  ↓
encrypt(value)                        // AES 加密
  ↓
store(storageKey, encryptedValue)     // 写入 applicationStorage
```

---

## 四、is_headless 风控标记

```protobuf
field 45: is_headless (bool)
```

**用途**: 标记请求是否来自无头(headless)环境。服务端根据此标记：
- 限制无头环境的 API 访问
- 触发额外的风控检查
- 可能限制某些高级功能

---

## 五、第14轮新增发现汇总

| 发现 | 重要度 |
|------|:------:|
| **5 级隐私模式** | ⭐⭐⭐ NO_STORAGE → USAGE_CODEBASE_TRAINING_ALLOWED |
| **代理凭据 AES 加密** | ⭐⭐ `encrypt()`/`decrypt()` 安全存储 |
| **Secret Storage 4 种后端** | ⭐⭐ keychain/keytar/dpapi/safeStorage |
| **is_headless 风控标记** | ⭐⭐ 无头环境检测 |
| **x-ghost-mode 三值与 privacyMode 映射** | ⭐⭐⭐ 风控传递链 |

*第14轮分析，2026-06-17*
*覆盖: privacyMode 枚举、代理加密、secret storage、headless 检测*
