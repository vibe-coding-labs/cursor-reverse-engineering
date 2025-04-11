/**
 * tiktoken.js
 * WebAssembly模块加载器
 * 
 * 本文件负责加载tiktoken的WebAssembly模块并提供接口供JavaScript调用
 * tiktoken是OpenAI开发的高性能标记化库，用于将文本分解为标记(tokens)
 * 通过WebAssembly实现，可提供比纯JavaScript更高的性能
 */

// 导入Node.js核心模块
const path = require('path');  // 用于处理文件路径
const fs = require('fs');      // 用于文件系统操作
// 导入WebAssembly绑定模块
const tiktoken_bg = require('./tiktoken_bg');

/**
 * 设置模块导入映射
 * 这将tiktoken_bg.js模块映射到WebAssembly导入对象中
 * WebAssembly模块需要这个映射来访问JavaScript函数
 */
let imports = {};
imports["./tiktoken_bg.js"] = tiktoken_bg;

/**
 * 查找WebAssembly文件路径
 * 尝试多个可能的位置来定位tiktoken_bg.wasm文件
 */
// 存储可能的WebAssembly文件路径
const possibleWasmPaths = [];

// 首先添加当前目录下的路径，最直接的查找位置
possibleWasmPaths.push(path.join(__dirname, "./tiktoken_bg.wasm"));

// 搜索可能的node_modules目录路径
// 这是为了处理不同的安装场景，尤其是在开发环境中
const directoryParts = __dirname.split(path.sep);
directoryParts.forEach((part, index, parts) => {
    const currentPath = parts.slice(0, index + 1).join(path.sep) + path.sep;
    // 跳过已经在node_modules中的路径，避免重复
    if (!currentPath.includes("node_modules" + path.sep)) {
        // 添加标准node_modules路径中的tiktoken wasm文件
        possibleWasmPaths.unshift(
            path.join(
                currentPath,
                "node_modules",
                "@dqbd",
                "tiktoken",
                "",
                "./tiktoken_bg.wasm"
            )
        );
    }
});

/**
 * 尝试读取WebAssembly文件
 * 按顺序检查所有可能的路径，直到找到可用的文件
 */
let wasmBytes = null;
for (const wasmPath of possibleWasmPaths) {
    try {
        // 尝试读取WebAssembly文件
        wasmBytes = fs.readFileSync(wasmPath);
        // 找到文件后停止搜索
        break;
    } catch {
        // 如果读取失败，继续尝试下一个路径
        // 静默忽略错误，因为我们只需要找到一个可用的文件
    }
}

// 如果所有路径都失败，抛出错误
if (wasmBytes == null) {
    throw new Error("Missing tiktoken_bg.wasm");
}

/**
 * 编译和实例化WebAssembly模块
 * 将二进制数据转换为可执行的WebAssembly模块
 */
// 编译WebAssembly模块
const wasmModule = new WebAssembly.Module(wasmBytes);
// 使用准备好的导入对象实例化模块
const wasmInstance = new WebAssembly.Instance(wasmModule, imports);

// 设置WebAssembly实例到tiktoken_bg模块
// 这让JavaScript代码可以调用WebAssembly中实现的函数
tiktoken_bg.__wbg_set_wasm(wasmInstance.exports);

/**
 * 导出tiktoken的主要函数
 * 这些函数是其他模块使用tiktoken库的主要接口
 */
module.exports = {
    // 获取指定名称的编码器（如"cl100k_base"）
    get_encoding: tiktoken_bg.get_encoding,
    // 根据模型名称获取合适的编码器（如"gpt-4"）
    encoding_for_model: tiktoken_bg.encoding_for_model,
    // 底层Tiktoken类，用于直接操作编码器
    Tiktoken: tiktoken_bg.Tiktoken
}; 