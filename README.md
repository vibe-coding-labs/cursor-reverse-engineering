# tiktoken_bg.wasm逆向工程分析

本项目对Cursor编辑器中使用的tiktoken_bg.wasm文件进行了逆向工程分析，以了解其实现方式和功能。

## 项目内容

- `tiktoken_bg.wasm` - 原始WebAssembly二进制文件
- `tiktoken_bg.js` - WebAssembly的JavaScript绑定层
- `tiktoken.js` - JavaScript高级API
- `src/tiktoken_bg.wat` - 使用wasm2wat工具生成的WebAssembly文本格式
- `src/tiktoken_mock.js` - 简化的JavaScript模拟实现
- `src/simple_test.js` - 简单的测试脚本
- `src/wasm_analyzer.js` - WebAssembly二进制分析工具
- `逆向分析报告.md` - 详细的分析报告

## 主要发现

1. tiktoken是OpenAI开发的文本tokenization库，用于将文本转换为tokens(标记)
2. 使用Byte Pair Encoding (BPE)算法进行tokenization
3. 核心功能在WebAssembly中实现，提供高性能
4. JavaScript胶水代码提供内存管理和对象缓存机制
5. 支持多种编码方案，如cl100k_base, p50k_base等

## 主要功能

tiktoken_bg.wasm导出的主要函数包括：

- `tiktoken_new` - 创建新的tokenizer实例
- `tiktoken_encode` - 将文本编码为tokens
- `tiktoken_decode` - 将tokens解码为文本
- `get_encoding` - 获取指定编码器
- `encoding_for_model` - 获取特定模型的编码器

## 如何使用分析工具

```
# 运行简单的测试脚本
node src/simple_test.js

# 运行模拟实现
node src/tiktoken_mock.js

# 运行WebAssembly分析工具
node src/wasm_analyzer.js
```

## BPE算法简介

Byte Pair Encoding是一种数据压缩算法，在NLP领域用于标记化(tokenization)：

1. 从文本的UTF-8字节序列开始
2. 识别最常见的字节对，并将它们替换为词汇表中的单一token
3. 重复此过程，直到所有可能的合并都完成
4. 对于新文本，应用相同的合并规则生成token序列

## 参考资料

- [OpenAI Tokenizer](https://platform.openai.com/tokenizer)
- [tiktoken GitHub仓库](https://github.com/openai/tiktoken)
- [WebAssembly文档](https://webassembly.org/docs/)



安装文件在：
/Applications/Cursor.app/

个人信息放在：
~/Library/Application Support/Cursor








