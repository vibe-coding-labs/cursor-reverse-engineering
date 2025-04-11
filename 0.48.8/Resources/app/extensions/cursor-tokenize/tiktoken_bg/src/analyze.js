/**
 * tiktoken_bg.wasm分析脚本
 * 
 * 该脚本用于分析tiktoken_bg.wasm的函数功能和使用方法
 */

const fs = require('fs');
const path = require('path');

// 导入我们需要分析的JS文件
const tiktoken_bg = require('../tiktoken_bg');
const tiktoken = require('../tiktoken');

/**
 * 分析主要导出函数
 * 输出tiktoken_bg.wasm导出的所有函数
 */
function analyzeExports() {
    console.log('===== 分析tiktoken_bg.wasm导出函数 =====');
    
    // 读取WAT文件，提取导出函数信息
    const watPath = path.join(__dirname, 'tiktoken_bg.wat');
    const watContent = fs.readFileSync(watPath, 'utf8');
    
    // 解析导出函数
    const exportMatches = watContent.match(/\(export "[^"]+" \(func \d+\)\)/g);
    if (exportMatches) {
        console.log(`找到${exportMatches.length}个导出函数：`);
        exportMatches.forEach(match => {
            console.log(`  ${match}`);
        });
    }
    
    // 统计和导出有关函数的信息
    console.log('\n主要API函数：');
    ['tiktoken_new', 'tiktoken_encode', 'tiktoken_decode', 'get_encoding', 'encoding_for_model'].forEach(funcName => {
        const funcMatches = watContent.match(new RegExp(`\\(func \\$${funcName} .*?\\)\\)`, 's'));
        if (funcMatches) {
            console.log(`\n${funcName}函数定义：`);
            console.log(funcMatches[0].substring(0, 200) + '...');
        }
    });
}

/**
 * 分析tiktoken JS包装层
 * 分析JavaScript如何与WebAssembly模块交互
 */
function analyzeJSWrapper() {
    console.log('\n===== 分析tiktoken JS包装层 =====');
    
    // 列出tiktoken_bg.js中导出的所有函数
    console.log('tiktoken_bg.js导出函数：');
    Object.keys(tiktoken_bg).filter(key => typeof tiktoken_bg[key] === 'function').forEach(key => {
        console.log(`  ${key}`);
    });
    
    // 尝试分析函数功能
    console.log('\ntiktoken_bg.js关键功能：');
    console.log('  - __wbg_set_wasm: 设置WebAssembly实例');
    console.log('  - get_encoding: 获取指定编码器');
    console.log('  - encoding_for_model: 获取特定模型的编码器');
    console.log('  - Tiktoken类: 主要编码/解码实现');
}

/**
 * 尝试运行示例编码
 * 使用tiktoken encode测试文本
 */
function testTokenization() {
    console.log('\n===== 尝试运行示例编码 =====');
    try {
        // 由于我们不能直接运行wasm，这里只提供接口分析
        console.log('编码流程分析：');
        console.log('1. 初始化WASM模块 (tiktoken.js -> init())');
        console.log('2. 获取编码器 (get_encoding/encoding_for_model)');
        console.log('3. 将文本编码为标记 (encode方法)');
        console.log('4. 返回标记ID数组');
        
        console.log('\n解码流程分析：');
        console.log('1. 传递标记ID数组到WASM');
        console.log('2. 将标记ID转换回字节数组');
        console.log('3. 将字节数组转换为文本');
    } catch (error) {
        console.error('运行示例失败:', error);
    }
}

/**
 * 主函数
 */
function main() {
    console.log('tiktoken_bg.wasm 分析报告');
    console.log('======================\n');
    
    console.log('tiktoken是OpenAI用于将文本转换为标记(tokens)的库');
    console.log('此库使用WebAssembly提供高性能实现\n');
    
    analyzeExports();
    analyzeJSWrapper();
    testTokenization();
    
    console.log('\n======================');
    console.log('分析完成');
}

// 运行主函数
main(); 