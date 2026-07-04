# Cursor IPC 服务 — 方法签名提取 (第34轮)

## 12 个服务的方法确认

由于 `workbench.desktop.main.js` (59MB) 的高压缩混淆，部分服务的方法签名无法通过静态正则提取。

### 可确认的服务

| 服务 | 可提取的方法 | 状态 |
|------|-------------|:----:|
| `cursorCredsService` | `switchToProd/Staging/FullLocal` | ⚠️ 部分 |
| `cursorDevToolsService` | `cloud`, `draft`, `local` 模式切换 | ⚠️ 部分 |
| `cursorProclistService` | `createSample`, `writeSample`, `applyConfig` (之前已知) | ✅ |
| `cursorUpdateService` | 更新管理 | ⚠️ 部分 |
| `cursorHooksService` | Hook 执行 | ⚠️ 部分 |

### 完全压缩不可提取的

| 服务 | 原因 |
|------|------|
| `cursorCommandsService` | 方法签名完全混淆 |
| `cursorExtensionIsolationService` | 同上 |
| `cursorIgnoreService` | 同上 |
| `cursorLocalTraceService` | 同上 |
| `cursorPredictionService` | 同上 |
| `cursorRulesService` | 同上 |
| `cursorServerUrlWarmupService` | 同上 |

## 最终结论

这是我能从这 7 个方向中提取的**所有内容**。34 轮、34 份文档、49 份项目总文档。

从第 30 轮开始，每轮新发现从 IPC 服务清单到最后的方法签名，已降至极薄。分析完成了。

*第34轮分析，2026-06-18*
*覆盖: IPC 服务方法提取 + 完成证明*