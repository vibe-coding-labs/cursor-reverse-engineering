# Cursor 逆向分析 — 第四轮报告：ChatService 协议突破与风控验证

> 分析时间: 2026-06-22 12:20~12:30 GMT+8
> 本轮重点: ChatService 协议成功调用，被风控系统拦截

---

## 🎯 核心突破：ChatService ConnectRPC 协议验证成功

### 调用成功的关键

**之前一直失败的原因是**：缺少 `Connect-Protocol-Version: 1` 请求头。

ConnectRPC 协议要求在所有请求中携带版本头：
```
Connect-Protocol-Version: 1
```

没有这个头，服务器返回 `"incomplete envelope"` 错误。

### 最终工作请求格式

```
POST https://api2.cursor.sh/aiserver.v1.ChatService/StreamUnifiedChatWithTools
Content-Type: application/connect+json
Accept: application/connect+json
Connect-Protocol-Version: 1
Authorization: Bearer {token}
x-ghost-mode: false
x-cursor-client-version: 3.7.27
x-cursor-client-os: linux
x-cursor-client-arch: x64
x-cursor-client-device-type: desktop
x-cursor-timezone: Asia/Shanghai
x-session-id: {uuid}
x-cursor-canary: true
x-cursor-checksum: linuxx64

Body: {"stream_unified_chat_request": {...}}  ← 纯 JSON，无 ConnectRPC 信封
```

**响应格式**（ConnectRPC 信封封装）：
```
0x02 (flag=JSON) | uint32 length=1122 | {"error":{...}}
```

### 对 DashboardService 的影响

DashboardService 的请求不需要 Connect-Protocol-Version 头，使用 `Content-Type: application/json` + 纯 JSON body 即可。

---

## 🚨 风控拦截：ERROR_UNAUTHORIZED

### 拦截详情

```json
{
  "error": {
    "code": "unauthenticated",
    "message": "Your request has been blocked as our system has detected suspicious activity from your account.",
    "details": [{
      "type": "aiserver.v1.ErrorDetails",
      "debug": {
        "error": "ERROR_UNAUTHORIZED",
        "details": {
          "title": "Unauthorized request.",
          "detail": "Your request has been blocked...",
          "isRetryable": false,
          "analyticsMetadata": {
            "actionRequired": "login"
          }
        },
        "isExpected": true
      }
    }]
  }
}
```

### 风控触发原因分析

ChatService 调用了风控检查，而 DashboardService 没有。原因：

1. **ChatService 是 AI 调用端点** — 涉及 token 消耗，每次调用都进行风控验证
2. **请求缺少关键头**：
   - `x-cursor-rpc-callsite` — 调用点跟踪
   - `x-cursor-rpc-kind` — RPC 类型
   - `x-request-id` — 请求 ID
   - `traceparent` — OpenTelemetry 跟踪
   - `x-cursor-config-version` — 配置版本
   - `x-cursor-client-layout` — 客户端布局状态
   - `x-cursor-client-os-version` — 完整 OS 版本
3. **Token 来源问题**：token 来自 6月13日的 OAuth 登录但客户端从未成功验证过

### 风控链路（从第13章验证）

```
请求头检查 (头列表 + 值格式)
→ deviceId 检查 (开机自生成 UUID 设备指纹)  
→ machineId 检查 (~/.config/Cursor/machineid)
→ Session 检查 (x-session-id 必须是合法的会话格式)
→ IP 检查 (IP 信誉 + 地理位置)
→ 速率限制 (Token Bucket)
→ 模型/预算检查 (免费用户)
```

---

## 三、贯穿全集的协议映射

### 3.1 协议矩阵（最终版）

| 端点群组 | Content-Type | 需要信封 | Connect-Version 头 | 风控检查 |
|---------|:------------:|:--------:|:-----------------:|:--------:|
| `DashboardService/*` | `application/json` | ❌ | ❌ | ❌ |
| `AuthService/*` | `application/json` | ❌ | ❌ | ❌ |
| `auth/*` (REST) | `application/json` | ❌ | ❌ | ❌ |
| `ChatService/StreamUnifiedChat*` | `application/connect+json` | ❌ (纯 JSON) | **✅ 必须** | ✅ |
| `Metrics/Proclist` | `application/json` | ❌ | ❌ | ✅ |
| `AnalyticsService/*` | `application/json` | ❌ | ❌ | ❌ |

> **结论**: 只有 ChatService 流式端点同时需要 Connect-Protocol-Version 头 + 完整风控头集合。Dashboard 端点是纯 JSON 免风控。

### 3.2 客户端与协议的唯一正确配置

```python
# 正确的客户端配置

def dashboard_rpc(service, method, token, body={}):
    """DashboardService: 纯 JSON POST"""
    POST https://api2.cursor.sh/{service}/{method}
    Content-Type: application/json
    Authorization: Bearer {token}
    Body: {json}

def chat_rpc(service, method, token, body):
    """ChatService: ConnectRPC + Protocol Version"""
    POST https://api2.cursor.sh/{service}/{method}
    Content-Type: application/connect+json
    Connect-Protocol-Version: 1
    Authorization: Bearer {token}
    x-cursor-*: (完整 18 个头集合)
    Body: {json}
```

---

## 四、本轮协议库修复清单

### cursor_client.py 已修复
- [x] `_call_connect_rpc` → `_call_rpc` (JSON POST 无信封)
- [x] `chat()` → 改用 requests 库 + JSON body

### proxy.py 已修复
- [x] `decode_connect_response()` 添加 flag 校验
- [x] 添加注释说明协议双重性

### 仍需修复的
- [ ] `cursor_client.py` 的 `chat()` 流式模式 — 需要添加 Connect-Protocol-Version 头
- [ ] `cursor_client.py` 添加完整的 18 个 x-cursor-* 头
- [ ] `proxy.py` 的 `make_cursor_headers()` — 需要区分 Dashboard vs Chat Service 的协议

---

## 五、项目完成状态总结（全 4 轮）

### 已产出的文档

| # | 文件 | 内容 | 字数 |
|:-:|------|------|:---:|
| 1 | `docs/16-protocol-correction/protocol-discovery-report.md` | 协议修正发现 + 客户端修复 | ~1500 |
| 2 | `docs/16-protocol-correction/round-2-deep-analysis.md` | 扩展全览 + 29 推理集群 + 协议矩阵 | ~2000 |
| 3 | `docs/16-protocol-correction/round-3-protocol-duality-and-statsig.md` | 协议双重性 + Statsig + 18 头集合 | ~2000 |
| 4 | `docs/16-protocol-correction/round-4-chatservice-blocked.md` | ⬆️ 本文 | ~1500 |

### 已运行的深度分析覆盖领域

| 领域 | 状态 | 说明 |
|------|:----:|------|
| API 协议修正 | ✅ | ConnectRPC→JSON; Connect-Version 头发现 |
| 认证流程 | ✅ | 完整 PKCE + WorkOS 流程已在 docs/07 |
| 18 扩展清单 | ✅ | 全部 18 个扩展功能描述 |
| 推理集群 | ✅ | 29 区域完整配置 |
| Statsig 遥测 | ✅ | SDK 版本、端点、事件类型、缓冲配置 |
| 用户会话 | ✅ | Free 套餐、0% 用量、Token 剩余 51天 |
| ChatService 协议 | ✅ | 协议正确，被风控拦截 |
| 风控制验证 | ✅ | ERROR_UNAUTHORIZED 确认 |
| proxy.py 修复 | ✅ | decode_connect_response + 注释 |
| workbench 代码提取 | ✅ | x-cursor-* 头、protobuf 定义、dashboardClient 实现 |

### 仍待后续分析的领域

| 领域 | 难度 | 说明 |
|:----|:----:|------|
| ChatService 风控绕过 | 🔴 | 需要完整模拟真实客户端头集合 |
| Agent Store 虚拟文件系统 | 🟡 | FUSE 文件系统实现 |
| cursor-retrieval (31MB) | 🟡 | 代码智能和检索协议 |
| 风控绕过策略实现 | 🟡 | 基于 20 轮 anti-fingerprint 分析 |
| MCP 协议实现细节 | 🟢 | cursor-mcp 的服务器连接 |

---

## 六、最终建议

### 对 proxy.py 和使用建议

1. **Dashboard 代理工作完全正常** — 请求转发到 `api2.cursor.sh` 可以正确获取 PlanInfo, Usage 等
2. **Chat 代理需要完整客户端模拟** — 包括设备的 machineId, x-cursor-* 头集合, 以及可能需要的 session 预热
3. **Token 刷新端点** `POST /oauth/token` 工作正常（grant_type=refresh_token）
4. **Statsig 遥测**通过 `api3.cursor.sh/tev1/v1` 代理发送
