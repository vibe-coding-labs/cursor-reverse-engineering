# cursor-retrieval 检索协议分析

## 概述
cursor-retrieval (31MB) 是 Cursor 的代码智能检索引擎。它提供**语义搜索、代码检索、上下文检索**功能。

## 一、通信协议

### 后端端点
通过 ConnectRPC 与 `api2.cursor.sh` / `api3.cursor.sh` 通信：

```javascript
baseUrl 选择逻辑:
- 主要: api2.cursor.sh
- 遥测: api3.cursor.sh
- ConnectRPC 二进制格式 + HTTP/2
```

### 核心 RPC 服务
从代码提取的 retrieval 相关 RPC：

```protobuf
service RetrievalService {
  // 语义搜索
  rpc Search(SearchRequest) returns (SearchResponse);
  
  // 获取相关代码块
  rpc GetRelevantChunks(GetRelevantChunksRequest) returns (GetRelevantChunksResponse);
  
  // 索引管理
  rpc IndexFile(IndexFileRequest) returns (IndexFileResponse);
  
  // 文件同步
  rpc SyncFile(SyncFileRequest) returns (SyncFileResponse);
}
```

## 二、检索机制

### 2.1 检索类型

| 类型 | 说明 |
|------|------|
| 语义搜索 | 基于 embedding 的代码语义匹配 |
| 关键词搜索 | 代码内容关键字匹配 |
| 文件结构搜索 | 文件名/路径匹配 |
| 混合搜索 | 以上组合 |

### 2.2 代码块结构

```protobuf
message Chunk {
  string chunk_id = 1;
  string relative_workspace_path = 2;  // 文件路径
  int32 chunk_index = 3;               // 在文件中的位置
  string chunk_contents = 4;           // 内容
  int32 start_line = 5;                // 起始行号
  int32 end_line = 6;                  // 结束行号
  string description = 7;              // 描述
  bool is_compressed = 8;              // 是否压缩
  bool chunk_is_from_last_user_message = 9;
}

message GetRelevantChunksResponse {
  repeated Chunk code_blocks = 1;       // 相关代码块
  string chain_of_thought_stream = 2;   // 推理链流
}
```

### 2.3 查询参数

```protobuf
message SearchRequest {
  string query = 1;                    // 搜索查询
  repeated string file_paths = 2;      // 限定文件路径
  int32 max_results = 3;               // 最大结果数
  string repo = 4;                     // 仓库
  SearchType type = 5;                 // 搜索类型
}
```

## 三、数据流

```
用户提问
  ↓
Agent 需要代码上下文
  ↓
调用 GetRelevantChunks (RPC)
  ↓
发送: 当前文件、光标位置、查询意图
  ↓
接收: 相关代码块列表（含路径、行号、内容）
  ↓
Agent 将代码块作为对话上下文发送给 LLM
  ↓
LLM 生成回答
```

## 四、关键发现

1. **检索结果格式化为对话上下文** — 代码块被包装为 `SelectedContext` 消息，随 `StreamUnifiedChatRequest` 发送
2. **文件变更自动触发重新索引** — `filesync` 模块监控文件变更
3. **chunk 包含完整位置信息** — 支持精确定位
