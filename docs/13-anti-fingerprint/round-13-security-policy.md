# Cursor 风控体系 — 安全策略与访问控制 (第13轮)

## 一、SandboxPolicy 完整结构

```protobuf
message SandboxPolicy {
  repeated string allowed_models = 1;
  repeated string blocked_models = 2;
  AutoRunControls auto_run_controls = 3;
  bool dot_cursor_protection = 4;                 // .cursor 目录保护
  repeated string browser_origin_allowlist = 5;
  repeated string network_denylist = 6;
  repeated string network_allowlist = 7;
  repeated string cloud_agent_egress_allowlist = 8;  // Cloud Agent 出口
  repeated string remote_permissions_file_paths = 9;
  string local_permissions_file_path = 10;
}
```

## 二、自动运行控制 (AutoRunControls)

```protobuf
message AutoRunControls {
  bool enabled = 1;                        // 是否启用
  repeated string allowed = 2;             // 允许自动运行的命令
  repeated string blocked = 3;             // 阻止的自动运行命令
  bool disable_mcp_auto_run = 4;           // 禁用 MCP 自动运行
  bool delete_file_protection = 5;         // 删除文件保护
  bool enable_run_everything = 6;          // 启用"运行全部"
  bool browser_protection = 7;             // 浏览器保护
  repeated string mcp_tool_allowlist = 8;  // MCP 工具白名单
}
```

## 三、Cloud Agent Egress 控制

```javascript
// 云代理出口白名单
"cloud_agent_egress_allowlist": string[]  // Agent 可访问的外部域名
"mirror_sandbox_allowlist_for_egress": boolean  // 镜像沙箱白名单到出口
```

Cloud Agent 在云端 VM 中运行时，只能访问白名单中的外部服务。

## 四、Statsig 控制的安全策略开关

| 开关 | 默认值 | 功能 |
|------|:------:|------|
| `smart_allowlist_required` | false | 智能白名单要求 |
| `command_blocklist_feature` | false | 命令黑名单 |
| `enable_pty_auth` | true | PTY 认证 |
| `sandbox_mcp_servers` | false | MCP 服务器沙箱 |
| `sandbox_default_network_allowlist` | [] | 默认网络白名单 |
| `mcp_allowlists` | true | MCP 白名单 |
| `mcp_network_allowlist` | false | MCP 网络白名单 |
| `mcp_access_network_allowlist` | false | MCP 访问网络白名单 |
| `mcp_admin_only_servers` | false | 仅管理员 MCP 服务器 |
| `mcp_admin_only_tools` | false | 仅管理员 MCP 工具 |
| `admin_network_controls` | true | 管理员网络控制 |
| `allowlist_toggle_menu` | false | 白名单切换菜单 |
| `allowlist_in_ask_every_time_mode` | false | 每次询问白名单 |

## 五、13个安全策略维度总览

| 维度 | 控制点 | 影响 |
|------|--------|------|
| 模型访问 | `allowed_models` / `blocked_models` | 限制可用 AI 模型 |
| 命令执行 | `command_blocklist` / `auto_run_controls` | Shell 命令黑/白名单 |
| 网络访问 | `network_allowlist` / `network_denylist` | 限制 Agent 网络请求 |
| 云出口 | `cloud_agent_egress_allowlist` | 限制 Cloud VM 出口 |
| 浏览器 | `browser_origin_allowlist` | 浏览器自动化来源 |
| 文件保护 | `dot_cursor_protection` | .cursor 目录保护 |
| MCP | `mcp_tool_allowlist` | MCP 工具白名单 |
| PTY | `enable_pty_auth` | 终端执行认证 |
| 团队 | `admin_network_controls` | 企业管理员控制 |
| 沙箱 | `sandbox_policy` | 完整沙箱策略 |
| 重试 | `retry_interceptor_config` | 重试/退避策略 |
| 速率 | 令牌桶 + 断路器 | 客户端自限流 |
| 错误 | 56 个错误码 | 风控响应 |

## 第13轮新增发现汇总

| 发现 | 重要度 |
|------|:------:|
| **SandboxPolicy 10 字段完整结构** | ⭐⭐⭐ 沙箱模型 |
| **AutoRunControls 8 字段** | ⭐⭐⭐ 命令自动运行控制 |
| **Cloud Agent Egress 白名单** | ⭐⭐ VM 出口控制 |
| **13 个安全相关 Statsig 开关** | ⭐⭐⭐ 安全策略可动态配置 |
| **13 个安全维度总览** | ⭐⭐⭐ |

*第13轮分析，2026-06-16*
*覆盖: 沙箱策略、自动运行控制、出口白名单、13个安全维度*
