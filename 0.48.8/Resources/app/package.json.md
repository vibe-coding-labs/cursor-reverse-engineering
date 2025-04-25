# Cursor package.json 分析

## 基本信息
- **应用名称**：Cursor
- **版本**：0.48.8
- **发布码**：034ea95a21e3eb734fd22bf565a1e2e80d62ea9b
- **作者**：Anysphere, Inc.
- **类型**：ESM模块（"type": "module"）

## 技术要求
- **Node.js版本**：>= 20.11.0 < 21.0.0
- **包管理器限制**：明确要求使用npm（不推荐使用pnpm或yarn）

## 技术栈概览
- 基于Electron (v34.3.4)框架
- 使用TypeScript (v5.8.0-dev.20241202)
- 使用Gulp作为构建系统
- 使用Webpack进行模块打包
- 支持Protocol Buffers（Buf）
- 支持SolidJS（有相关的开发工具和插件）

## 构建与开发工具
- **主要构建工具**：Gulp
- **代码分析**：ESLint, TSLint, Prettier
- **测试框架**：Mocha, Playwright
- **编译加速**：SWC
- **开发辅助**：
  - 文件监视（watch模式）
  - 热重载
  - 调试配置

## 脚本命令分类

### 主要开发命令
- **watch**：开发模式监视文件变化
- **compile**：编译代码
- **test**：运行测试

### 平台特定构建
- Linux (ARM64, x64)
- Windows
- macOS

### 测试相关
- 浏览器测试
- Node.js测试
- 扩展测试

### 特殊功能
- Protocol Buffers生成
- 语法检查（ESLint, TSLint）
- 性能测试
- 扩展管理

## 主要依赖项

### 核心依赖
- **@electron/asar**：Electron打包工具
- **@microsoft/1ds-core-js**：遥测相关
- **@sentry/electron**：错误跟踪
- **@todesktop/runtime**：桌面应用运行时
- **@vscode/**：多个VSCode相关组件
- **@xterm/**：终端相关组件

### 开发依赖
- **@babel/**：JavaScript转译工具
- **@bufbuild/**：Protocol Buffers构建工具
- **@playwright/test**：UI测试框架
- **@swc/core**：快速JavaScript/TypeScript编译器
- **electron**：桌面应用框架
- **eslint**：代码质量检查
- **typescript**：TypeScript编译器
- **webpack**：模块打包工具

## 仓库信息
- **类型**：Git
- **URL**：https://github.com/microsoft/vscode.git
- **问题追踪**：https://github.com/microsoft/vscode/issues

## 架构特点
- 使用VSCode作为基础架构
- 支持扩展系统
- 集成了多种开发工具和功能
- 针对不同平台有特定的构建和优化选项
