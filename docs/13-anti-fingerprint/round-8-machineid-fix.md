# Cursor 风控、设备指纹与遥测机制分析 (第8轮)

## 一、machineId 完整生成链路

### 1.1 主 machineId (serviceMachineId)

Cursor/VSCode 使用自己的 machineId 实现，**不依赖 OpenTelemetry**：

```javascript
async function getServiceMachineId(storageService, fileService, environmentService) {
    // 第一步: 从存储读取
    let id = storageService?.get("storage.serviceMachineId", -1);
    if (id) return id;
    
    // 第二步: 从文件读取（ServiceMachineIdResource）
    try {
        const content = (await fileService.readFile(env.serviceMachineIdResource)).value.toString();
        id = isValidUUID(content) ? content : null;
    } catch {
        id = null;
    }
    
    // 第三步: 如果都不存在，生成新的 UUIDv4
    if (!id) {
        id = Xr();  // UUIDv4
        try {
            await fileService.writeFile(env.serviceMachineIdResource, 
                fo.fromString(id));
        } catch {}
    }
    
    // 第四步: 缓存到存储
    storageService?.store("storage.serviceMachineId", id, -1, 1);
    return id;
}
```

### 1.2 实际 machineid 文件

在 Linux 上运行 Cursor 后，实际生成的 machineid 文件内容：

```
/tmp/cursor-test-home/.config/Cursor/machineid
→ e1001853-1a53-4b00-a830-53270dfe271b
```

这是一个 **UUIDv4**，不是从 `/etc/machine-id` 读取的系统 ID。

### 1.3 TelemetryService 的公共属性

```javascript
const commonProperties = {
    "common.machineId": serviceMachineId,       // VSCode 生成的 UUIDv4
    "common.macMachineId": macMachineId,        // macOS 特有，Linux/Win 为空
    "common.sqmId": sqmId,                      // SQM ID（微软质量指标）
    "common.devDeviceId": devDeviceId,          // 设备 ID
    sessionID: Xr() + Date.now(),                // 会话 UUID + 时间戳
    commitHash: "e48ee61...",                    // 构建版本
    version: "3.7.27",                           // 版本号
    "common.platformVersion": "20.04",           // 系统版本
    "common.platform": "linux",                  // 平台
    "common.nodePlatform": "linux",              // Node 平台
    "common.nodeArch": "x64",                    // 架构
    "common.product": "cursor"                   // 产品名
};
```

### 1.4 真正的指纹来源总结

| 标识符 | 生成方式 | 持久化位置 | 唯一性 |
|--------|---------|-----------|:------:|
| **serviceMachineId** | UUIDv4，首次运行时生成 | `~/.config/Cursor/machineid` + Storage | 每台安装一次 |
| macMachineId | macOS `ioreg IOPlatformUUID` | macOS Keychain | 硬件绑定 |
| sqmId | 系统 SQM ID | 系统级 | Windows 特有 |
| devDeviceId | 浏览器 Cookie | `_ca_device_id` | Web 端 |
| sessionID | UUIDv4 + 时间戳 | 内存（每次启动变化） | 临时 |
| OpenTelemetry machineId | `/etc/machine-id` | 系统文件 | 硬件绑定（未写入 Cursor） |

### 1.5 关键结论

**Cursor 的 machineId 不是硬件指纹**，而是一个**首次运行时生成的随机 UUID**。`/etc/machine-id` 由 OpenTelemetry 库读取用于资源检测，但**没有直接作为 Cursor 的 machineId 使用**。之前我搞混了这两者。

---

## 二、遥测上报链路

### 2.1 上报流程

```
扩展进程 (Extension Host)
  ↓ IPC: $sendEnvelope / $captureException
主进程 (Main Process)
  ↓ TelemetryService.commonProperties (包含 machineId, sessionID 等)
  ↓ 通过 appender 发送到:
    - API: api2.cursor.sh (分析服务)
    - Sentry: sentry.io (错误追踪)
    - Statsig: api3.cursor.sh (功能开关/实验)
```

### 2.2 TelemetryService 初始化

```javascript
this.sessionId = this._commonProperties.sessionID;
this.machineId = this._commonProperties["common.machineId"];
this.macMachineId = this._commonProperties["common.macMachineId"];
this.sqmId = this._commonProperties["common.sqmId"];
this.devDeviceId = this._commonProperties["common.devDeviceId"];
this.firstSessionDate = this._commonProperties["common.firstSessionDate"];
```

### 2.3 product.json 中的遥测控制

```json
{
  "enableTelemetry": true,
  "enabledTelemetryLevels": { "error": true, "usage": true },
  "removeTelemetryMachineId": true
}
```

`removeTelemetryMachineId: true` 表示**正常情况下不上报 machineId**（隐私保护）。

---

## 三、第8轮新增发现汇总

| 发现 | 重要度 |
|------|:------:|
| **machineId 是随机 UUIDv4，非硬件指纹** | ⭐⭐⭐ 纠正之前的错误结论 |
| **Cursor 首次运行时生成 machineid 文件**到 `~/.config/Cursor/machineid` | ⭐⭐ 确认持久化路径 |
| **`removeTelemetryMachineId: true`** 默认不上报 machineId | ⭐⭐⭐ 隐私保护机制 |
| TelemetryService 完整初始化代码 | ⭐⭐ |
| OpenTelemetry 读取 `/etc/machine-id` 但 Cursor 不使用 | ⭐⭐ 纠正混淆 |

*第8轮分析，2026-06-16*
*核心修正: machineId 是随机 UUIDv4 非硬件指纹*
