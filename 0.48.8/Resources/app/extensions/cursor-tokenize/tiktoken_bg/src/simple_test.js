/**
 * simple_test.js
 * 简单的测试脚本，用于分析tiktoken_bg.wasm文件
 */

console.log('简单的tiktoken_bg.wasm分析');
console.log('==========================\n');

// 显示WASM文件信息
const fs = require('fs');
const path = require('path');

try {
    // 获取wasm文件大小
    const wasmPath = path.join(__dirname, '..', 'tiktoken_bg.wasm');
    const stats = fs.statSync(wasmPath);
    console.log(`WASM文件大小: ${stats.size} 字节`);
    
    // 读取WAT文件的部分内容
    const watPath = path.join(__dirname, 'tiktoken_bg.wat');
    const watContent = fs.readFileSync(watPath, 'utf8');
    
    // 分析导出
    const exportLines = watContent.split('\n').filter(line => line.includes('(export'));
    console.log(`\n导出函数数量: ${exportLines.length}`);
    console.log('\n主要导出函数:');
    exportLines
        .filter(line => line.includes('tiktoken_') || line.includes('encoding'))
        .slice(0, 10)
        .forEach(line => console.log(`  ${line.trim()}`));
    
    // 分析导入
    const importLines = watContent.split('\n').filter(line => line.includes('(import'));
    console.log(`\n导入函数数量: ${importLines.length}`);
    console.log('\n导入函数:');
    importLines.forEach(line => console.log(`  ${line.trim()}`));
    
    console.log('\n分析完成');
} catch (error) {
    console.error('分析失败:', error);
} 