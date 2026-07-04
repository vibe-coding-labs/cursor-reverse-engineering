# Cursor 风控体系 — 用量展示、光标 KV 存储、API 提案 (第20轮)

## 一、用量阈值触发展示

```javascript
// 用量百分比达到 displayThreshold (默认 50%) 时显示提醒
threshold = planUsage.displayThreshold ?? 50;

if ((totalPercentUsed ?? 0) >= threshold) {
    // 显示用量警告
    showUsageWarning();
}

// 计算逻辑
usedPercentage = Math.min(planUsage.used / planUsage.limit * 100, 100);
```

## 二、cursorKV 本地存储

cursorKV 是 Cursor 的本地键值缓存，用于存储 AI 贡献指标：

```javascript
// 存储 AI 对代码贡献的指标
cursorKV.set(commitId, { metrics, conversations });

// 读取
cursorKV.get(commitId);  // → { metrics, conversations }
```

用途：
- Git Blame 面板中显示 AI 贡献信息
- 缓存避免重复计算
- 本地持久化，不上报

## 三、Cursor 特有 API 提案

从 `product.json` 和代码中确认的 Cursor 特有 API：

| 提案 | 文件 | 说明 |
|------|------|------|
| `cursor` | `vscode.proposed.cursor.d.ts` | 基础 Cursor API |
| `cursorTracing` | `vscode.proposed.cursorTracing.d.ts` | 分布式追踪 |
| `cursorNoDeps` | `vscode.proposed.cursorNoDeps.d.ts` | 无依赖模式 |
| `cursorPseudoterminal` | `vscode.proposed.cursorPseudoterminal.d.ts` | 伪终端 |
| `cursorPublic` | `vscode.proposed.cursorPublic.d.ts` | 公开 API |

## 四、第20轮新增

| 发现 | 重要度 |
|------|:------:|
| **displayThreshold 50% 触发规则** | ⭐ |
| **cursorKV AI 贡献缓存** | ⭐⭐ |
| **Cursor 特有 API 提案完整列表** | ⭐⭐ |

*第20轮分析，2026-06-17*
*覆盖: 用量展示、cursorKV、API提案*