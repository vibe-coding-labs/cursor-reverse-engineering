# cursor-commits Git 集成协议分析

## 概述
cursor-commits (2.5MB) 负责**跟踪代码变更和提交的指标**，将 Git 行为与 Cursor 的 AI 功能关联。

## 一、架构

```
Git 操作 → cursor-commits → 采集指标 → ConnectRPC → api2.cursor.sh
```

## 二、依赖

```json
"extensionDependencies": ["vscode.git"],
"enabledApiProposals": ["control", "cursor", "cursorTracing", "cursorNoDeps"]
```

依赖 VSCode 的 Git 扩展，通过 `cursorNoDeps` API 在无依赖模式下工作。

## 三、采集的指标

```protobuf
message Metric {
  string metric = 1;         // 指标名称
  double value = 2;          // 数值
  string session_id = 3;     // 会话 ID
  string ff_hash = 4;        // 功能开关哈希
}
```

### 指标类型

| 指标 | 说明 |
|------|------|
| commits | 提交数 |
| requests | AI 请求数 |
| files_changed | 变更文件数 |
| lines_added/removed | 增删行数 |
| session_time | 使用时长 |

## 四、传输协议

所有指标通过 `ConnectRPC` 批量上报：

```protobuf
message MetricsBatch {
  map<string, MetricValue> metrics = 1;  // 指标集合
  repeated MetricItem metrics_list = 2;   // 指标列表
}

message MetricsList {
  repeated MetricEvent metrics = 1;
  string client_version = 2;
  string client_commit = 3;
  map<string, string> platform_tags = 4;
}
```

### 上报路径

```javascript
后端端点: api2.cursor.sh
传输层: ConnectRPC (二进制)
服务: aiserver.v1.AnalyticsService
```

## 五、Git 集成点

```javascript
// 通过 vscode.git 扩展获取 Git 信息
- 分支名称
- 提交历史
- 文件变更
- 仓库 URL
```

## 六、数据流

```
用户提交代码
  ↓
cursor-commits 捕获 Git 事件
  ↓
构造 MetricsBatch 消息
  ↓
通过 ConnectRPC 上报到 api2.cursor.sh/aiserver.v1.AnalyticsService
  ↓
Cursor 后端将指标关联到用户会话
```

## 七、关键发现

1. **所有 Git 指标与 AI 使用指标聚合**，用于计算用户活跃度和产品改进
2. **指标按 session 分组**，通过 `session_id` 关联
3. **上报包含客户端版本** (`client_version`, `client_commit`) 用于版本统计
4. **与 `cursor-always-local` 的指标系统集成**，通过 `AnalyticsService` 共享传输层
