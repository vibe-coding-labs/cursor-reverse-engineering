# Cursor 风控、设备指纹与遥测机制分析 (第3轮 — 最终汇总)

## 一、StreamUnifiedChatRequest 完整协议 (86 个字段)

### 请求结构

```
外层: StreamUnifiedChatRequestWithTools (P9)
  ├── stream_unified_chat_request: StreamUnifiedChatRequest (PMs)
  └── client_side_tool_v2_result: ClientSideToolV2Result

内层: StreamUnifiedChatRequest (86 fields)
```

### 核心字段分类

| 类别 | 字段 | 说明 |
|------|------|------|
| **对话** | `conversation`, `conversation_summary`, `conversation_id` | 消息历史 |
| **模型** | `model_details` (ModelDetails), `allow_model_fallbacks` | 模型选择 |
| **模式** | `unified_mode`, `is_agentic`, `is_chat`, `is_spec_mode` | 对话模式 |
| **上下文** | `project_context`, `current_file`, `environment_info` | 环境上下文 |
| **工具** | `supported_tools`, `mcp_tools`, `tools_requiring_accepted_return` | 工具定义 |
| **风控** | `is_headless`, `force_is_not_dev` | 检测标志 |
| **检索** | `additional_ranked_context`, `allow_server_side_semantic_search` | RAG 相关 |
| **调试** | `force_terminal_hanging_detection`, `force_summarization` | 控制参数 |
| **UI** | `workspace_folders`, `indexing_progress`, `indexing_phase_if_unindexed` | 工作区状态 |
| **认证** | `context_bank_session_id`, `context_bank_encryption_key` | 会话加密 |

### ModelConfig (模型配置消息)

```javascript
// 从 always-local 提取的字段:
default_model: string        // 默认模型 ID
fallback_models: string[]    // 备用模型列表
best_of_n_default_models: string[]  // Best-of-N 默认模型
```

**调用时的 JSON 格式**:
```json
{
  "stream_unified_chat_request": {
    "conversation": [{"role": "user", "content": [{"type": "text", "text": "hi"}]}],
    "model_details": {
      "default_model": "gpt-4o",
      "allow_model_fallbacks": false
    },
    "unified_mode": 1,
    "max_tokens": 100
  }
}
```

---

## 二、完整 x-cursor-* 自定义 Header 清单 (18 个)

| Header | 作用 | 数据类型 | 重要性 |
|--------|------|:--------:|:------:|
| `x-cursor-client-version` | 客户端版本 | string | 🔴 必检 |
| `x-cursor-client-arch` | CPU 架构 (x64/arm64) | string | 🟡 |
| `x-cursor-client-os` | OS 类型 (linux/darwin/win32) | string | 🔴 必检 |
| `x-cursor-client-os-version` | OS 版本号 | string | 🟡 |
| `x-cursor-client-type` | 客户端类型 (desktop/web) | string | 🔴 必检 |
| `x-cursor-client-layout` | UI 布局 | string | 🟢 |
| `x-cursor-client-device-type` | 设备类型 | string | 🟢 |
| `x-cursor-timezone` | IANA 时区 | string | 🟡 |
| `x-cursor-config-version` | 配置版本哈希 | string | 🟢 |
| `x-cursor-canary` | Canary 版本标志 | boolean | 🟢 |
| `x-cursor-checksum` | 文件校验和 | string | 🟡 |
| `x-cursor-remote-type` | 远程开发类型 (ssh/wsl) | string | 🟡 |
| `x-cursor-server-region` | 服务器区域 | string | 🟢 |
| `x-cursor-simulate-slow-provider` | 模拟慢 Provider (调试) | boolean | 🟢 |
| `x-cursor-rpc-callsite` | RPC 调用点追踪 | string | 🟢 |
| `x-cursor-rpc-exthost` | RPC 扩展主机 | boolean | 🟢 |
| `x-cursor-rpc-kind` | RPC 类型 (unary/stream) | string | 🟢 |
| `x-cursor-rpc-workbench` | RPC 工作台 | boolean | 🟢 |

### 其他非 cursor 自定义 Header

| Header | 用途 |
|--------|------|
| `x-ghost-mode` | 隐私模式开关 (false/true/implicit-false) |
| `x-new-onboarding-completed` | 新手引导完成标志 |
| `x-session-id` | 会话 UUID |
| `x-request-id` | 请求 UUID |
| `traceparent` | OpenTelemetry W3C Trace Context |
| `x-amzn-trace-id` | AWS X-Ray 追踪 |
| `x-background-composer-env` | 后台 Composer 环境标识 |
| `x-client-key` | 客户端密钥 |
| `x-chat-context` | 聊天上下文标识 |

---

## 三、machineId 设备指纹体系

### 4 种设备标识

| 标识 | 名称 | 生成方式 | 持久化位置 |
|------|------|---------|-----------|
| `machineId` | 主机器 ID | `abuseService.getMachineId()` | `.config/Cursor/machineid` |
| `macMachineId` | macOS 机器 ID | `abuseService.getMacMachineId()` | Keychain |
| `sqmId` | SQM ID | 从系统获取 | 系统级 |
| `devDeviceId` | 设备 ID | `_ca_device_id cookie` | Cookie |

### 遥测公共属性

```javascript
{
  "common.machineId": "...",        // 硬件指纹
  "common.macMachineId": "...",     // macOS 唯一标识
  "common.sqmId": "...",            // 微软质量指标 ID
  "common.devDeviceId": "...",      // 设备标识
  sessionID: "uuid+timestamp",      // 会话 ID
  commitHash: "e48ee61...",         // 构建版本
  version: "3.7.27",               // 客户端版本
  "common.platformVersion": "20.04" // OS 版本
}
```

---

## 四、ConnectRPC 协议规范

### 分帧格式

```
请求:  [1字节标志][4字节大端长度][JSON body]
        0x00      uint32(len(body))  JSON字符串

响应:  [1字节标志][4字节大端长度][JSON body]
        0x02      uint32(len(body))  JSON响应/错误
```

### 标志位

| 值 | 含义 |
|:--:|------|
| 0x00 | 未压缩 |
| 0x02 | 响应（含错误） |

### Content-Type

| 场景 | Content-Type |
|------|-------------|
| ConnectRPC JSON | `application/connect+json` |
| gRPC Web JSON | `application/grpc-web+json` |
| gRPC JSON | `application/grpc+json` |

---

## 五、已知风控规则汇总

| 规则 | 检测方式 | 触发条件 | 响应 |
|------|---------|---------|------|
| 设备指纹不一致 | `machineId` + IP + cookies | 指纹突然变化 | `ERROR_UNAUTHORIZED` |
| 请求频率超限 | `x-session-id` + 速率计算 | 短时间密集请求 | `ERROR_UNAUTHORIZED` |
| 缺少客户端特征 | header 不完整 | 缺失 `x-cursor-client-*` | 415 / 拒绝 |
| 模型名无效 | 服务端白名单 | 模型 ID 不存在 | `ERROR_BAD_MODEL_NAME` |
| 会话不连续 | `sessionID` 断裂 | 新 session 无关联旧 session | 可能 ban |
| 非标准协议 | ConnectRPC 分帧解析 | 格式不正确 | `incomplete envelope` |
| 免费额度超限 | `spendLimitUsage` 计数 | >200 次/月 | `FREE_USER_RATE_LIMIT` |
| 异常来源 IP | IP 地理位置 + 声誉 | 代理/VPN/异常区域 | `ERROR_UNAUTHORIZED` |

### 风控严重等级分布

```
🔴 硬阻拦 (不可绕过):
  - machineId 绑定
  - JWT sub (user_id) 绑定
  - ConnectRPC 协议完整性
  
🟡 中等 (可模拟但需一致):
  - 18 个 x-cursor-* header 一致性
  - 会话连续性 (session-id)
  - 请求频率控制
  
🟢 低 (容易模拟):
  - 静态 header 值
  - 基础 User-Agent
  - Cookie 持久化
```

---

## 六、第2轮优化后的模拟参数

```python
# 完整请求配置
HEADERS = {
    'Authorization': f'Bearer {token}',
    'Content-Type': 'application/connect+json',
    'Accept': 'application/connect+json',
    'x-ghost-mode': 'false',
    'x-cursor-client-version': '3.7.27',
    'x-session-id': str(uuid.uuid4()),
    'x-request-id': str(uuid.uuid4()),
    'traceparent': f'00-{uuid.uuid4().hex}-{uuid.uuid4().hex[:16]}-01',
}

# 分帧
envelope = b'\x00' + struct.pack('>I', len(body)) + body.encode()

# 最小 Chat 请求体
CHAT_BODY = {
    "stream_unified_chat_request": {
        "conversation": [{
            "role": "user",
            "content": [{"type": "text", "text": "hi"}]
        }],
        "unified_mode": 1,        # CHAT = 1
        "is_chat": True,
        "allow_model_fallbacks": False,
        "model_details": {
            "default_model": "gpt-4o"
        },
        "max_tokens": 100
    }
}
```

---

*第3轮（最终汇总），2026-06-13*
*覆盖: StreamUnifiedChatRequest 86字段全部提取、ConnectRPC 完整协议、18个 header 清单、machineId 体系、风控规则汇总*
