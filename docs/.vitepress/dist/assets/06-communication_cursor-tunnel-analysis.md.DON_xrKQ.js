import{_ as n,o as a,c as e,a2 as p}from"./chunks/framework.CBOyQ9KN.js";const d=JSON.parse('{"title":"Cursor Tunnel 通信机制分析","description":"","frontmatter":{},"headers":[],"relativePath":"06-communication/cursor-tunnel-analysis.md","filePath":"06-communication/cursor-tunnel-analysis.md","lastUpdated":null}'),l={name:"06-communication/cursor-tunnel-analysis.md"};function i(r,s,c,t,b,o){return a(),e("div",null,[...s[0]||(s[0]=[p(`<h1 id="cursor-tunnel-通信机制分析" tabindex="-1">Cursor Tunnel 通信机制分析 <a class="header-anchor" href="#cursor-tunnel-通信机制分析" aria-label="Permalink to &quot;Cursor Tunnel 通信机制分析&quot;">​</a></h1><h2 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to &quot;概述&quot;">​</a></h2><p><code>cursor-tunnel</code> 和 <code>code-tunnel</code> 是 Cursor 3.7 的通信核心组件，均为 <strong>Rust</strong> 编写的独立二进制程序（各19MB），负责远程开发、SSH隧道和服务器代理功能。</p><h2 id="二进制信息" tabindex="-1">二进制信息 <a class="header-anchor" href="#二进制信息" aria-label="Permalink to &quot;二进制信息&quot;">​</a></h2><table tabindex="0"><thead><tr><th>文件</th><th>路径</th><th>大小</th><th>类型</th></tr></thead><tbody><tr><td>cursor-tunnel</td><td><code>bin/cursor-tunnel</code></td><td>19MB</td><td>Rust ELF x86_64</td></tr><tr><td>code-tunnel</td><td><code>bin/code-tunnel</code></td><td>19MB</td><td>Rust ELF x86_64</td></tr><tr><td>cursor CLI</td><td><code>bin/cursor</code></td><td>6KB</td><td>Shell脚本</td></tr><tr><td>code-tunnel CLI</td><td><code>bin/code-tunnel</code></td><td>19MB</td><td>Rust ELF (同cursor-tunnel)</td></tr></tbody></table><h2 id="源码追踪" tabindex="-1">源码追踪 <a class="header-anchor" href="#源码追踪" aria-label="Permalink to &quot;源码追踪&quot;">​</a></h2><p>通过strings分析发现Rust编译器路径：</p><h3 id="cursor-构建路径" tabindex="-1">Cursor 构建路径 <a class="header-anchor" href="#cursor-构建路径" aria-label="Permalink to &quot;Cursor 构建路径&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/home/runner/_work/everysphere/everysphere/_work/1/s/vscode/cli/src/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>包含源文件：</p><ul><li><code>auth.rs</code> — 认证模块</li><li><code>commands/tunnels.rs</code> — 隧道命令</li><li><code>commands/update.rs</code> — 更新命令</li><li><code>tunnels/code_server.rs</code> — 代码服务器管理</li><li><code>tunnels/dev_tunnels.rs</code> — 开发隧道</li><li><code>tunnels/control_server.rs</code> — 控制服务器</li><li><code>tunnels/port_forwarder.rs</code> — 端口转发</li><li><code>tunnels/local_forwarding.rs</code> — 本地转发</li><li><code>tunnels/protocol.rs</code> — 协议定义</li><li><code>tunnels/server_bridge.rs</code> — 服务器桥接</li><li><code>tunnels/server_multiplexer.rs</code> — 服务器多路复用</li><li><code>tunnels/service_linux.rs</code> — Linux服务管理</li><li><code>update_service.rs</code> — 更新服务</li><li><code>state.rs</code> — 状态管理</li><li><code>singleton.rs</code> — 单例模式</li><li><code>json_rpc.rs</code> — JSON RPC</li><li><code>msgpack_rpc.rs</code> — MessagePack RPC</li><li><code>util/http.rs</code> — HTTP工具</li><li><code>util/prereqs.rs</code> — 系统前置检查</li><li><code>util/zipper.rs</code> — ZIP解压</li><li><code>util/sync.rs</code> — 同步工具</li></ul><h3 id="依赖库" tabindex="-1">依赖库 <a class="header-anchor" href="#依赖库" aria-label="Permalink to &quot;依赖库&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>vscode-russh (SSH实现) — fd4f608 版本</span></span>
<span class="line"><span>dev-tunnels (隧道协议) — 8cae9b2 版本</span></span>
<span class="line"><span>reqwest 0.11.27 (HTTP客户端)</span></span>
<span class="line"><span>tokio-tungstenite 0.20.1 (WebSocket)</span></span>
<span class="line"><span>tungstenite 0.20.1 (WebSocket核心)</span></span>
<span class="line"><span>tokio (异步运行时)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="构建ci" tabindex="-1">构建CI <a class="header-anchor" href="#构建ci" aria-label="Permalink to &quot;构建CI&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>everysphere — Anysphere内部CI系统名称</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="oauth-认证机制" tabindex="-1">OAuth 认证机制 <a class="header-anchor" href="#oauth-认证机制" aria-label="Permalink to &quot;OAuth 认证机制&quot;">​</a></h2><h3 id="双认证提供商" tabindex="-1">双认证提供商 <a class="header-anchor" href="#双认证提供商" aria-label="Permalink to &quot;双认证提供商&quot;">​</a></h3><h4 id="_1-microsoft-认证-azure-ad" tabindex="-1">1. Microsoft 认证 (Azure AD) <a class="header-anchor" href="#_1-microsoft-认证-azure-ad" aria-label="Permalink to &quot;1. Microsoft 认证 (Azure AD)&quot;">​</a></h4><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>OAuth端点:</span></span>
<span class="line"><span>- https://login.microsoftonline.com/organizations/oauth2/v2.0/devicecode</span></span>
<span class="line"><span>- https://login.microsoftonline.com/organizations/oauth2/v2.0/token</span></span>
<span class="line"><span></span></span>
<span class="line"><span>OAuth配置:</span></span>
<span class="line"><span>- client_id: aebc6443-996d-45c2-90f0-388ff96faa56</span></span>
<span class="line"><span>- scope: offline_access+profile+openid+read:user+read:org</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="_2-github-认证" tabindex="-1">2. GitHub 认证 <a class="header-anchor" href="#_2-github-认证" aria-label="Permalink to &quot;2. GitHub 认证&quot;">​</a></h4><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>OAuth端点:</span></span>
<span class="line"><span>- https://github.com/login/device/code</span></span>
<span class="line"><span>- https://github.com/login/oauth/access_token</span></span>
<span class="line"><span>- https://api.github.com/user (令牌验证)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>OAuth配置:</span></span>
<span class="line"><span>- client_id: 01ab8ac9400c4e429b23</span></span>
<span class="line"><span>- User-Agent: Cursor</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="令牌管理" tabindex="-1">令牌管理 <a class="header-anchor" href="#令牌管理" aria-label="Permalink to &quot;令牌管理&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>环境变量:</span></span>
<span class="line"><span>- VSCODE_CLI_ACCESS_TOKEN</span></span>
<span class="line"><span>- VSCODE_CLI_REFRESH_TOKEN</span></span>
<span class="line"><span>- VSCODE_CLI_USE_FILE_KEYCHAIN</span></span>
<span class="line"><span>- VSCODE_CLI_DISABLE_KEYCHAIN_ENCRYPT</span></span>
<span class="line"><span>- VSCODE_CLI_NONINTERACTIVE</span></span>
<span class="line"><span></span></span>
<span class="line"><span>存储方式:</span></span>
<span class="line"><span>1. 系统密钥环 (keyring)</span></span>
<span class="line"><span>2. 文件回退存储 (file keychain)</span></span>
<span class="line"><span>3. 令牌刷新: grant_type=refresh_token&amp;refresh_token=&lt;token&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="设备授权码流程" tabindex="-1">设备授权码流程 <a class="header-anchor" href="#设备授权码流程" aria-label="Permalink to &quot;设备授权码流程&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>用户 → 显示设备码 → 浏览器登录 → 轮询令牌 → 存储令牌</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="隧道协议架构" tabindex="-1">隧道协议架构 <a class="header-anchor" href="#隧道协议架构" aria-label="Permalink to &quot;隧道协议架构&quot;">​</a></h2><h3 id="隧道端点模型" tabindex="-1">隧道端点模型 <a class="header-anchor" href="#隧道端点模型" aria-label="Permalink to &quot;隧道端点模型&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>TunnelEndpoint {</span></span>
<span class="line"><span>    connectionMode: enum { ... },</span></span>
<span class="line"><span>    hostId: String,</span></span>
<span class="line"><span>    hostPublicKeys: [...],</span></span>
<span class="line"><span>    portUriFormat: String,</span></span>
<span class="line"><span>    tunnelUri: String,</span></span>
<span class="line"><span>    portSshCommandFormat: String,</span></span>
<span class="line"><span>    sshGatewayPublicKey: String,</span></span>
<span class="line"><span>    hostRelayUri: String,</span></span>
<span class="line"><span>    clientRelayUri: String,</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Tunnel {</span></span>
<span class="line"><span>    clusterId: String,</span></span>
<span class="line"><span>    domain: String,</span></span>
<span class="line"><span>    accessTokens: [...],</span></span>
<span class="line"><span>    accessControl: {...},</span></span>
<span class="line"><span>    endpoints: [...],</span></span>
<span class="line"><span>    ports: [...],</span></span>
<span class="line"><span>    created: DateTime,</span></span>
<span class="line"><span>    expiration: DateTime,</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>TunnelPort {</span></span>
<span class="line"><span>    portNumber: u16,</span></span>
<span class="line"><span>    isDefault: bool,</span></span>
<span class="line"><span>    sshUser: String,</span></span>
<span class="line"><span>    portForwardingUris: [...],</span></span>
<span class="line"><span>    inspectionUri: String,</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h3 id="连接协议栈" tabindex="-1">连接协议栈 <a class="header-anchor" href="#连接协议栈" aria-label="Permalink to &quot;连接协议栈&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>用户端                    Cursor服务器                  远程机器</span></span>
<span class="line"><span>  |                          |                            |</span></span>
<span class="line"><span>  |--- WebSocket (WSS) ----&gt;|                            |</span></span>
<span class="line"><span>  |                         |--- SSH Tunnel ------------&gt;|</span></span>
<span class="line"><span>  |                         |    (russh实现)              |</span></span>
<span class="line"><span>  |                         |                            |</span></span>
<span class="line"><span>  |&lt;--- 数据流双向转发 -----|----------------------------|</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>WebSocket传输:</span></span>
<span class="line"><span>- tokio-tungstenite 0.20.1</span></span>
<span class="line"><span>- 连接保持: ping/pong 心跳检测</span></span>
<span class="line"><span>- 关闭原因: CloseNormal, PolicyRestart, TlsLibraryBad, ...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SSH传输 (russh):</span></span>
<span class="line"><span>- 密钥交换: diffie-hellman-group14-sha256, group1, group14</span></span>
<span class="line"><span>- 主机密钥: ssh-rsa, ssh-ed25519, rsa-sha2-256/512</span></span>
<span class="line"><span>- 加密: aes256-ctr, aes192-ctr, aes128-ctr</span></span>
<span class="line"><span>- MAC: hmac-sha2-256/512-etm@openssh.com</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="中继隧道连接流程" tabindex="-1">中继隧道连接流程 <a class="header-anchor" href="#中继隧道连接流程" aria-label="Permalink to &quot;中继隧道连接流程&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1. 创建隧道 → 注册到中继 → 获取 relay URI</span></span>
<span class="line"><span>2. 主机连接 → WebSocket → 建立 host relay session</span></span>
<span class="line"><span>3. 客户端连接 → WebSocket → 认证 → 数据转发</span></span>
<span class="line"><span>4. 保持连接 → 定时 ping pong → 检测断开</span></span>
<span class="line"><span></span></span>
<span class="line"><span>连接令牌系统:</span></span>
<span class="line"><span>- 服务器发行 challenge token</span></span>
<span class="line"><span>- 客户端验证 challenge</span></span>
<span class="line"><span>- 定期刷新 access token</span></span>
<span class="line"><span>- 失效则重新连接</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="远程开发功能" tabindex="-1">远程开发功能 <a class="header-anchor" href="#远程开发功能" aria-label="Permalink to &quot;远程开发功能&quot;">​</a></h2><h3 id="代码服务器-code-server" tabindex="-1">代码服务器 (Code Server) <a class="header-anchor" href="#代码服务器-code-server" aria-label="Permalink to &quot;代码服务器 (Code Server)&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>下载模板:</span></span>
<span class="line"><span>https://cursor.blob.core.windows.net/remote-releases/\${commit}/vscode-reh-\${os}-\${arch}.tar.gz</span></span>
<span class="line"><span></span></span>
<span class="line"><span>服务器发现:</span></span>
<span class="line"><span>/api/latest/server.version.resolve</span></span>
<span class="line"><span>quality /download/.tar.gz</span></span>
<span class="line"><span></span></span>
<span class="line"><span>支持的远程架构:</span></span>
<span class="line"><span>- linux-x64, linux-arm64, linux-armhf</span></span>
<span class="line"><span>- linux-alpine-x64, alpine-arm64</span></span>
<span class="line"><span>- darwin-x64, darwin-arm64</span></span>
<span class="line"><span>- win32-x64, win32-arm64</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="端口转发" tabindex="-1">端口转发 <a class="header-anchor" href="#端口转发" aria-label="Permalink to &quot;端口转发&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>本地端口 → 隧道 → 远程端口</span></span>
<span class="line"><span>端口管理器创建/删除端口映射</span></span>
<span class="line"><span>URL模板: port_forwarding_uris, inspection_uri</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="更新机制" tabindex="-1">更新机制 <a class="header-anchor" href="#更新机制" aria-label="Permalink to &quot;更新机制&quot;">​</a></h2><h3 id="cli-自更新" tabindex="-1">CLI 自更新 <a class="header-anchor" href="#cli-自更新" aria-label="Permalink to &quot;CLI 自更新&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>更新URL: https://api2.cursor.sh/updates</span></span>
<span class="line"><span>备份URL: http://cursorapi.com/updates</span></span>
<span class="line"><span></span></span>
<span class="line"><span>更新平台标识:</span></span>
<span class="line"><span>- cli-alpine-x64, cli-linux-x64, cli-linux-arm64</span></span>
<span class="line"><span>- cli-darwin-x64, cli-win32-x64, ...</span></span>
<span class="line"><span>- win32-x64-archive, win32-arm64-archive</span></span>
<span class="line"><span></span></span>
<span class="line"><span>更新流程:</span></span>
<span class="line"><span>1. 检查更新的 JSON RPC (\`update\`)</span></span>
<span class="line"><span>2. 下载新版本到 staging 文件</span></span>
<span class="line"><span>3. 验证内容</span></span>
<span class="line"><span>4. 替换旧文件</span></span>
<span class="line"><span>5. 重新启动</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="服务器更新" tabindex="-1">服务器更新 <a class="header-anchor" href="#服务器更新" aria-label="Permalink to &quot;服务器更新&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>产品版本: 3.7.27 (commit e48ee6102a1...)</span></span>
<span class="line"><span>更新轮询:</span></span>
<span class="line"><span>- 检查当前版本</span></span>
<span class="line"><span>- 下载新版本到 .tar.gz</span></span>
<span class="line"><span>- 解压到 server 目录</span></span>
<span class="line"><span>- 迁移 CLI 数据</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="系统集成-linux" tabindex="-1">系统集成 (Linux) <a class="header-anchor" href="#系统集成-linux" aria-label="Permalink to &quot;系统集成 (Linux)&quot;">​</a></h2><h3 id="systemd-服务管理" tabindex="-1">Systemd 服务管理 <a class="header-anchor" href="#systemd-服务管理" aria-label="Permalink to &quot;Systemd 服务管理&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>服务名: cursor-tunnel.service</span></span>
<span class="line"><span>管理器: systemctl --user</span></span>
<span class="line"><span></span></span>
<span class="line"><span>命令:</span></span>
<span class="line"><span>- install: 安装服务</span></span>
<span class="line"><span>- uninstall: 卸载服务</span></span>
<span class="line"><span>- start: 启动服务</span></span>
<span class="line"><span>- stop: 停止服务</span></span>
<span class="line"><span></span></span>
<span class="line"><span>检查:</span></span>
<span class="line"><span>- journalctl -f -u cursor-tunnel.service</span></span>
<span class="line"><span>- loginctl enable-linger $USER</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="电源管理-防休眠" tabindex="-1">电源管理 (防休眠) <a class="header-anchor" href="#电源管理-防休眠" aria-label="Permalink to &quot;电源管理 (防休眠)&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>D-Bus API:</span></span>
<span class="line"><span>- org.freedesktop.ScreenSaver</span></span>
<span class="line"><span>- org.freedesktop.PowerManagement.Inhibit</span></span>
<span class="line"><span>- org.freedesktop.systemd1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="rpc-协议" tabindex="-1">RPC 协议 <a class="header-anchor" href="#rpc-协议" aria-label="Permalink to &quot;RPC 协议&quot;">​</a></h2><h3 id="json-rpc-和-messagepack-rpc" tabindex="-1">JSON-RPC 和 MessagePack-RPC <a class="header-anchor" href="#json-rpc-和-messagepack-rpc" aria-label="Permalink to &quot;JSON-RPC 和 MessagePack-RPC&quot;">​</a></h3><p>双协议支持，用于进程间通信：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ServerMessageParams {</span></span>
<span class="line"><span>    message: String,</span></span>
<span class="line"><span>    params: { },</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>HttpHeadersParams {</span></span>
<span class="line"><span>    status_code: Number,</span></span>
<span class="line"><span>    headers: { },</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SpawnParams {</span></span>
<span class="line"><span>    socket_id: String,</span></span>
<span class="line"><span>    commit_id: String,</span></span>
<span class="line"><span>    quality: String,</span></span>
<span class="line"><span>    extensions: [...],</span></span>
<span class="line"><span>    use_local_download: bool,</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ServeParams {</span></span>
<span class="line"><span>    socket_id: String,</span></span>
<span class="line"><span>    commit_id: String,</span></span>
<span class="line"><span>    quality: String,</span></span>
<span class="line"><span>    extensions: [...],</span></span>
<span class="line"><span>    use_local_download: bool,</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h3 id="错误码系统" tabindex="-1">错误码系统 <a class="header-anchor" href="#错误码系统" aria-label="Permalink to &quot;错误码系统&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>主要错误:</span></span>
<span class="line"><span>- TunnelActiveAndInUse: 隧道已被使用</span></span>
<span class="line"><span>- AuthChallengeBadToken: 挑战令牌无效</span></span>
<span class="line"><span>- ServerDownloadError: 服务器下载失败</span></span>
<span class="line"><span>- RefreshTokenNotAvailable: 无法刷新令牌</span></span>
<span class="line"><span>- OAuthError: OAuth流程失败</span></span>
<span class="line"><span>- ServerAuthRequired: 需要服务器认证</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="版本信息" tabindex="-1">版本信息 <a class="header-anchor" href="#版本信息" aria-label="Permalink to &quot;版本信息&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>CLI版本: 3.7.27 (commit e48ee6102a199492b0c9964699bf011886708ba3)</span></span>
<span class="line"><span>SSH实现: russh_0.37.1 (基于vscode-russh fork)</span></span>
<span class="line"><span>隧道协议: Dev-Tunnels-Service-Rust-SDK/global.0.1.0</span></span>
<span class="line"><span>WebSocket: tokio-tungstenite 0.20.1</span></span>
<span class="line"><span>HTTP客户端: reqwest 0.11.27</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="安全分析" tabindex="-1">安全分析 <a class="header-anchor" href="#安全分析" aria-label="Permalink to &quot;安全分析&quot;">​</a></h2><h3 id="传输安全" tabindex="-1">传输安全 <a class="header-anchor" href="#传输安全" aria-label="Permalink to &quot;传输安全&quot;">​</a></h3><ul><li>✅ WebSocket over WSS (TLS)</li><li>✅ SSH加密传输 (aes256-ctr)</li><li>✅ OAuth 2.0 设备授权码流程</li><li>✅ 主机密钥验证</li></ul><h3 id="令牌安全" tabindex="-1">令牌安全 <a class="header-anchor" href="#令牌安全" aria-label="Permalink to &quot;令牌安全&quot;">​</a></h3><ul><li>✅ 系统密钥环存储</li><li>✅ OAuth refresh token 自动刷新</li><li>❌ 支持 VSCODE_CLI_DISABLE_KEYCHAIN_ENCRYPT (调试模式)</li><li>❌ 支持明文token通过环境变量传入</li></ul><h3 id="风险点" tabindex="-1">风险点 <a class="header-anchor" href="#风险点" aria-label="Permalink to &quot;风险点&quot;">​</a></h3><ol><li>密钥环回退到文件存储时令牌可能被读取</li><li>环境变量中的令牌可能被其他进程读取</li><li>WebSocket连接依赖心跳检测，断开恢复机制可能被干扰</li><li>支持HTTP代理可能被中间人攻击</li></ol>`,62)])])}const h=n(l,[["render",i]]);export{d as __pageData,h as default};
