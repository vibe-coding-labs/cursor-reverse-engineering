# Cursor 风控体系 — 用量限制与计费 (第19轮)

## 一、HardLimit 硬限制系统

### 1.1 完整消息

```protobuf
message HardLimit {
  int32 hard_limit_cents = 1;              // 硬限制(美分)
  int64 period_start_ms = 2;               // 周期开始
  int64 period_end_ms = 3;                 // 周期结束
}

message HardLimitResponse {
  int32 hard_limit = 1;                    // 硬限制额度
  bool no_usage_based_allowed = 2;         // 不允许按使用付费
  bool hard_limit_per_user = 3;            // 是否按用户
  int32 per_user_monthly_limit_dollars = 4;// 每用户月度限制($)
  bool is_dynamic_team_limit = 5;          // 动态团队限制
}
```

### 1.2 操作过程

```javascript
// 查询硬限制
const response = await dashboardClient.getHardLimit({ teamId: currentTeam.id });
return { usageHardLimit: response.hardLimit };

// 逐步提高硬限制
// $20 → $40 → 每次 +$20
incrementHardLimit(teamId) {
    hardLimit({ teamId, hardLimit: currentLimit + 20 });
}

// 启用按使用付费
enableUsageBasedPricing(teamId) {
    hardLimit({ teamId, hardLimit: 20, noUsageBasedAllowed: false });
}
```

### 1.3 Statsig 控制

```javascript
"individual_spend_limits_blocked": {  // 是否阻止个人消费限制
    "client": true,
    "default": false
}
```

## 二、SpendLimit 消费限制

```protobuf
message SpendLimitUsage {
    int32 pooled_limit = 1;           // 团队总限制
    int32 pooled_remaining = 2;       // 团队剩余
    int32 individual_limit = 3;       // 个人限制
    LimitType limit_type = 4;         // 限制类型
    int32 overall_limit = 5;          // 总限制
    int32 overall_remaining = 6;      // 总剩余
}
```

## 三、DashboardService 的计费/用量方法

| 方法 | 功能 | 返回 |
|------|------|------|
| `GetPlanInfo` | 套餐信息 | 套餐名 + 价格 |
| `GetCurrentPeriodUsage` | 当前周期用量 | 已用百分比 + 配额 |
| `GetHardLimit` | 硬限制查询 | 限制额度 |
| `GetTeams` | 团队列表 | 团队及计费信息 |
| `GetMe` | 用户信息 | 用户资料 |

## 四、免费版限制 vs Pro 限制

```javascript
// free 用户: noUsageBasedAllowed = true (用完即止)
// Pro 用户: noUsageBasedAllowed = false (可按使用付费)

// individual_spend_limits_blocked gate 控制能否自行调高额度
```

## 五、第19轮新增

| 发现 | 重要度 |
|------|:------:|
| **HardLimit 完整消息结构** | ⭐⭐⭐ |
| **SpendLimitUsage 6字段** | ⭐⭐ |
| **硬限制逐步递增机制** | ⭐⭐ |
| **individual_spend_limits_blocked gate** | ⭐ |

*第19轮分析，2026-06-17*
*覆盖: 硬限制、消费限制、计费API*