# Cursor 风控体系 — Statsig 初始化、URL 配置、Sentry 上下文 (第15轮)

## 一、Statsig 客户端初始化

### 1.1 初始化参数

```javascript
// ExperimentService 中初始化 Statsig
_initializeStatsigClient(user, options) {
    const proxyUrl = this.productService.statsigLogEventProxyUrl;
    // proxyUrl = "https://api3.cursor.sh/tev1/v1"
    
    this._statsig = new StatsigClient(
        this.productService.statsigClientKey,  // "client-Bm4HJ0aDjXHQVsoACMREyLNxm5p6zzuzhO50MgtoT5D"
        user,
        {
            dataAdapter: this._dataAdapter,
            // 使用代理 URL
            api: proxyUrl,
            // 初始化超时: 3 秒
            initTimeoutMs: 3000,
        }
    );
}
```

### 1.2 用户标识构建

```javascript
// Statsig 用户标识中包含:
{
    userID: authId,           // 登录用户的 auth ID
    customIDs: {
        stableID: statsig_stable_id,  // 持久化 cookie
    },
    userAgent: navigator.userAgent,
    // 系统信息
}
```

### 1.3 缓存机制

```javascript
// 从本地缓存加载 Statsig 配置
_hydrateStatsigClient(user, bootstrapData, source) {
    this._dataAdapter.setData(bootstrapData);
    this._statsig?.updateUserSync(user, {
        disableBackgroundCacheRefresh: true
    });
}
```

---

## 二、product.json 完整 URL 配置清单

| 配置项 | URL | 用途 |
|--------|-----|------|
| `updateUrl` | `https://api2.cursor.sh/updates` | 主更新 |
| `backupUpdateUrl` | `http://cursorapi.com/updates` | 备用更新 |
| `statsigLogEventProxyUrl` | `https://api3.cursor.sh/tev1/v1` | Statsig 代理 |
| `serverDownloadUrlTemplate` | `https://cursor.blob.core.windows.net/...` | 远程服务器下载 |
| `downloadUrl` | `https://cursor.com/downloads` | 下载页 |
| `releaseNotesUrl` | `https://www.cursor.com/changelog` | 更新日志 |
| `reportIssueUrl` | `https://github.com/getcursor/cursor/issues/new` | 问题反馈 |
| `nodejsRepository` | `https://nodejs.org` | Node.js 源 |
| `webviewContentExternalBaseUrlTemplate` | `https://{{uuid}}.vscode-cdn.net/...` | WebView 内容 |
| `licenseUrl` | `https://cursor.com/license.txt` | 许可协议 |

---

## 三、Sentry 上下文数据

Sentry 上报时携带的额外上下文：

```javascript
// 通过 setContext / setExtra 添加的上下文
{
    // 系统信息
    "common.machineId": "...",
    "common.macMachineId": "...",
    "common.sqmId": "...",
    
    // 应用版本
    "version": "3.7.27",
    "commit": "e48ee61...",
    
    // 会话
    "sessionID": "uuid+timestamp",
    
    // 平台
    "platform": "linux",
    "platformVersion": "20.04",
    
    // 错误上下文
    "error": {
        "code": "ERROR_xxx",
        "title": "...",
        "detail": "...",
        "isRetryable": false
    }
}
```

---

## 四、第15轮新增发现汇总

| 发现 | 重要度 |
|------|:------:|
| Statsig 初始化参数确认 (3s 超时) | ⭐ |
| product.json 20+ URL 配置整理 | ⭐⭐ |
| Sentry 上下文数据结构 | ⭐ |
| Statsig 缓存与离线启动 | ⭐ |

*第15轮分析，2026-06-17*
*覆盖: Statsig 初始化、URL 配置、Sentry 上下文*