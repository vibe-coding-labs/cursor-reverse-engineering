# Glass UI 品牌资源分析

## 概述
Glass 是 Cursor 的 Web/Cloud UI 层，提供**启动画面、品牌动画、云环境设置界面**。

## 资源文件

| 文件 | 大小 | 格式 | 用途 |
|------|:----:|:----:|------|
| `cursor-splash-logo-normal.png` | 19KB | PNG | 正常启动画面 Logo（桌面端） |
| `cursor-splash-logo-glass.png` | 48KB | PNG | Glass 主题启动画面 Logo（Web/Cloud 端） |
| `cursor-logo-for-dark-theme.webm` | 128KB | WebM | 深色主题动态动画 Logo |
| `cursor-logo-for-light-theme.webm` | 131KB | WebM | 浅色主题动态动画 Logo |
| `cloud-environment-setup.png` | 59KB | PNG | 云环境设置界面插图 |

## 目录位置
```
out/vs/glass/browser/media/
```

## 功能分析

### 启动画面
Cursor 根据环境选择启动画面：
- **桌面端**: `cursor-splash-logo-normal.png`
- **Glass (云端)**: `cursor-splash-logo-glass.png`

### 动画 Logo
`.webm` 格式的动画 Logo 在启动时播放，根据系统主题选择：
- 深色系统主题 → `cursor-logo-for-dark-theme.webm`
- 浅色系统主题 → `cursor-logo-for-light-theme.webm`

### 云环境设置
`cloud-environment-setup.png` 用于 Cloud Agent 环境配置界面的插图。

## Glass 模式触发
当 Cursor 以 `--glass` 参数启动或在 Web 环境中运行时启用 Glass UI 层。