# Cursor 风控体系 — 模型路由、并行调用与配置 (第17轮)

## 一、模型路由选择逻辑

```javascript
// 核心路由判断
function getModelViewType(selections, visibleModels) {
    // 如果是单模型且为 "default"，进入 routed-model 视图
    // 否则进入 named-model 视图
    return selections.some(m => !visibleModels(m.modelId)) 
        ? "named-model" 
        : "routed-model";
}

// 视图切换
"named-model"       → 用户选择的具体模型名 (如 gpt-4o, claude-sonnet)
"routed-model"      → 自动路由模式 (后端根据策略分配)
```

| 模式 | 说明 |
|------|------|
| `named-model` | 用户手动选择具体模型 |
| `routed-model` | 系统自动选择和路由模型 |

---

## 二、并行调用控制

```javascript
// 模型 Provider 的配置
class ModelProvider {
    specificationVersion = "v1";
    provider = "amazon-bedrock";  // 或其他 provider
    
    maxEmbeddingsPerCall = 2048;   // 每次 embedding 请求最大数
    
    get supportsParallelCalls() {
        // 默认 true，如未设置则支持
        return this.settings.supportsParallelCalls ?? true;
    }
}
```

`supportsParallelCalls` 控制模型是否支持并行请求，默认开启。

---

## 三、max_mode 功能

从 UI 代码看：

```
max_mode_confirmed              // 用户确认启用 MAX 模式
max_mode_confirmation_cancelled // 用户取消
"Enable MAX Mode"              // 按钮文案
"Billed at API-pricing."       // 计费提示
```

max_mode 是一种**更高性能/更高成本**的推理模式，计费按 API 定价。

---

## 第17轮新增发现汇总

| 发现 | 重要度 |
|------|:------:|
| **模型路由 routed-model vs named-model** | ⭐⭐ |
| **supportsParallelCalls 控制** | ⭐ |
| **max_mode 确认 UI 流程** | ⭐ |

*第17轮分析，2026-06-17*
*覆盖: 模型路由、并行调用、max mode*