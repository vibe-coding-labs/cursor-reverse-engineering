# Protobuf Schema 参考手册

## 一、StreamUnifiedChatRequest 完整 schema

```protobuf
message StreamUnifiedChatRequest {
  // 核心字段 (86 个)
  
  // === 对话 ===
  repeated ConversationMessage conversation = 1;
  optional string conversation_id = 24;
  optional string replying_to_request_id = 25;
  optional ConversationSummary conversation_summary = 33;
  
  // === 模型 ===
  optional ModelDetails model_details = 5;
  optional bool allow_model_fallbacks = 39;
  optional int32 number_of_times_shown_fallback_model_warning = 40;
  
  // === 模式 ===
  optional UnifiedMode unified_mode = 48;   // 枚举
  optional bool is_chat = 22;
  optional bool is_agentic = 31;
  optional bool is_spec_mode = 79;
  optional ThinkingLevel thinking_level = 51;
  
  // === 上下文 ===
  optional ExplicitContext explicit_context = 3;
  optional ConversationMessage project_context = 10;
  optional FileState current_file = 15;
  optional EnvironmentInfo environment_info = 29;
  optional string conversation_summary = 33;
  
  // === 工具 ===
  repeated string supported_tools = 34;
  repeated McpTool mcp_tools = 38;
  repeated string tools_requiring_accepted_return = 49;
  
  // === 风控/安全 ===
  optional bool is_headless = 44;
  optional bool force_is_not_dev = 68;
  
  // === 检索 ===
  repeated RankedContext additional_ranked_context = 20;
  optional bool allow_server_side_semantic_search = 80;
  
  // === 文件变更 ===
  repeated FileDiff diffs_for_compressing_files = 11;
  optional bool compress_edits = 12;
  repeated FileDiffHistory file_diff_histories = 18;
  repeated RecentEdit recent_edits = 16;
  
  // === 其他 ===
  optional bool allow_long_file_scan = 2;
  optional bool can_handle_filenames_after_language_ids = 4;
  optional string use_web = 8;
  repeated Quote quotes = 21;
  repeated LinterError linter_errors = 6;
  optional bool should_cache = 13;
  optional string context_bank_session_id = 41;
  optional string context_bank_version = 42;
  optional string context_bank_encryption_key = 43;
  optional int32 max_tokens = 53;
  optional bool force_summarization = 73;
}
```

### 枚举值

```protobuf
enum UnifiedMode {
  UNIFIED_MODE_UNSPECIFIED = 0;
  UNIFIED_MODE_CHAT = 1;       // 聊天模式
  UNIFIED_MODE_AGENT = 2;      // Agent 模式
  UNIFIED_MODE_EDIT = 3;       // 编辑模式
  UNIFIED_MODE_CUSTOM = 4;     // 自定义
  UNIFIED_MODE_PLAN = 5;       // 计划模式
  UNIFIED_MODE_DEBUG = 6;      // 调试模式
}

enum ThinkingLevel {
  THINKING_LEVEL_UNSPECIFIED = 0;
  THINKING_LEVEL_MEDIUM = 1;   // 中等思考
  THINKING_LEVEL_HIGH = 2;     // 深度思考
}
```

## 二、核心服务方法列表

### AuthService (aiserver.v1.AuthService)

| 方法 | 输入 | 输出 | 说明 |
|------|------|------|------|
| GetEmail | Empty | GetEmailResponse | 获取邮箱和注册类型 |
| GetUserMeta | Empty | GetUserMetaResponse | 获取用户元数据 |
| EmailValid | EmailValidRequest | EmailValidResponse | 邮箱验证 |
| DownloadUpdate | DownloadUpdateRequest | DownloadUpdateResponse | 下载更新 |
| MarkPrivacy | MarkPrivacyRequest | Empty | 标记隐私模式 |
| SwitchCmdKFraction | SwitchCmdKRequest | Empty | 切换 CmdK 比例 |

### ChatService (aiserver.v1.ChatService)

| 方法 | 类型 | 说明 |
|------|------|------|
| StreamUnifiedChat | ServerStreaming | 统一聊天（已废弃）|
| StreamUnifiedChatWithTools | ServerStreaming | 带工具的聊天 |
| StreamUnifiedChatWithToolsSSE | ServerStreaming | SSE 版 |
| StreamUnifiedChatWithToolsPoll | Unary | 轮询版 |

### DashboardService

| 方法 | 说明 |
|------|------|
| GetPlanInfo | 获取套餐信息 |
| GetCurrentPeriodUsage | 当前周期用量 |
| GetHardLimit | 硬限制查询 |
| GetTeams | 团队列表 |
| GetMe | 用户信息 |

## 三、请求包装格式

```protobuf
message StreamUnifiedChatRequestWithTools {
  oneof request {
    StreamUnifiedChatRequest stream_unified_chat_request = 1;
    ClientSideToolV2Result client_side_tool_v2_result = 2;
  }
}
```

## 四、ConnectRPC URL 映射

```
// JSON 格式
POST /aiserver.v1.{Service}/{Method}
Content-Type: application/connect+json
分帧: 0x00 + uint32(body长度) + JSON body

// SSE 流格式  
POST /aiserver.v1.{Service}/{Method}
Accept: text/event-stream

// 方法命名约定:
StreamXxx    → ServerStreaming (服务端流)
StreamXxxSSE → ServerStreaming (SSE 流)
StreamXxxPoll → Unary (短轮询)
Xxx          → Unary (单次请求)
```
