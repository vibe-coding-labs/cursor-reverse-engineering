# Cursor 0.48.8 逆向分析

本目录包含Cursor 0.48.8版本的核心代码，已移除大部分Electron框架相关文件，只保留Cursor特有的逻辑部分。

## 删除的内容
以下Electron相关内容已被删除，以减小项目体积并专注于Cursor核心逻辑：
- `/Frameworks/Electron Framework.framework`：Electron的核心框架文件（约231MB）
- `/Frameworks`下的其他Helper应用
- 其他与Electron运行时相关的库文件

## 保留的核心内容
保留了以下Cursor特有的代码和资源：
- `/Resources/app/extensions`：Cursor特有的扩展，如cursor-tokenize、cursor-retrieval等
- `/Resources/app/out`：编译后的主要代码文件
- `/Resources/app/node_modules/@anysphere`：Cursor特有的模块

## 文件结构和数量统计
- 总文件数：7,306个
- 小于10KB的文件：6,483个 (88.7%)
- 10KB-100KB的文件：653个 (8.9%)
- 100KB-1MB的文件：149个 (2.0%)
- 1MB-10MB的文件：19个 (0.3%)
- 大于10MB的文件：2个 (0.03%)

## 核心文件及功能说明

### AI功能相关文件（最重要的逆向目标）

#### 1. Cursor特有扩展
- `/Resources/app/extensions/cursor-tokenize`
  - **功能**: 代码标记化处理，将代码转换为AI可理解的格式
  - **核心文件**: `dist/extension.js` - 扩展主入口
  - **重要性**: 高，负责代码解析和AI交互的基础工作

- `/Resources/app/extensions/cursor-retrieval`
  - **功能**: 信息检索和上下文管理
  - **核心文件**: `dist/extension.js` - 扩展主入口
  - **重要性**: 高，负责AI检索代码上下文信息

- `/Resources/app/extensions/cursor-always-local`
  - **功能**: 本地处理逻辑，确保某些操作在本地执行
  - **核心文件**: `dist/extension.js` - 扩展主入口

- `/Resources/app/extensions/cursor-shadow-workspace`
  - **功能**: 工作区管理，可能与AI工作环境隔离相关
  - **核心文件**: `dist/extension.js` - 扩展主入口

#### 2. Anysphere模块
- `/Resources/app/node_modules/@anysphere/file-service-darwin-universal/file_service.darwin-universal.node` (6.4MB)
  - **功能**: 文件服务原生模块，可能负责文件读写和权限管理
  - **重要性**: 中，处理文件系统交互

#### 3. 通信相关
- `/Resources/app/bin/cursor-tunnel` (12MB)
  - **功能**: 网络通信组件，可能负责与AI服务器的通信
  - **重要性**: 高，负责与后端AI服务的连接和数据传输

### VSCode核心文件（被Cursor修改的部分可能含有关键逻辑）

- `/Resources/app/out/vs/workbench/workbench.desktop.main.js` (15MB)
  - **功能**: VSCode工作台主要代码，经过Cursor修改的UI和功能框架
  - **重要性**: 中，包含UI逻辑和与AI功能的集成点

- `/Resources/app/out/main.js`
  - **功能**: 应用程序主入口文件
  - **重要性**: 中，应用初始化和主进程逻辑

- `/Resources/app/out/bootstrap-fork.js`
  - **功能**: 进程启动和管理
  - **重要性**: 中低，负责应用程序的启动逻辑

### 配置文件（包含重要设置和参数）

- `/Resources/app/package.json`
  - **功能**: 应用程序元数据和依赖定义
  - **重要性**: 中，包含版本信息和依赖关系

- `/Resources/app/product.json`
  - **功能**: Cursor产品特定配置
  - **重要性**: 高，包含产品特定设置和功能开关

### 资源文件

- `/Resources/app/extensions/theme-cursor`
  - **功能**: Cursor主题相关资源
  - **重要性**: 低，主要是视觉样式

## 逆向分析建议路径

1. **从扩展入手**：优先分析cursor-tokenize和cursor-retrieval，这些是AI功能的核心
2. **通信组件分析**：检查cursor-tunnel了解与AI服务器的通信机制
3. **配置解析**：分析product.json和包含"cursor"关键字的配置文件
4. **UI集成点**：在workbench.desktop.main.js中搜索与AI相关的集成点
5. **文件处理服务**：分析@anysphere模块的功能和权限

## 可能的加密和保护机制
- 代码可能被混淆和压缩
- 可能存在令牌验证和API密钥
- 网络通信可能加密
- 可能有遥测和监控代码

## 注意事项
- Cursor是基于VSCode构建的，因此保留了许多VSCode的核心组件
- AI功能主要集中在cursor-*系列扩展中
- 主要的AI处理逻辑可能在cursor-tokenize和cursor-retrieval中
- 由于有大量小文件(89%小于10KB)，需要关注文件间的引用关系
