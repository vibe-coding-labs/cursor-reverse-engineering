# Cursor 免费版（Free Tier）能力与限制调研报告

## 概述

基于实际 token 对 `api2.cursor.sh` 的 API 调测，结合代码逆向分析。

---

## 1. 订阅状态

| 项目 | 值 |
|------|------|
| 当前套餐 | **Free** |
| 价格 | $0 |
| 会员类型 | `free` |
| 结算周期 | 约 30 天一轮 |
| Pro 试用资格 | `trialEligible: false`（已过期） |
| 有效支付方式 | `hasValidPaymentMethod: false` |
| 上一个订阅 | `canceled`（曾订阅 Pro 后取消） |
| 可升级方案 | **Pro+** $60/mo（$70 额度） |

---

## 2. 用量配额

### 2.1 核心限制

| 项目 | 数值 |
|------|:----:|
| 每月免费请求数 | **200 次** |
| 用量计费 | `noUsageBasedAllowed: true`（用完即止，不可超额） |
| 已使用百分比 | 0% |
| 超出提示 | `"You've hit your 200 Free requests this month"` |
| 限流类型 | `free-user-rate-limit-exceeded` |

### 2.2 计费周期

当前计费周期：`1780897455748` → `1783489455748`（Unix ms）
- 开始：2026-06-08
- 结束：2026-07-08

---

## 3. 可用模型

### 3.1 模型锁定机制

免费用户受 `free_user_locked_model_2026_05` 实验开关控制：

```
变量名:   free_user_locked_model_2026_05
类型:     Statsig 实验开关
可选值:   control | composer_2_5_fast | composer_2_5
判断逻辑: membershipType === FREE 时触发锁定
```

### 3.2 可用模型列表

根据 `autoBucketModels: ["default"]` 和代码分析：

| 模型 | 免费版可用? | 说明 |
|------|:----------:|------|
| `default` 自动模型 | ✅ | 免费版只能使用自动（default）模型桶 |
| Claude Sonnet 4 | ❌ | 仅付费版 |
| Claude Opus 4 | ❌ | 仅付费版 |
| GPT-4o | ❌ | 仅付费版 |
| Claude 3.5 Haiku | ❌ | 仅付费版 |
| o3/o4-mini | ❌ | 仅付费版 |

**锁定效果**：免费用户不能手动选择具体模型，只能使用系统分配的"自动"模型桶。模型选择器显示锁状态：
```typescript
isFreeUserModelPickerLocked: true
```

### 3.3 自动模型桶内容

根据 `composer_2_5_fast` 和 `composer_2_5` 等 variant 推测，免费版的自动模型可能包括：
- **control**（默认分支）: Claude 3.5 Sonnet 级别
- **composer_2_5_fast**: 更快的响应模型
- **composer_2_5**: 标准的 Composer 模型

实际路由由后端决定，客户端无权选择。

---

## 4. 各套餐对比

| 能力 | Free | Pro ($20/mo) | Pro+ ($60/mo) |
|------|:----:|:-------------:|:-------------:|
| 每月请求数 | **200** | 500（fast）+ 无限（premium） | 1500（fast）+ 无限（premium）|
| 高级模型 | ❌ | ✅ | ✅ |
| Cloud Agent | ❌ | 有限 | 更多 |
| Agent 用量 | 受限 | 基础 | 3x |
| 选择模型 | ❌（自动锁定） | ✅ | ✅ |
| 图片上传 | ❌ | ✅ | ✅ |
| 自定义模型 API | ❌ | ✅ | ✅ |

---

## 5. 免费版实际能做什么

### ✅ 可以做
- 基础的 AI 代码补全（Tab）
- Composer 对话（使用自动分配的模型）
- Chat（使用自动分配的模型）
- Cmd+K 内联编辑
- 代码检索（cursor-retrieval）

### ❌ 不能做
- 手动选择模型（Sonnet/Opus/GPT-4o 等）
- 使用 Cloud Agent（云端 Agent）
- 超过 200 次请求/月
- 自定义 API Key（OpenAI/Anthropic 直连）
- 上传图片分析
- 运营团队/企业功能

---

## 6. API 端点权限验证

| API 端点 | 免费版访问权限 |
|----------|:------------:|
| `AuthService/GetEmail` | ✅ 正常返回 |
| `AuthService/GetUserMeta` | ✅ 正常返回 |
| `DashboardService/GetCurrentPeriodUsage` | ✅ 正常返回 |
| `DashboardService/GetPlanInfo` | ✅ 正常返回 |
| `DashboardService/GetHardLimit` | ✅ 返回 `noUsageBasedAllowed: true` |
| `auth/full_stripe_profile` | ✅ 正常返回 |
| `auth/has_valid_payment_method` | ✅ 返回 `false` |
| `cursorvm-manager.com/model/...` | ❌ 需要付费模型权限 |
| `AuthService/EmailValid` | ❌ 需登录验证（限 Protobuf RPC） |

---

## 7. 关键发现

1. **免费版的核心限制不是"模型差"，而是"不能选模型"**。你用什么都由系统分配，通常是中低档模型。

2. **200次/月的配额很紧**。代码中有明确提示：
   ```
   "You've hit your 200 Free requests this month"
   ```

3. **没用完的请求怎么算**：从响应看，`totalPercentUsed: 0`，且 `remainingBonus: false`，免费版没有结转机制。

4. **Pro 版起跳价 $20/mo，而非 $10/mo**。之前的 Hobby 计划似乎已取消，现在最低付费档是 Pro。

5. **免费版账号在之前的测试中实际上没有成功调用到模型**。`cursorvm-manager.com` 的模型端点在免费版下返回空响应——无法确认具体分配的模型是什么。

---

## 8. 数据来源

- 直接 API 调用 `api2.cursor.sh/auth/full_stripe_profile`
- 直接 API 调用 `api2.cursor.sh/aiserver.v1.DashboardService/GetCurrentPeriodUsage`
- 逆向 `workbench.desktop.main.js` 中提取的 `free_user_locked_model_2026_05` 实验开关
- 代码中提取的 `Pl.FREE_USER_RATE_LIMIT_EXCEEDED` 错误定义
- 代码中提取的套餐切换逻辑 `Ja.FREE → Ja.PRO → Ja.PRO_PLUS → Ja.ULTRA`
- 实际 token JWT 解码