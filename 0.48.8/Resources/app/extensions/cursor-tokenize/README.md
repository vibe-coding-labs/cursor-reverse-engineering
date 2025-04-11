# Cursor本地敏感数据清理服务

**注意：** 此扩展与Cursor捆绑。它可以被禁用但不能被卸载。

## 功能概述

cursor-tokenize是Cursor的核心扩展，主要提供以下功能：

1. **本地标记化处理**：将代码和文本转换为AI模型可以理解的标记(tokens)
2. **敏感数据过滤**：在代码发送到AI服务器前，本地清理和屏蔽敏感信息
3. **性能优化**：使用WebAssembly进行高效标记化处理

## 技术实现

### 核心组件

- **Tokenizer类**：实现基本的标记化功能
- **ControlProvider类**：注册为VSCode控制提供程序，公开标记化API
- **tiktoken_bg.wasm**：2.8MB的WebAssembly模块，提供高性能标记化算法

### 标记化方法

扩展使用OpenAI的tiktoken库（或其变种）实现标记化，支持多种编码器：

- `cl100k_base`（CLK_TOKENIZER）：GPT-4使用的编码器
- `p50k_base`（P50_TOKENIZER）：一些较早的GPT-3.5模型使用的编码器
- `gpt2`（GPT2_TOKENIZER）：最初的GPT-2编码器

通过`tokenizeBPE`方法，扩展可以使用指定的编码器对文本进行分词，返回包含文本和对应token ID的数组。

### 安全特性

作为敏感数据清理服务，该扩展可能执行以下操作：

1. 识别并移除密钥、密码和个人身份信息
2. 过滤掉注释中的敏感数据
3. 在发送到AI服务器前对代码进行预处理

## 项目结构

```
cursor-tokenize/
├── dist/                  # 编译后的文件
│   └── main.js            # 打包后的扩展入口点(混淆版本)
├── src/                   # 源代码(反混淆版本)
│   ├── extension.js       # 扩展激活和停用逻辑
│   ├── ControlProvider.js # VSCode控制提供程序实现
│   ├── Tokenizer.js       # 标记化核心实现
│   ├── tiktoken.js        # WebAssembly加载器
│   └── tiktoken_bg.js     # WebAssembly绑定
├── tiktoken_bg.wasm       # WebAssembly二进制文件
├── package.json           # 扩展配置
├── tsconfig.json          # TypeScript配置
├── webpack.config.js      # Webpack构建配置
└── README.md              # 本文件
```

## 构建非混淆版本

要构建非混淆版本的扩展，请按照以下步骤：

1. 安装依赖：
   ```
   npm install
   ```

2. 构建项目：
   ```
   npm run webpack
   ```

这将生成一个新的`dist/main.js`文件，该文件包含非混淆版本的扩展代码。

## 开发备注

- dist/main.js是原始混淆版本。src目录中的文件是根据对原始代码的分析创建的非混淆版本。
- 构建的非混淆版本会替代原始的混淆版本，但保持相同的功能。
- 由于WebAssembly模块(tiktoken_bg.wasm)是二进制文件，其内部逻辑无法直接反混淆。

## 安全考量

作为处理敏感数据的工具，此扩展设计为完全在本地运行。所有敏感数据过滤都在用户的机器上进行，不会将敏感信息发送到外部服务器。

## C++相关功能

扩展中包含与C++相关的方法，但大多数是存根(stub)实现。这些接口可能是为了与Cursor的其他组件交互而保留的，或是计划在未来版本中实现的功能。

## 与Cursor集成

该扩展在Cursor启动时自动激活（`onStartupFinished`），并注册为`cursor-tokenize`控制提供程序。它提供的API可能被cursor-retrieval等其他扩展使用，以支持代码索引和语义搜索功能。

## 性能考量

使用WebAssembly实现核心标记化算法表明对性能有很高要求：

1. 需要快速处理大量代码文件
2. 保持低内存占用
3. 确保实时响应，不影响编辑体验

## 技术细节

- 使用TypeScript开发
- 依赖@dqbd/tiktoken库的WebAssembly实现
- 请求了VSCode的控制API权限(`enabledApiProposals: ["control"]`)

## 安全影响

作为本地敏感数据清理服务，此扩展是Cursor隐私保护机制的重要组成部分，帮助确保敏感信息不会在未经许可的情况下被共享或处理。
