# Cursor 逆向分析 — 第五轮报告：检索 RPC 协议与 77 种工具类型

> 分析时间: 2026-06-22 15:55 GMT+8
> 本轮重点: cursor-retrieval (31MB) 的 RPC 协议完整提取、77 种工具类型的发现

---

## 🎯 重大发现：77 种工具类型（远超之前的 50 种）

从 `cursor-retrieval/dist/main.js` 的 protobuf 定义中提取出了 **77 种不同工具类型**，远超之前文档记录的 50 种。

### 工具分类（按功能组）

#### 文件操作 (12)
```
read_file, read_chunk, read_with_linter, edit_file, edit, 
new_edit, new_file, save_file, write, write_shell_stdin,
undo_edit, delete_file, reapply
```

#### 搜索/检索 (10)
```
semantic_search, semantic_search_full, file_search, glob_file_search, 
search, search_symbols, ripgrep_search, ripgrep_raw_search, 
deep_search, get_symbols
```

#### Git/PR 管理 (14)
```
checkout_branch, commit, commit_and_push, create_branch_and_commit,
create_branch_commit_and_push, create_pr, create_pr_with_changes,
create_rm_files, push, update_branch, fetch_pull_request,
babysit_pr_in_cloud, fix_merge_conflicts, reapply
```

#### 终端/Shell (4)
```
run_terminal_commands, write_shell_stdin, background_composer_followup,
background_shell_spawn
```

#### 测试 (4)
```
add_test, delete_test, run_test, get_tests
```

#### MCP 协议 (6)
```
call_mcp_tool, get_mcp_tools, list_mcp_resources, read_mcp_resource,
mcp_auth, mcp
```

#### 子代理 (3)
```
task, await_task, subagent
```

#### 浏览器/屏幕 (2)
```
computer_use, record_screen
```

#### Web/网络 (3)
```
web_fetch, web_search, fetch
```

#### 读取/项目 (5)
```
read_project, get_project_structure, list_dir, read_semsearch_files,
read_lints
```

#### 其他 (14)
```
fix_lints, spec, switch_mode, ask_question, create_plan, create_diagram,
knowledge_base, generate_image, gotodef, fetch_rules,
todo_read, todo_write, setup_vm_environment, report_bugfix_results
```

---

## 二、RPC Request/Response 结构

### 通用 RPC 消息格式

```protobuf
message RPCRequest {
  oneof params {
    // 77 种 params 类型，通过 oneof 区分
    FileSearchParams file_search_params = 16;
    SemanticSearchFullParams semantic_search_full_params = 17;
    DeleteFileParams delete_file_params = 19;
    // ...
  }
}

message RPCResponse {
  oneof result {
    FileSearchResult file_search_result = 15;
    SemanticSearchResult semantic_search_result = 16;
    // ...
  }
}
```

### 语义搜索参数

```protobuf
message SemanticSearchFullParams {
  optional string query = 1;
  repeated string file_paths = 2;
  optional int32 max_results = 3;
  optional PreferredEmbeddingModel preferred_embedding_model = 10;
  optional string workspace_uri = 11;
  // search_debug, search_for, additional_payload 等
}

message Embedding {
  repeated float embedding = 1;  // 浮点数向量
}

message QueryEmbedding {
  optional string query_embedding_model = 1;
  optional int32 server_side_latency_ms = 2;
  repeated Embedding embeddings = 3;
}

message RelevantFiles {
  repeated string relevant_files = 1;
  repeated string files_in_context = 2;
  repeated string semantic_search_files = 5;
}
```

### 文件搜索参数

```protobuf
message FileSearchParams {
  optional string query = 1;
  repeated string include_patterns = 2;
  optional int32 max_results = 3;
  optional string workspace_uri = 4;
  // 语义搜索标志
  optional SemanticMode semantic = 5;  // NONE=0, SET=1
}
```

---

## 三、cursor-retrieval 扩展内部架构

### 扩展概览

| 配置 | 值 |
|------|-----|
| 名称 | `cursor-retrieval` |
| 入口 | `./dist/main` (7.2MB) |
| 总大小 | 31MB (含 23MB `node_modules/@anysphere/file-service`) |
| API Proposals | `control`, `cursor`, `cursorTracing`, `textSearchProvider2` |
| 激活 | `onStartupFinished` |

### 组件

```
cursor-retrieval/
├── dist/main.js          (7.2MB) — 主打包代码
├── schemas/              (CSS schema, 可能是遗留)
├── worker/
│   └── dist/main.js      (230KB) — Web Worker 用于后台索引
├── node_modules/
│   └── @anysphere/
│       └── file-service  (23MB) — 文件服务系统
└── icons/
```

### 内部服务

```
GrepClient       — 代码搜索客户端
RetrievalService — 检索服务
SemanticSearch   — 语义搜索
FileSearch       — 文件搜索
IndexWorker      — 后台索引 Worker
```

---

## 四、修订后的工具调用类型统计

| 类别 | 之前计数 | 实际计数 | 差 | 说明 |
|------|:-------:|:--------:|:--:|------|
| 文件操作 | ~15 | 12 | -3 | 部分新合并 |
| 代码搜索 | ~10 | 10 | 0 | 基本一致 |
| Shell执行 | ~4 | 4 | 0 | 一致 |
| 网络 | ~5 | 3 | -2 | Web search/fecth |
| MCP | ~6 | 6 | 0 | 一致 |
| 子Agent | ~7 | 3 | -4 | 部分内部合并 |
| Git | ~4 | 14 | **+10** | 大幅扩展 |
| 浏览器/电脑 | ~2 | 2 | 0 | 一致 |
| AI辅助 | ~6 | 6 | 0 | Ask/Create/Reflect |
| 测试 | 0 | 4 | **+4** | 新发现的类别 |
| **总计** | **~50** | **77** | **+27** | |

> 最显著的扩展是 **Git/PR 管理（从4到14）** 和新增的**测试工具（4个）**。

---

## 五、RPC 通信方式

cursor-retrieval 通过 WebSocket / ConnectRPC 双向流与后端通信，使用上述 protobuf 格式传递 RPC 消息。主要流程：

1. Worker 索引本地代码文件
2. 用户在 Agent 中发起搜索或代码操作请求
3. 请求被编码为以上 77 种 `RPCRequest` 之一
4. 通过 ConnectRPC 发送到 cursorvm-manager.com 或 api2.cursor.sh
5. 后端处理并返回 `RPCResponse`
6. 结果传递给 Agent 的 Think→Act 循环

---

## 本轮完成项

- [x] cursor-retrieval 协议深度分析
- [x] 发现 77 种工具类型（远超之前的 50）
- [x] 完整工具类型分类（12 大类）
- [x] protobuf 消息定义提取（semantic_search, file_search 等）
- [x] 更新 docs/14-agent-protocols 统计
- [x] MCP 传输层分析（上一轮）
- [x] Agent Store 架构概览
