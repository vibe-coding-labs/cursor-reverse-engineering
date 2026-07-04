# Cursor 风控体系 — 进程列表 (Proclist) 采集 (第21轮)

## 一、cursorProclist 进程列表采集

### 1.1 概述

IPC 通道名: `"cursorProclist"`  
服务: `cursorProclistService`  
ID: `workbench.contrib.cursorProclistPolling`

Cursor 定期采集系统和进程信息，用于性能监控和问题诊断。

### 1.2 Statsig 配置驱动

```javascript
// 通过 Statsig 控制采集行为
proclist_config: {
    localEnabled: boolean;           // 是否启用本地采集
    backendReportingEnabled: boolean; // 是否上报到后端
    subsamplePollingRateSec: number;  // 子采样轮询频率
    samplePollingRateMin: number;     // 样本轮询频率
}
```

### 1.3 采样流程

```javascript
// 采集周期
INIT_DELAY_MS = 10000;  // 启动后 10 秒开始采集

async poll() {
    // 本地采样
    const localSample = await cursorProclistService.createSample();
    
    // 远程采样（如果有远程连接）
    const remoteSample = await fetchRemoteSample();
    
    // 过滤敏感信息 (argv 包含命令行参数)
    if (localSample) 
        for (const row of localSample.rows) 
            row.argv = undefined;  // 清空命令行参数
    
    // 写入本地
    await cursorProclistService.writeSample(localSample);
    
    // 上报后端
    if (backendReportingEnabled && localSample) 
        enqueueBackendSample(localSample);
}
```

### 1.4 采集的数据

每份样本 (Sample) 包含:

| 字段 | 说明 | 是否隐私 |
|------|------|:--------:|
| rows | 进程列表 | ✅ |
| remoteOs | 远程 OS（如有） | ✅ |
| remoteAuthority | 远程连接标识 | ✅ |

每行 (row):
```
{ pid, ppid, name, cpu, memory, argv(被清除), ... }
```

**关键**: `argv` 在采集后被设为 `undefined`，不包含命令行参数。

### 1.5 远程进程对比

```javascript
// 将远程样本与本地样本合并去重
const merged = mergeLocalAndRemote(localSample, remoteSample);
// 过滤 argv 保护隐私
filterSampleArgv(sample);  // 将 argv 设为 void 0
```

### 1.6 第21轮总结

| 发现 | 重要度 |
|------|:------:|
| **进程列表定期采集** | ⭐⭐ 每 N 秒采集系统进程 |
| **命令行参数被清空** | ⭐ 隐私保护 |
| **Statsig 控制频率** | ⭐ 动态配置 |
| **远程进程对比** | ⭐ 本地 vs 远程去重 |

*第21轮分析，2026-06-17*
*覆盖: 进程列表采集机制*