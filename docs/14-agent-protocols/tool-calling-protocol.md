# Cursor Agent Tool Calling 协议分析

## 概述
cursor-agent-exec (68MB) 内部定义了 **75 种工具调用相关的消息类型**。完整的 tool calling 生命周期：

```
Agent 推理 → 决定调用工具 → 发出 ToolCall → 执行工具 → 返回 ToolResult → Agent 继续
```

## 一、完整的工具列表 (50 个 ToolCall 类型)

### 文件操作 (5)
| 工具 | 功能 |
|------|------|
| `ReadToolCall` | 读取文件内容 |
| `EditToolCall` / `EditToolCallDelta` | 编辑文件（含流式增量） |
| `WriteToolCall` | 写入文件 |
| `DeleteToolCall` | 删除文件 |
| `ApplyAgentDiffToolCall` | 应用 Agent diff |

### 代码搜索 (5)
| 工具 | 功能 |
|------|------|
| `GrepToolCall` | 代码内容搜索 |
| `GlobToolCall` | 文件通配匹配 |
| `SemSearchToolCall` | 语义搜索 |
| `ReadLintsToolCall` | 读取 Lint 错误 |
| `ReadTodosToolCall` / `UpdateTodosToolCall` | TODO 管理 |

### Shell 执行 (4)
| 工具 | 功能 |
|------|------|
| `ShellToolCall` / `ShellToolCallDelta` | Shell 命令执行（含流式 stdout/stderr delta）|
| `ShellToolCallStdoutDelta` | Shell 输出增量 |
| `ShellToolCallStderrDelta` | Shell 错误增量 |
| `WriteShellStdinToolCall` | 写入 Shell 标准输入 |

### 网络 (3)
| 工具 | 功能 |
|------|------|
| `FetchToolCall` | HTTP 请求 |
| `WebSearchToolCall` | 网络搜索 |
| `WebFetchToolCall` | 网页抓取 |

### MCP (6)
| 工具 | 功能 |
|------|------|
| `McpToolCall` | MCP 工具调用 |
| `McpToolResult` / `McpToolResultContentItem` | MCP 工具结果 |
| `GetMcpToolsToolCall` | 获取 MCP 工具列表 |
| `ListMcpResourcesToolCall` / `ReadMcpResourceToolCall` | MCP 资源管理 |
| `McpAuthToolCall` | MCP 认证 |

### 子 Agent (7)
| 工具 | 功能 |
|------|------|
| `TaskToolCall` / `TaskToolCallDelta` / `TaskToolCallArgsProto` | 任务执行 |
| `SubagentToolCall` (通过 TaskToolCall) | 子 Agent 创建 |
| `AwaitToolCall` | 等待子任务完成 |
| `StartGrindPlanningToolCall` / `StartGrindExecutionToolCall` | Grind 规划/执行 |

### Git (4)
| 工具 | 功能 |
|------|------|
| `BlameByFilePathToolCall` | Git Blame |
| `SetActiveBranchToolCall` | 切换分支 |
| `PrManagementToolCall` | PR 管理 |
| `CreatePlanToolCall` / `EditPrLabelsToolCall` / `UpdatePrCodeTourToolCall` | PR 标签/Code Tour |

### AI 辅助 (6)
| 工具 | 功能 |
|------|------|
| `AskQuestionToolCall` | 询问用户 |
| `SendToUserToolCall` | 发送消息给用户 |
| `SendMessageToolCall` / `CommunicateUpdateToolCall` | 外部通信 |
| `ReflectToolCall` | Agent 自我反思 |
| `GenerateImageToolCall` | 生成图片 |

### 浏览器/计算机 (2)
| 工具 | 功能 |
|------|------|
| `ComputerUseToolCall` | 计算机使用（鼠标/键盘） |
| `RecordScreenToolCall` | 录屏 |

### 调试/其他 (8)
| 工具 | 功能 |
|------|------|
| `ReportBugToolCall` / `ReportBugfixResultsToolCall` | Bug 报告 |
| `RecordCiInvestigationFindingsToolCall` | CI 调查 |
| `WebSearchToolCall` | 网络搜索 |
| `SwitchModeToolCall` | 切换 Agent 模式 |
| `SetupVmEnvironmentToolCall` | VM 环境设置 |
| `ReplaceEnvToolCall` / `ReplaceEnvToolDelta` | 环境变量替换 |
| `SendFinalSummaryToolCall` | 发送最终摘要 |
| `AiAttributionToolCall` | AI 归属分析 |
| `SetActiveBranchToolCall` | 设置 Git 分支 |

## 二、ToolCall 线格式

所有工具调用通过 `StreamUnifiedChatWithTools` 请求中的 `conversation` 消息传递。

### 工具调用在对话中的格式

```json
{
  "conversation": [
    {
      "role": "assistant",
      "content": [
        {"type": "text", "text": "I'll search for that..."},
        {
          "type": "tool_use",
          "id": "toolu_abc123",
          "name": "grep",
          "input": {
            "pattern": "function foo",
            "path": "src/"
          }
        }
      ]
    },
    {
      "role": "user",
      "content": [
        {
          "type": "tool_result",
          "tool_use_id": "toolu_abc123",
          "content": "搜索结果..."
        }
      ]
    }
  ]
}
```

### 工具调用的 Protobuf 结构

```protobuf
message ToolCall {
  // 所有工具调用都包装在这个统一消息中
  // oneof 区分具体工具类型
  
  // 每个工具 call_msg 都有:
  string tool_call_id = 1;
  // 以及对应的 Args 消息
  
  // 工具结果消息包含:
  string tool_call_id = 1;  // 关联到对应的 tool_call
  // 结果数据...
}

// ShellToolCall 示例
message ShellToolCall {
  args: ShellArgs
  result: ShellResult
}

message ShellArgs {
  string command = 1;  // 要执行的命令
}

message ShellResult {
  // 执行结果，含 stdout/stderr
}
```

## 三、调用流程

```
Agent 决定操作
    ↓
LLM 返回 tool_use 消息块
    ↓
客户端执行工具（读文件/执行命令等）
    ↓
工具结果以 tool_result 发回
    ↓
Agent 继续推理
    ↓
重复或完成
```

### 流式更新类型

```protobuf
ToolCallStartedUpdate     // 工具调用开始
ToolCallDeltaUpdate       // 增量更新  
ToolCallCompletedUpdate   // 工具调用完成

PartialToolCallUpdate {
  string call_id = 1;
  string args_text_delta = 2;  // 参数增量
  ToolCallModeration moderation = 3;
}
```
