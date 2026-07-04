# Cursor 逆向分析 — 第八轮报告：cursor-sandbox Rust 沙箱系统

> 分析时间: 2026-06-22 16:14 GMT+8
> 来源: cursorsandbox (4.6MB Rust ELF) + AppArmor 配置

---

## 一、cursor-sandbox 架构总览

cursor-sandbox (4.6MB) 是一个 **Rust 编写的多后端沙箱系统**，用于隔离 Agent 执行的 shell 命令。位于 `resources/app/resources/helpers/cursorsandbox`。

### 技术栈

```
├── Linux Landlock LSM (V1-V3)   → 文件系统权限
├── Bubblewrap                    → 用户命名空间隔离 (后备)
├── seccomp-bpf                   → 系统调用过滤
├── AppArmor                      → 强制访问控制
├── User Namespaces               → UID/GID 映射
├── Network Namespace             → 网络隔离
├── Mount Namespace               → 挂载隔离
├── PID Namespace                 → 进程隔离
└── tmpfs                         → 内存文件系统
```

---

## 二、运行模式

### 2.1 子命令

| 命令 | 用途 |
|------|------|
| `--run-proxy` | 仅代理模式（内部），启动 HTTP + SOCKS 代理 |
| `--run-socket-forwarder` | Socket 转发器（运行在沙箱内） |
| `--run-linux-inner` | Bubblewrap 内部辅助阶段 |
| `--preflight-only` | 沙箱预检（exit 0=支持, 2=不支持） |
| 默认 | 执行命令并应用沙箱 |

### 2.2 执行流

```
1. Preflight check
   ├── Landlock V3 supported? → 文件系统可写限制
   ├── Bubblewrap available? → 用户命名空间后备
   └── AppArmor profile loaded?

2. Namespace creation
   ├── User namespace (UID/GID mapping)
   ├── Mount namespace (private tmpfs)
   ├── PID namespace (process isolation)
   └── Network namespace (optional: isolated)

3. Filesystem restrictions (Landlock V3)
   ├── workspace_readonly: 只读工作区
   ├── workspace_readwrite: 读写工作区  
   ├── additionalReadonlyPaths
   ├── additionalReadwritePaths
   ├── disableTmpWrite (禁用 /tmp 写入)
   └── blockGitWrite (阻止 Git 写操作)

4. Network proxy
   ├── HTTP proxy on localhost:random_port
   ├── SOCKS proxy on Unix socket
   ├── Allow/deny rule matching
   └── Decision logging

5. Socket isolation
   ├── Scrub SSH_AUTH_SOCK, DBUS_SESSION_BUS_ADDRESS from env
   ├── XDG_RUNTIME_DIR, WAYLAND_DISPLAY hiding
   └── Hide sensitive sockets with empty tmpfs

6. Seccomp filter application
7. Execute target command
```

---

## 三、沙箱策略 (SandboxPolicy)

### 3.1 策略结构

```rust
struct SandboxPolicy {
    variant: PolicyVariant,       // WorkspaceReadonly | WorkspaceReadwrite
    workspace_dirs: Vec<Path>,    // 工作区目录
    additional_readonly_paths: Vec<Path>,  // 额外只读路径
    additional_readwrite_paths: Vec<Path>, // 额外读写路径  
    network_access: NetworkPolicy,         // 网络策略
    disable_tmp_write: bool,      // 禁用 /tmp 写入
    block_git_write: bool,        // 阻止 Git 写入
    ignore_mapping: bool,        // 忽略路径映射
}
```

### 3.2 策略变体

| 变体 | 元素数 | 说明 |
|------|:-----:|------|
| `WorkspaceReadwrite` | 7 | 读写工作区（Agent编辑时使用） |
| `WorkspaceReadonly` | 4 | 只读工作区（Agent只读分析时使用） |

### 3.3 网络策略 (NetworkPolicy)

```rust
struct NetworkPolicy {
    default_action: Action,    // default_allow | default_deny
    rules: Vec<Rule>,          // allow_list | deny_list
    pattern: String,           // 域名/URL 通配符
    protocol: Protocol,        // http, https, tcp
}
```

规则匹配：域名 → hash → resolved_ips → matched_rule
决策日志：`decision.log` — 记录 `label`, `url`, `host_hash`, `resolved_ips`, `matched_rule`, `matched_rule_hash`

---

## 四、Landlock LSM 集成

### 4.1 Landlock 版本探测

```rust
// V1 = basic file read/write
// V2 = file read/write + file metadata
// V3 = V2 + filesystem-level restrictions
kernel_abi = landlock::probe();
match kernel_abi {
    V3 => apply_write_restrictions(),
    V1|V2 => log_warning("Landlock V3 not supported"),
    NotEnforced => CRITICAL("Landlock NOT enforced!"),
}
```

### 4.2 文件系统规则

```
sandbox: landlock: adding write-allow rule for <path> (is_dir=<>, access=<>)
sandbox: landlock: successfully added rule for <path>
sandbox: landlock: skipping optional rule for <path>
Failed to add rule for <path>
CRITICAL: Failed to add optional rule for <path>
```

### 4.3 环境变量

| 变量 | 值 |
|------|-----|
| `CURSOR_SANDBOX` | `native` / `bubblewrap` |
| `CURSOR_SANDBOX_LANDLOCK_STATUS` | `FullyEnforced` / `PartiallyEnforced` / `NotEnforced` |
| `CURSOR_SANDBOX_SESSION_ID` | UUID 标识沙箱会话 |
| `CURSOR_SANDBOX_MOUNT_CAP` | 挂载容量 |

---

## 五、代理服务器

沙箱内运行一个 **HTTP + SOCKS 代理**用于网络隔离：

### HTTP 代理
```
proxy server starting (session_id=<>, allow_rules=<>, deny_rules=<>)
/tmp/sandbox-proxy-http-<id>.sock
proxy server ready (http_port=<>, socks_port=<>)
127.0.0.1:<port> (HTTP), forwarding to <remote> (SOCKS)
```

### SOCKS 代理  
```
/tmp/sandbox-proxy-socks-proxy-<id>.sock
```

### 网络决策流
```
Request → URL → host lookup → hash → resolved_ips
  → matched_rule check (allow_list / deny_list)
  → decision.log: {label, url, host_hash, matched_rule, hash}
  → ALLOW or DENY
```

---

## 六、三种 AppArmor 配置文件

| Profile | 路径 | 用途 |
|---------|------|------|
| `cursor_sandbox` | `/usr/share/cursor/resources/app/resources/helpers/cursorsandbox` | 本地沙箱 |
| `cursor_sandbox_remote` | `/home/*/.cursor-server/bin/*/*/resources/helpers/cursorsandbox` | 远程沙箱 |
| `cursor_sandbox_agent_cli` | `/home/*/.local/share/cursor-agent/versions/*/cursorsandbox` | Agent CLI 沙箱 |

### AppArmor 权限

```apparmor
capability sys_admin,    # 命名空间操作必需
capability net_admin,    # 网络过滤必需
capability chown,        # UID 映射
capability setuid,       # UID 映射
capability setgid,       # GID 映射
capability setpcap,      # seccomp 必需
mount, remount, umount,  # tmpfs 挂载
network: unix, inet, inet6, netlink raw  # 各种网络
signal (receive) peer=unconfined  # 允许父进程发信号
```

---

## 七、Sandbox 与 Agent 集成

从 cursor-agent-exec 日志确认集成：

```
[shell-exec:sandbox] [isSandboxHelperSupported] Starting sandbox support check...
[shell-exec:sandbox] Binary path exists: true
[shell-exec:sandbox] Preflight succeeded, sandbox supported!
[ExtHostShellExec] Sandbox support detected: true
```

每个 Agent shell 命令都通过 cursorsandbox 执行，确保：

1. Agent 无法写入工作区外的文件
2. Agent 的网络访问被 HTTP/SOCKS 代理过滤和控制
3. Agent 无法访问 SSH_AUTH_SOCK 等敏感 socket
4. Agent 的 /dev 是隔离的（仅 /dev/null, /dev/zero, /dev/random, /dev/urandom, /dev/shm）
5. /etc/passwd, /etc/hosts, /etc/resolv.conf 被绑定挂载为只读
6. PID 1 在沙箱内运行（僵尸进程回收）

---

## 八、多后端支持

| 后端 | 探测方式 | 回退 |
|:----|:---------|:-----|
| **Native** (`--run-linux-inner`) | 直接使用 Landlock + seccomp + namespace | 默认 |
| **Bubblewrap** (`bwrap`) | `which bwrap` | Native 不可用时回退 |
| **仅预检** (`--preflight-only`) | exit 0/2 | 检查仅用 |

---

## 本轮完成

- [x] cursor-sandbox 完整架构分析（4.6MB Rust）
- [x] 6 种隔离技术全解析（Landlock, Bubblewrap, seccomp, AppArmor, Namespaces, tmpfs）
- [x] 沙箱策略数据结构和变体
- [x] 网络代理（HTTP + SOCKS）+ 决策日志系统
- [x] AppArmor 3 配置文件
- [x] Sandbox 与 Agent 集成方式

docs/15-core-files 没有覆盖这个文件，这是新发现。
