# cursor-browser-automation 协议分析

## 概述
cursor-browser-automation (1.6MB) 是一个 **MCP 服务器**，使 Agent 能够控制浏览器。

## 一、架构

```
Cursor Agent → MCP Tool Call → cursor-browser-automation → Chrome DevTools Protocol (CDP) → 浏览器
```

## 二、MCP 工具接口

浏览器自动化通过 MCP 协议暴露以下工具：

### 导航
```json
{
  "name": "browser_navigate",
  "description": "Navigate to a URL",
  "input": { "url": "https://..." }
}
```

通过命令 `cursor.browserView.navigate` 执行：
```javascript
await commands.executeCommand("cursor.browserView.navigate", 
  url, viewId, { headless, preserveFocus: true, trackingId: "mcp" });
```

### 页面操作
```json
{
  "name": "browser_click",
  "description": "Click an element on the page"
}
{
  "name": "browser_type",
  "description": "Type text into an input field"
}
{
  "name": "browser_screenshot",
  "description": "Take a screenshot of the page"
}
```

## 三、通信协议

| 协议 | 用途 |
|------|------|
| **MCP** | Agent 调用浏览器工具的接口 |
| **Chrome DevTools Protocol (CDP)** | 控制浏览器的底层协议 |
| **WebSocket** | MCP 传输层 |

### 连接方式

```javascript
// 使用 Chrome Remote Interface
const CDP = require('chrome-remote-interface');
const client = await CDP({ host: 'localhost', port: 9222 });
```

## 四、资源类型

| 资源 | 说明 |
|------|------|
| `browser://current-page` | 当前页面内容/状态 |
| `browser://screenshot` | 页面截图（PNG base64） |
| `browser://console-logs` | 控制台日志 |

## 五、安全模型

```javascript
// 浏览器允许来源验证
browserOriginAllowlist: string[]

// 网络拒绝列表
networkDenylist: string[]
```

## 六、错误恢复

```javascript
// 断线重连
retryAttempt: 最多重试次数
clearRecoveryLoop()  // 恢复循环

// 触发推送
lastPushedFingerprint  // 页面指纹来检测变化
```