# Cursor 产品信息分析

## 基本信息
- **应用名称**：Cursor
- **版本**：0.48.8
- **基于VSCode版本**：1.96.2
- **许可证**：MIT
- **发布时间**：2025-04-07

## 技术架构
- 基于Electron框架
- 使用远程服务器架构（cursor-server）
- 支持隧道连接（cursor-tunnel）
- 支持Windows、macOS和Linux系统

## AI功能配置
- AI配置键：control-key
- 默认聊天代理：GitHub Copilot
- 支持多种AI功能（编码辅助、上下文理解、自动补全等）

## 扩展生态系统
- 自定义扩展商店：https://marketplace.cursorapi.com
- 扩展版本限制（限制了多个微软扩展的版本）
- 内置扩展列表：
  - ms-vscode.js-debug-companion
  - ms-vscode.js-debug
  - ms-vscode.vscode-js-profile-table
- 禁止导入的扩展：github.copilot-chat, github.copilot

## 更新机制
- 主要更新URL：https://api2.cursor.sh/updates
- 备用更新URL：http://cursorapi.com/updates
- 发布说明URL：https://www.cursor.com/changelog

## 安全策略
- 受信任的扩展授权访问列表
- 受信任的协议处理程序
- 链接保护可信域名列表

## 应用标识
- Windows应用ID：多个变体用于不同架构
- macOS包标识符：com.todesktop.230313mzl4w4u92
- Linux图标名称：co.anysphere.cursor
- URL协议：cursor

## 功能标志和开发特性
- 多种功能开关配置（可从代码中看出大量实验性和开发中功能）
- 遥测数据配置
- 调试和开发工具设置

## 推荐扩展系统
- 基于文件类型和语言的扩展推荐
- 基于配置文件的扩展推荐
- 基于已安装可执行文件的扩展推荐

## 远程开发支持
- WSL（Windows Subsystem for Linux）
- SSH远程开发
- 容器开发环境
- GitHub Codespaces
