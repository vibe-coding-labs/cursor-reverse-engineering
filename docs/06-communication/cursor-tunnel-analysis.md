# Cursor Tunnel 通信机制分析

## 概述

`cursor-tunnel` 和 `code-tunnel` 是 Cursor 3.7 的通信核心组件，均为 **Rust** 编写的独立二进制程序（各19MB），负责远程开发、SSH隧道和服务器代理功能。

## 二进制信息

| 文件 | 路径 | 大小 | 类型 |
|------|------|------|------|
| cursor-tunnel | `bin/cursor-tunnel` | 19MB | Rust ELF x86_64 |
| code-tunnel | `bin/code-tunnel` | 19MB | Rust ELF x86_64 |
| cursor CLI | `bin/cursor` | 6KB | Shell脚本 |
| code-tunnel CLI | `bin/code-tunnel` | 19MB | Rust ELF (同cursor-tunnel) |

## 源码追踪

通过strings分析发现Rust编译器路径：

### Cursor 构建路径
```
/home/runner/_work/everysphere/everysphere/_work/1/s/vscode/cli/src/
```
包含源文件：
- `auth.rs` — 认证模块
- `commands/tunnels.rs` — 隧道命令
- `commands/update.rs` — 更新命令
- `tunnels/code_server.rs` — 代码服务器管理
- `tunnels/dev_tunnels.rs` — 开发隧道
- `tunnels/control_server.rs` — 控制服务器
- `tunnels/port_forwarder.rs` — 端口转发
- `tunnels/local_forwarding.rs` — 本地转发
- `tunnels/protocol.rs` — 协议定义
- `tunnels/server_bridge.rs` — 服务器桥接
- `tunnels/server_multiplexer.rs` — 服务器多路复用
- `tunnels/service_linux.rs` — Linux服务管理
- `update_service.rs` — 更新服务
- `state.rs` — 状态管理
- `singleton.rs` — 单例模式
- `json_rpc.rs` — JSON RPC
- `msgpack_rpc.rs` — MessagePack RPC
- `util/http.rs` — HTTP工具
- `util/prereqs.rs` — 系统前置检查
- `util/zipper.rs` — ZIP解压
- `util/sync.rs` — 同步工具

### 依赖库
```
vscode-russh (SSH实现) — fd4f608 版本
dev-tunnels (隧道协议) — 8cae9b2 版本
reqwest 0.11.27 (HTTP客户端)
tokio-tungstenite 0.20.1 (WebSocket)
tungstenite 0.20.1 (WebSocket核心)
tokio (异步运行时)
```

### 构建CI
```
everysphere — Anysphere内部CI系统名称
```

## OAuth 认证机制

### 双认证提供商

#### 1. Microsoft 认证 (Azure AD)
```
OAuth端点:
- https://login.microsoftonline.com/organizations/oauth2/v2.0/devicecode
- https://login.microsoftonline.com/organizations/oauth2/v2.0/token

OAuth配置:
- client_id: aebc6443-996d-45c2-90f0-388ff96faa56
- scope: offline_access+profile+openid+read:user+read:org
```

#### 2. GitHub 认证
```
OAuth端点:
- https://github.com/login/device/code
- https://github.com/login/oauth/access_token
- https://api.github.com/user (令牌验证)

OAuth配置:
- client_id: 01ab8ac9400c4e429b23
- User-Agent: Cursor
```

### 令牌管理
```
环境变量:
- VSCODE_CLI_ACCESS_TOKEN
- VSCODE_CLI_REFRESH_TOKEN
- VSCODE_CLI_USE_FILE_KEYCHAIN
- VSCODE_CLI_DISABLE_KEYCHAIN_ENCRYPT
- VSCODE_CLI_NONINTERACTIVE

存储方式:
1. 系统密钥环 (keyring)
2. 文件回退存储 (file keychain)
3. 令牌刷新: grant_type=refresh_token&refresh_token=<token>
```

### 设备授权码流程
```
用户 → 显示设备码 → 浏览器登录 → 轮询令牌 → 存储令牌
```

## 隧道协议架构

### 隧道端点模型
```
TunnelEndpoint {
    connectionMode: enum { ... },
    hostId: String,
    hostPublicKeys: [...],
    portUriFormat: String,
    tunnelUri: String,
    portSshCommandFormat: String,
    sshGatewayPublicKey: String,
    hostRelayUri: String,
    clientRelayUri: String,
}

Tunnel {
    clusterId: String,
    domain: String,
    accessTokens: [...],
    accessControl: {...},
    endpoints: [...],
    ports: [...],
    created: DateTime,
    expiration: DateTime,
}

TunnelPort {
    portNumber: u16,
    isDefault: bool,
    sshUser: String,
    portForwardingUris: [...],
    inspectionUri: String,
    ...
}
```

### 连接协议栈
```
用户端                    Cursor服务器                  远程机器
  |                          |                            |
  |--- WebSocket (WSS) ---->|                            |
  |                         |--- SSH Tunnel ------------>|
  |                         |    (russh实现)              |
  |                         |                            |
  |<--- 数据流双向转发 -----|----------------------------|
  
WebSocket传输:
- tokio-tungstenite 0.20.1
- 连接保持: ping/pong 心跳检测
- 关闭原因: CloseNormal, PolicyRestart, TlsLibraryBad, ...

SSH传输 (russh):
- 密钥交换: diffie-hellman-group14-sha256, group1, group14
- 主机密钥: ssh-rsa, ssh-ed25519, rsa-sha2-256/512
- 加密: aes256-ctr, aes192-ctr, aes128-ctr
- MAC: hmac-sha2-256/512-etm@openssh.com
```

### 中继隧道连接流程
```
1. 创建隧道 → 注册到中继 → 获取 relay URI
2. 主机连接 → WebSocket → 建立 host relay session
3. 客户端连接 → WebSocket → 认证 → 数据转发
4. 保持连接 → 定时 ping pong → 检测断开

连接令牌系统:
- 服务器发行 challenge token
- 客户端验证 challenge
- 定期刷新 access token
- 失效则重新连接
```

## 远程开发功能

### 代码服务器 (Code Server)
```
下载模板:
https://cursor.blob.core.windows.net/remote-releases/${commit}/vscode-reh-${os}-${arch}.tar.gz

服务器发现:
/api/latest/server.version.resolve
quality /download/.tar.gz

支持的远程架构:
- linux-x64, linux-arm64, linux-armhf
- linux-alpine-x64, alpine-arm64
- darwin-x64, darwin-arm64
- win32-x64, win32-arm64
```

### 端口转发
```
本地端口 → 隧道 → 远程端口
端口管理器创建/删除端口映射
URL模板: port_forwarding_uris, inspection_uri
```

## 更新机制

### CLI 自更新
```
更新URL: https://api2.cursor.sh/updates
备份URL: http://cursorapi.com/updates

更新平台标识:
- cli-alpine-x64, cli-linux-x64, cli-linux-arm64
- cli-darwin-x64, cli-win32-x64, ...
- win32-x64-archive, win32-arm64-archive

更新流程:
1. 检查更新的 JSON RPC (`update`)
2. 下载新版本到 staging 文件
3. 验证内容
4. 替换旧文件
5. 重新启动
```

### 服务器更新
```
产品版本: 3.7.27 (commit e48ee6102a1...)
更新轮询:
- 检查当前版本
- 下载新版本到 .tar.gz
- 解压到 server 目录
- 迁移 CLI 数据
```

## 系统集成 (Linux)

### Systemd 服务管理
```
服务名: cursor-tunnel.service
管理器: systemctl --user

命令:
- install: 安装服务
- uninstall: 卸载服务
- start: 启动服务
- stop: 停止服务

检查:
- journalctl -f -u cursor-tunnel.service
- loginctl enable-linger $USER
```

### 电源管理 (防休眠)
```
D-Bus API:
- org.freedesktop.ScreenSaver
- org.freedesktop.PowerManagement.Inhibit
- org.freedesktop.systemd1
```

## RPC 协议

### JSON-RPC 和 MessagePack-RPC
双协议支持，用于进程间通信：
```
ServerMessageParams {
    message: String,
    params: { },
}

HttpHeadersParams {
    status_code: Number,
    headers: { },
}

SpawnParams {
    socket_id: String,
    commit_id: String,
    quality: String,
    extensions: [...],
    use_local_download: bool,
}

ServeParams {
    socket_id: String,
    commit_id: String,
    quality: String,
    extensions: [...],
    use_local_download: bool,
}
```

### 错误码系统
```
主要错误:
- TunnelActiveAndInUse: 隧道已被使用
- AuthChallengeBadToken: 挑战令牌无效
- ServerDownloadError: 服务器下载失败
- RefreshTokenNotAvailable: 无法刷新令牌
- OAuthError: OAuth流程失败
- ServerAuthRequired: 需要服务器认证
```

## 版本信息

```
CLI版本: 3.7.27 (commit e48ee6102a199492b0c9964699bf011886708ba3)
SSH实现: russh_0.37.1 (基于vscode-russh fork)
隧道协议: Dev-Tunnels-Service-Rust-SDK/global.0.1.0
WebSocket: tokio-tungstenite 0.20.1
HTTP客户端: reqwest 0.11.27
```

## 安全分析

### 传输安全
- ✅ WebSocket over WSS (TLS)
- ✅ SSH加密传输 (aes256-ctr)
- ✅ OAuth 2.0 设备授权码流程
- ✅ 主机密钥验证

### 令牌安全
- ✅ 系统密钥环存储
- ✅ OAuth refresh token 自动刷新
- ❌ 支持 VSCODE_CLI_DISABLE_KEYCHAIN_ENCRYPT (调试模式)
- ❌ 支持明文token通过环境变量传入

### 风险点
1. 密钥环回退到文件存储时令牌可能被读取
2. 环境变量中的令牌可能被其他进程读取
3. WebSocket连接依赖心跳检测，断开恢复机制可能被干扰
4. 支持HTTP代理可能被中间人攻击
