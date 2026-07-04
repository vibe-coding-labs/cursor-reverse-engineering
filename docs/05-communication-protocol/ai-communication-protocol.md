# Cursor AI 通信协议 — 完整逆向分析

> 目标：完全透明的协议分析，可直接用于实现中转反向代理

---

## 一、协议全景

```
Cursor Agent (客户端)                              Cursor Cloud                    LLM Providers
                                                        │
┌────────────────────────────────────┐                  │              ┌──────────────────────┐
│  cursor-agent-exec (Agent Engine)  │                  │              │  Anthropic            │
│  ┌──────────────────────────────┐  │    ConnectRPC    │              │  api.anthropic.com/v1 │
│  │  LLM Client Layer            │──┼──────────────────┼──────────────┤                      │
│  │  (自动检测apiType)            │  │                  │              │  POST /messages       │
│  └──────────┬───────────────────┘  │                  │              └──────────────────────┘
│             │                      │                  │                                      
│  ┌──────────▼───────────────────┐  │                  │              ┌──────────────────────┐
│  │  Model Provider Adapters      │  │     HTTP/JSON    │              │  OpenAI               │
│  │  ┌──────────┐ ┌──────────┐   │  │     (或直接)     │              │  api.openai.com/v1    │
│  │  │anthropic │ │ openai   │   │──┼──────────────────┼──────────────┤                      │
│  │  │_messages │ │_chat     │   │  │                  │              │  POST /chat/completions│
│  │  └──────────┘ └──────────┘   │  │                  │              └──────────────────────┘
│  │  ┌──────────┐ ┌──────────┐   │  │                                              
│  │  │responses │ │openai_   │   │  │                  ┌──────────────────────┐
│  │  │          │ │compatible│   │  │                  │  AWS Bedrock          │
│  │  └──────────┘ └──────────┘   │  │                  │  bedrock-runtime.{r}  │
│  └──────────────────────────────┘  │                  └──────────────────────┘
│                                    │                                      
│  ┌──────────────────────────────┐  │                  ┌──────────────────────┐
│  │  Agent Store Layer           │  │   ConnectRPC     │  Cursor 自有推理      │
│  │  (BcsAgentStoreTransport)    │──┼──────────────────┤ cursorvm-manager.com │
│  │  localhost:50051 | cloud     │  │  双向流           │ 多区域集群           │
│  └──────────────────────────────┘  │                  └──────────────────────┘
└────────────────────────────────────┘
```

---

## 二、核心协议：LLM 调用

### 2.1 API 自动检测机制

Cursor Agent 通过 **Model Discovery 协议** 探测 API 类型：

```mermaid
flowchart TD
    A[Agent 需要调用模型] --> B{有 baseUrl?}
    B -->|没有| C[使用 cursorvm-manager\n作为默认 provider]
    B -->|有| D{baseUrl 以 /messages 结尾?}
    D -->|是| E[apiType = anthropic_messages]
    D -->|否| F[GET {baseUrl}/models\n检测 api_types 字段]
    F --> G{api_types 包含什么?}
    G -->|anthropic_messages| H[apiType = anthropic_messages]
    G -->|chat_completions/openai_chat| I[apiType = openai_chat\nendpoint = chat_completions]
    G -->|responses/openai_responses| J[apiType = responses\nendpoint = responses]
    G -->|其他/无| K[apiType = openai_compatible\n尝试 default]
```

**代码中的检测逻辑**：
```javascript
// 第一步：URL 模式匹配
if (baseUrl.endsWith("/messages")) {
  return { apiType: "anthropic_messages" };
}

// 第二步：API 探测
const response = await fetch(`${baseUrl}/models`, {
  headers: {
    "Authorization": `Bearer ${apiKey}`,
    "User-Agent": userAgent
  }
});
const { data: models } = await response.json();
const model = models.find(m => m.id === modelId);
const apiTypes = model.api_types;  // ["anthropic_messages"] 等

// 第三步：类型推断
const apiType = apiTypes.includes("anthropic_messages") 
  ? "anthropic_messages" 
  : "openai_compatible";
```

### 2.2 模型发现 API (Model Discovery)

**请求**：
```
GET {baseUrl}/models
Authorization: Bearer {apiKey}
User-Agent: {userAgent}
```

**响应**：
```json
{
  "data": [
    {
      "id": "claude-sonnet-4-20250514",
      "api_types": ["anthropic_messages"],
      "capabilities": {
        "context_length": 200000
      },
      "object": "model"
    },
    {
      "id": "gpt-4o",
      "api_types": ["openai_chat", "chat_completions"],
      "capabilities": {
        "context_length": 128000
      }
    }
  ]
}
```

**处理逻辑**：
```javascript
// 模型选择器返回
{
  modelId: "claude-sonnet-4-20250514",      // 原始或重映射的模型ID
  apiTypes: ["anthropic_messages"],          // 支持的 API 类型
  contextLength: 200000,                      // 上下文长度
  remappedModelId: undefined,                // 服务端重映射的模型ID
}
```

### 2.3 Anthropic Messages API — 完整调用格式

**当 apiType=anthropic_messages 时的调用链路**：

```javascript
// === 配置 ===
const config = {
  baseUrl: "https://api.anthropic.com/v1",
  apiKey: "sk-ant-...",
  userAgent: "...",
  apiType: "anthropic_messages"
};

// === URL 构造 ===
const url = `${config.baseUrl}/messages`;  
// "https://api.anthropic.com/v1/messages"

// === 请求 ===
fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${apiKey}`,
    "User-Agent": userAgent
  },
  body: JSON.stringify({
    model: "claude-sonnet-4-20250514",
    max_tokens: 4096,
    messages: [
      {
        role: "user",
        content: [
          { type: "text", text: "..." }
        ]
      }
    ],
    tools: [
      {
        name: "read_file",
        description: "Read file contents",
        input_schema: {
          type: "object",
          properties: {}
        }
      }
    ],
    stream: true
  })
});

// === 流式响应 (SSE) ===
// data: {"type": "content_block_delta", "delta": {"text": "Hello"}}
// data: {"type": "content_block_stop"}
// data: {"type": "message_delta", "delta": {"stop_reason": "tool_use"}}
```

### 2.4 OpenAI Chat API — 完整调用格式

**当 apiType=openai_chat 时的调用链路**：

```javascript
// === URL 构造 ===
const endpoint = apiTypes.includes("chat_completions") || 
                apiTypes.includes("openai_chat")
  ? "/chat/completions" : "/responses";

const url = `${baseUrl}${endpoint}`;

// === 请求 ===
fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${apiKey}`,
    "User-Agent": userAgent
  },
  body: JSON.stringify({
    model: "gpt-4o",
    messages: [
      { role: "system", content: "..." },
      { role: "user", content: "..." }
    ],
    tools: [...],
    stream: true
  })
});
```

### 2.5 Cursor 自有推理 — `/model/{id}` 协议

**当使用 Cursor 自有推理时，调用格式完全不同**：

```javascript
// === URL 模式 ===
// 基础 URL 格式
const baseUrl = "https://us1.cursorvm-manager.com";  // 或 localhost:50051

// 模型调用
const invokeUrl = `${baseUrl}/model/${encodeURIComponent(modelId)}`;
const streamUrl = `${baseUrl}/model/${encodeURIComponent(modelId)}/converse-stream`;
const embeddingUrl = `${baseUrl}/model/${encodeURIComponent(modelId)}/invoke`;

// === 网关配置 ===
const gatewayConfig = {
  baseUrl: () => "https://us1.cursorvm-manager.com",
  apiKey: "local-agent",  // 本地模式默认值
  userAgent: "Cursor/3.7.27",
  apiType: "openai_compatible"
};

// === 流式对话调用 (converse-stream) ===
const url = `${gatewayConfig.baseUrl()}/model/${modelId}/converse-stream`;
const { value, responseHeaders } = await B4({
  url,
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${gatewayConfig.apiKey}`,
    "User-Agent": gatewayConfig.userAgent,
    ...customHeaders
  },
  body: {
    // 消息内容
    messages: [...],
    // Agent 配置
    system: "...",
    // 工具定义
    tools: [...],
    // 流式控制
    stream: true
  }
});

// === 非流式调用 (model/{id}) ===
const nonStreamUrl = `${gatewayConfig.baseUrl()}/model/${modelId}`;
const result = await fetch(nonStreamUrl, {
  method: "POST",
  headers: { ... },
  body: JSON.stringify({ messages: [...], tools: [...] })
});

// === Embedding 调用 ===
const embedUrl = `${gatewayConfig.baseUrl()}/model/${modelId}/invoke`;
const { value } = await B4({
  url: embedUrl,
  headers: { ... },
  body: {
    inputText: "...",
    dimensions: 1536,
    normalize: true
  }
});
```

### 2.6 流式响应 (SSE) 格式

Cursor Agent 使用 **Server-Sent Events (SSE)** 处理流式响应：

```javascript
// === B4 函数 ===
// B4 是 Cursor 自定义的 HTTP 请求包装函数，处理 JSON + SSE 响应

async function B4({ url, headers, body, failedResponseHandler }) {
  const response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body)
  });
  
  if (!response.ok) {
    // 错误处理
  }
  
  const contentType = response.headers.get("content-type");
  if (contentType && contentType.includes("text/event-stream")) {
    // SSE 流处理
    const reader = response.body.getReader();
    // 逐行解析 SSE 事件
  } else {
    // JSON 响应
    const json = await response.json();
    return { value: json, responseHeaders: response.headers };
  }
}

// === SSE 事件格式 ===
const SSE_FORMAT = {
  // Agent 思考
  'type': 'thinking_delta',
  'delta': { 'text': 'I need to...' }
  
  // 文本生成
  'type': 'text_delta',
  'delta': { 'text': 'Here is the...' }
  
  // 工具调用
  'type': 'tool_call',
  'tool_call': {
    'name': 'read_file',
    'arguments': { 'path': '...' }
  }
  
  // 工具结果
  'type': 'tool_result',
  'tool_result': {
    'name': 'read_file',
    'content': 'file contents...'
  }
  
  // 元数据
  'type': 'response-metadata',
  'usage': {
    'input_tokens': 100,
    'output_tokens': 200
  }
};
```

### 2.7 Provider 调用汇总

| Provider | apiType | 模型发现 URL | 调用 URL | 认证方式 |
|----------|---------|-------------|---------|---------|
| Anthropic | `anthropic_messages` | `{baseUrl}/models` | `{baseUrl}/messages` | `Bearer {apiKey}` |
| OpenAI | `openai_chat` | `{baseUrl}/models` | `{baseUrl}/chat/completions` | `Bearer {apiKey}` |
| OpenAI (responses) | `responses` | `{baseUrl}/models` | `{baseUrl}/responses` | `Bearer {apiKey}` |
| OpenAI 兼容 | `openai_compatible` | `{baseUrl}/models` | `auto: chat_completions/responses` | `Bearer {apiKey}` |
| AWS Bedrock | `bedrock` | N/A | `bedrock-runtime.{region}.amazonaws.com` | AWS SigV4 |
| Cursor 自有 | `openai_compatible` | `{baseUrl}/models` | `{baseUrl}/model/{id}`/`/converse-stream` | `Bearer {apiKey}` 或 `local-agent` |
| Cursor 自有 | — | — | `{baseUrl}/model/{id}/invoke` (embedding) | `Bearer {apiKey}` |

---

## 三、Agent Store 协议 (ConnectRPC)

### 3.1 传输层

Agent Store 使用 **ConnectRPC**（兼容 gRPC）协议，基于 `@connectrpc` + `@bufbuild/protobuf`：

```javascript
// 本地模式
const localCluster = {
  managerUrl: "http://localhost:50051",    // gRPC 本地服务
  isLocal: true
};

// 云模式（远程）
const cloudClusters = {
  managerUrl: "https://us1.cursorvm-manager.com",
  isLocal: false
};

// 传输层初始化
const transport = new BcsAgentStoreTransport({
  transport: cursor.connectTransport    // ConnectRPC 传输
});
```

### 3.2 双向流协议

```
Agent Store 双向流:

客户端 → 服务器: ExecClientMessage
   ├── ExecClientControlMessage (控制消息)
   ├── ExecClientHeartbeat (心跳)
   ├── ExecClientStreamClose (流关闭)
   └── ExecClientThrow (异常)

服务器 → 客户端: ExecServerMessage
   ├── ExecServerControlMessage (控制消息)
   └── ExecServerAbort (中止)
```

### 3.3 令牌管理

```javascript
// 双层客户端包装
const client = new RetryingAgentStoreClient(
  new TokenCachingAgentStoreClient(transport)
);
// 外层：自动重试
// 内层：令牌自动缓存和刷新
```

---

## 四、aiserver.v1 服务类型全景

从代码提取了两个关键的服务命名空间：

### 4.1 aiserver.v1 类型

涵盖所有 AI 服务相关类型，包括请求/响应/事件等：

**核心服务类型**
```
aiserver.v1.AcceptCursorPredictionEvent
aiserver.v1.AcceptInviteRequest / Response
aiserver.v1.AddGithubUsersToTeamRequest / Response
aiserver.v1.AddMcpServersFromPluginRequest / Response
aiserver.v1.AgentStartupTraceEvent
aiserver.v1.AgentStore / AgentStoreEntry / AgentStoreKind
aiserver.v1.AiCodeChange / AiLintBug / AiLintRule
aiserver.v1.AiRequestEvent / AiThoughtAnnotation
aiserver.v1.AiWebSearchResult / AiWebSearchResults
aiserver.v1.ApiDetails / ApiKeyDetails
```

**Composer/编辑类型**
```
aiserver.v1.ComposerFileDiff
aiserver.v1.ComposerStreamRequest / Response
```

**流式请求上下文**
```
aiserver.v1.StreamChatContextRequest / Response
aiserver.v1.StreamChatResponse
aiserver.v1.StreamChatToolformerResponse
aiserver.v1.TaskStream / TaskStreamLogResponse
aiserver.v1.TaskStreamChatContextRequest / Response
```

**用户/团队/计费**
```
aiserver.v1.User / Team / TeamMember
aiserver.v1.Subscription / UsageBasedReqs / ApiKeyReqs
aiserver.v1.ActivationStatus / ActiveCreditGrant
```

**模型相关**
```
aiserver.v1.AllowedMCPConfiguration
aiserver.v1.AllowedMCPServer
aiserver.v1.UsageLimits
aiserver.v1.VmDefinition / VmProvider
```

### 4.2 agent.v1 类型

涵盖所有 Agent 执行相关类型（**1000+ 种消息类型**），归类如下：

**核心流程**
```
agent.v1.AgentRunRequest          — Agent 执行请求
agent.v1.AgentConversationTurn    — Agent 对话轮次
agent.v1.ConversationState        — 对话状态
agent.v1.ConversationStep         — 对话步骤
agent.v1.ConversationSummary      — 对话摘要
agent.v1.ConversationPlan         — 对话计划
```

**工具调用**
```
agent.v1.ToolCall                 — 工具调用
agent.v1.ToolCallDelta            — 工具调用增量
agent.v1.ToolCallStartedUpdate    — 工具调用开始
agent.v1.ToolCallCompletedUpdate  — 工具调用完成
agent.v1.ToolCallDeltaUpdate      — 工具调用增量更新
agent.v1.PartialToolCallUpdate    — 部分工具调用更新
```

**模型调用**
```
agent.v1.ModelDetails             — 模型详情
agent.v1.RequestedModel           — 请求的模型
agent.v1.SubagentModelOverride    — 子Agent模型覆盖
```

**Agent 工具清单**
```
agent.v1.ReadToolCall             — 读取文件
agent.v1.EditToolCall             — 编辑文件
agent.v1.WriteToolCall            — 写入文件
agent.v1.DeleteToolCall           — 删除文件  
agent.v1.ShellToolCall            — Shell 执行
agent.v1.GrepToolCall             — 代码搜索
agent.v1.GlobToolCall             — 文件通配匹配
agent.v1.FetchToolCall            — HTTP 请求
agent.v1.WebSearchToolCall        — 网络搜索
agent.v1.WebFetchToolCall         — 网页抓取
agent.v1.ComputerUseToolCall      — 计算机使用(鼠标/键盘)
agent.v1.BlameByFilePathToolCall  — Git Blame
agent.v1.AskQuestionToolCall      — 询问用户
agent.v1.SendToUserToolCall       — 发送消息给用户
agent.v1.SendMessageToolCall      — 发送消息(外部)
agent.v1.SubagentToolCall         — 创建子Agent
agent.v1.ReflectToolCall          — Agent 反思
agent.v1.AwaitToolCall            — 等待任务
agent.v1.CreatePlanToolCall       — 创建计划
agent.v1.StartGrindPlanningToolCall — 开始Grind规划
agent.v1.StartGrindExecutionToolCall — 开始Grind执行
agent.v1.GenerateImageToolCall    — 生成图片
agent.v1.ReportBugToolCall        — 报告Bug
agent.v1.RecordScreenToolCall     — 录屏
agent.v1.McpToolCall              — MCP 工具调用
agent.v1.GetMcpToolsToolCall      — 获取 MCP 工具列表
agent.v1.ListMcpResourcesToolCall — 列出 MCP 资源
agent.v1.ReadMcpResourceToolCall  — 读取 MCP 资源
agent.v1.McpAuthToolCall          — MCP 认证
agent.v1.SwitchModeToolCall       — 切换模式
agent.v1.SetupVmEnvironmentToolCall — 设置 VM 环境
agent.v1.ReplaceEnvToolCall       — 替换环境变量
agent.v1.PrManagementToolCall     — PR 管理
agent.v1.CreatePrToolCall         — 创建 PR
agent.v1.UpdatePrToolCall         — 更新 PR
agent.v1.UpdatePrCodeTourToolCall — 更新 PR Code Tour
agent.v1.CommunicateUpdateToolCall — 沟通更新
agent.v1.EditPrLabelsToolCall     — 编辑 PR 标签
agent.v1.SendFinalSummaryToolCall — 发送最终摘要
agent.v1.RecordCiInvestigationFindingsToolCall — CI调查记录
agent.v1.SetActiveBranchToolCall  — 设置活动分支
agent.v1.ReadLintsToolCall        — 读取 Lint 结果
agent.v1.ReadTodosToolCall        — 读取 TODO
agent.v1.UpdateTodosToolCall      — 更新 TODO
agent.v1.SemSearchToolCall        — 语义搜索
agent.v1.WriteShellStdinToolCall  — 写入 Shell stdin
agent.v1.TaskToolCall             — 任务执行
agent.v1.ApplyAgentDiffToolCall   — 应用 Agent diff
```

**子Agent类型**
```
agent.v1.SubagentTypeUnspecified — 未指定
agent.v1.SubagentTypeBash        — Bash 执行
agent.v1.SubagentTypeShell       — Shell 交互
agent.v1.SubagentTypeExplore     — 代码探索
agent.v1.SubagentTypeDebug       — 调试
agent.v1.SubagentTypeBrowserUse  — 浏览器操作
agent.v1.SubagentTypeComputerUse — 计算机操作
agent.v1.SubagentTypeCursorGuide — Cursor 引导
agent.v1.SubagentTypeMediaReview — 媒体审查
agent.v1.SubagentTypeWatchVideo  — 观看视频
agent.v1.SubagentTypeVmSetupHelper — VM 设置
agent.v1.SubagentTypeCustom      — 自定义
```

**流式更新**
```
agent.v1.StepStartedUpdate       — 步骤开始
agent.v1.StepCompletedUpdate     — 步骤完成
agent.v1.TextDeltaUpdate         — 文本增量
agent.v1.ThinkingDeltaUpdate     — 思考增量
agent.v1.ThinkingCompletedUpdate — 思考完成
agent.v1.TokenDeltaUpdate        — Token 计数增量
agent.v1.TurnEndedUpdate         — 轮次结束
agent.v1.UserMessageAppendedUpdate — 用户消息追加
agent.v1.HeartbeatUpdate         — 心跳
agent.v1.SummaryStartedUpdate    — 摘要开始
agent.v1.SummaryCompletedUpdate  — 摘要完成
agent.v1.SummaryUpdate           — 摘要更新
```

---

## 五、认证头格式

### 5.1 Cursor 服务请求头

```javascript
// 所有发往 Cursor 服务器的请求头
{
  "Authorization": "Bearer <cursorAuth/accessToken>",
  "X-Cursor-Commit": "e48ee6102a199492b0c9964699bf011886708ba3",
  "X-Cursor-Version": "3.7.27"
}
```

### 5.2 Provider API 请求头

| Provider | 头格式 |
|----------|--------|
| Anthropic | `Authorization: Bearer sk-ant-...` |
| OpenAI | `Authorization: Bearer sk-...` |
| Cursor 自有 | `Authorization: Bearer {token或local-agent}` |
| GitHub | `Authorization: Bearer ghp_...` |
| AWS Bedrock | AWS Signature V4 |

### 5.3 默认 User-Agent

```javascript
function U5(userAgent) {
  return `Cursor/3.7.27`;  // 全版本号
}
```

---

## 六、中转反向代理实现要点

### 6.1 需要代理的 API

| 优先级 | API | 协议 | 劫持方式 |
|--------|-----|------|---------|
| P0 | `POST {baseUrl}/messages` | HTTP/JSON+SSE | 替换 baseUrl + apiKey |
| P0 | `POST {baseUrl}/chat/completions` | HTTP/JSON+SSE | 替换 baseUrl + apiKey |
| P1 | `GET {baseUrl}/models` | HTTP/JSON | 返回映射后的模型列表 |
| P1 | `POST {baseUrl}/model/{id}` | HTTP/JSON+SSE | ConnectRPC 代理 |
| P1 | `POST {baseUrl}/model/{id}/converse-stream` | HTTP/JSON+SSE | ConnectRPC 代理 |
| P2 | `POST {baseUrl}/model/{id}/invoke` | HTTP/JSON | Embedding 代理 |

### 6.2 核心替换逻辑

```python
# AE = Agent Executor, PROXY = Your Proxy
# 
# AE 请求:
#   POST {original_baseUrl}/{endpoint}
#   Authorization: Bearer {original_apiKey}
#
# 代理转换:
#   POST {your_proxy_url}/{endpoint}  
#   Authorization: Bearer {your_api_key}
#   X-Original-Provider: {original_baseUrl}  # 可选，用于路由
#
# 实现步骤:
# 1. 拦截 DNS: cursorvm-manager.com → 代理 IP
# 2. 或替换 product.json 中的 URL
# 3. 或修改 agent-exec 的 provider 配置
```

### 6.3 API 类型 vs 行为映射表

```
请求 apiType                 代理端需要的行为
─────────────────────────────────────────────────────────
anthropic_messages    → 转发到 Anthropic Messages API
openai_chat           → 转发到 OpenAI Chat Completions
responses             → 转发到 OpenAI Responses API  
openai_compatible     → 检查 endpoint 类型后转发
bedrock               → 转发到 AWS Bedrock
cursor 自有 (无apiType) → 转发到自有推理网关
```

### 6.4 关键检测点

AI 调用发生时，框架检测顺序：
1. `baseUrl.endsWith("/messages")` → 强制使用 anthropic_messages
2. 否则 `GET {baseUrl}/models` → 探测 API 类型
3. 根据 `api_types` 选择客户端适配器
4. 构造对应格式的请求体
5. 发送请求并处理 SSE 流

---

## 七、本地开发集群

本地开发模式在 `localhost:50051` 运行 gRPC 服务：

```javascript
// 集群配置
const CLUSTERS = {
  local: {
    managerUrl: "http://localhost:50051",   // gRPC
    httpProxyUrl: null,
    isLocal: true,
    class: null,
    label: "Local"
  }
};

// 本地模式 API Key 默认值
const LOCAL_API_KEY = "local-agent";
```

---

## 八、工具库依赖

| 包 | 用途 |
|----|------|
| `@connectrpc/*` | ConnectRPC 传输层 (gRPC 兼容) |
| `@bufbuild/protobuf` | Protocol Buffers 序列化 |
| `@modelcontextprotocol/sdk` | MCP SDK (Anthropic v1.25.1 + Cursor patch) |
| `@hono/node-server` + `hono` | 内部 HTTP 服务 |
| `express` + `express-rate-limit` | HTTP 框架 + 速率限制 |
| `@opentelemetry/*` (15+ 包) | 全链路追踪 |
| `@sentry/*` (6+ 包) | 错误追踪 |