/**
 * wasm_analyzer.js
 * WebAssembly二进制分析工具
 * 
 * 该脚本用于分析tiktoken_bg.wasm的二进制结构和内部功能
 */

const fs = require('fs');
const path = require('path');

/**
 * WebAssembly二进制分析器
 * 用于解析wasm二进制文件并提供其结构和功能信息
 */
class WasmAnalyzer {
    /**
     * 构造函数
     * @param {string} wasmPath - wasm文件路径
     */
    constructor(wasmPath) {
        this.wasmPath = wasmPath;
        this.wasmBuffer = null;
        this.view = null;
        this.sections = [];
        this.types = [];
        this.functions = [];
        this.exports = [];
        this.imports = [];
        this.offset = 0;
    }

    /**
     * 加载并解析WASM文件
     */
    async analyze() {
        // 读取wasm文件
        this.wasmBuffer = fs.readFileSync(this.wasmPath);
        this.view = new DataView(this.wasmBuffer.buffer);
        
        console.log(`WASM文件大小: ${this.wasmBuffer.length} 字节`);
        
        // 验证魔数(magic number)
        if (!this.validateMagicNumber()) {
            throw new Error('无效的WASM文件: 魔数不匹配');
        }
        
        // 验证版本
        const version = this.readVersion();
        console.log(`WASM版本: ${version}`);
        
        // 解析各个部分
        this.parseSections();
        
        // 输出总结
        this.printSummary();
    }
    
    /**
     * 验证WASM魔数
     * @returns {boolean} 是否是有效的WASM文件
     */
    validateMagicNumber() {
        // WASM的魔数是 0x00 0x61 0x73 0x6D ("\0asm")
        const magic = [0x00, 0x61, 0x73, 0x6D];
        for (let i = 0; i < 4; i++) {
            if (this.wasmBuffer[i] !== magic[i]) {
                return false;
            }
        }
        this.offset = 4; // 跳过魔数
        return true;
    }
    
    /**
     * 读取WASM版本
     * @returns {string} 版本号
     */
    readVersion() {
        const version = [];
        for (let i = 0; i < 4; i++) {
            version.push(this.wasmBuffer[this.offset++]);
        }
        return version.join('.');
    }
    
    /**
     * 解析所有部分
     */
    parseSections() {
        while (this.offset < this.wasmBuffer.length) {
            const sectionId = this.wasmBuffer[this.offset++];
            const sectionSize = this.readLEB128();
            const sectionStart = this.offset;
            
            // 根据部分ID处理不同类型的部分
            const section = {
                id: sectionId,
                size: sectionSize,
                start: sectionStart,
                end: sectionStart + sectionSize,
                name: this.getSectionName(sectionId)
            };
            
            this.sections.push(section);
            
            // 解析特定部分
            switch (sectionId) {
                case 1: // 类型部分
                    this.parseTypeSection(section);
                    break;
                case 2: // 导入部分
                    this.parseImportSection(section);
                    break;
                case 3: // 函数部分
                    this.parseFunctionSection(section);
                    break;
                case 7: // 导出部分
                    this.parseExportSection(section);
                    break;
                default:
                    // 跳过其他部分
                    break;
            }
            
            // 移动到下一个部分
            this.offset = section.end;
        }
    }
    
    /**
     * 获取部分名称
     * @param {number} id - 部分ID
     * @returns {string} 部分名称
     */
    getSectionName(id) {
        const sectionNames = {
            0: "Custom",
            1: "Type",
            2: "Import", 
            3: "Function",
            4: "Table",
            5: "Memory", 
            6: "Global",
            7: "Export",
            8: "Start",
            9: "Element",
            10: "Code",
            11: "Data",
            12: "DataCount"
        };
        return sectionNames[id] || `Unknown(${id})`;
    }
    
    /**
     * 解析类型部分
     * @param {Object} section - 部分信息
     */
    parseTypeSection(section) {
        const sectionEnd = section.end;
        const typeCount = this.readLEB128();
        console.log(`\n类型部分: ${typeCount} 个类型`);
        
        for (let i = 0; i < typeCount && this.offset < sectionEnd; i++) {
            // 0x60表示函数类型
            const form = this.wasmBuffer[this.offset++];
            
            if (form === 0x60) {
                const paramCount = this.readLEB128();
                const params = [];
                for (let j = 0; j < paramCount; j++) {
                    params.push(this.readLEB128());
                }
                
                const returnCount = this.readLEB128();
                const returns = [];
                for (let j = 0; j < returnCount; j++) {
                    returns.push(this.readLEB128());
                }
                
                this.types.push({
                    index: i,
                    params: params.map(this.getTypeName),
                    returns: returns.map(this.getTypeName)
                });
            }
        }
        
        // 输出部分类型信息
        this.types.slice(0, 5).forEach(type => {
            console.log(`  类型[${type.index}]: (${type.params.join(', ')}) -> (${type.returns.join(', ')})`);
        });
        if (this.types.length > 5) {
            console.log(`  ... 剩余 ${this.types.length - 5} 个类型 ...`);
        }
    }
    
    /**
     * 解析导入部分
     * @param {Object} section - 部分信息
     */
    parseImportSection(section) {
        const sectionEnd = section.end;
        const importCount = this.readLEB128();
        console.log(`\n导入部分: ${importCount} 个导入`);
        
        for (let i = 0; i < importCount && this.offset < sectionEnd; i++) {
            // 读取模块名
            const moduleNameLength = this.readLEB128();
            const moduleNameBytes = this.wasmBuffer.slice(this.offset, this.offset + moduleNameLength);
            const moduleName = new TextDecoder().decode(moduleNameBytes);
            this.offset += moduleNameLength;
            
            // 读取字段名
            const fieldNameLength = this.readLEB128();
            const fieldNameBytes = this.wasmBuffer.slice(this.offset, this.offset + fieldNameLength);
            const fieldName = new TextDecoder().decode(fieldNameBytes);
            this.offset += fieldNameLength;
            
            // 读取导入类型和索引
            const importType = this.wasmBuffer[this.offset++];
            let importInfo = {};
            
            switch (importType) {
                case 0: // 函数导入
                    const typeIndex = this.readLEB128();
                    importInfo = { type: 'function', typeIndex };
                    break;
                case 1: // 表导入
                    importInfo = { type: 'table' };
                    this.offset++; // 跳过表类型
                    // 读取表限制
                    this.readTableLimits();
                    break;
                case 2: // 内存导入
                    importInfo = { type: 'memory' };
                    // 读取内存限制
                    this.readMemoryLimits();
                    break;
                case 3: // 全局导入
                    importInfo = { type: 'global' };
                    this.offset++; // 跳过值类型
                    this.offset++; // 跳过是否可变
                    break;
            }
            
            this.imports.push({
                index: i,
                module: moduleName,
                field: fieldName,
                ...importInfo
            });
        }
        
        // 输出所有导入信息
        this.imports.forEach(imp => {
            console.log(`  导入[${imp.index}]: ${imp.module}.${imp.field} (${imp.type}${imp.typeIndex !== undefined ? ` 类型索引: ${imp.typeIndex}` : ''})`);
        });
    }
    
    /**
     * 解析函数部分
     * @param {Object} section - 部分信息
     */
    parseFunctionSection(section) {
        const sectionEnd = section.end;
        const functionCount = this.readLEB128();
        console.log(`\n函数部分: ${functionCount} 个函数`);
        
        for (let i = 0; i < functionCount && this.offset < sectionEnd; i++) {
            const typeIndex = this.readLEB128();
            this.functions.push({
                index: i + this.imports.filter(imp => imp.type === 'function').length, // 函数索引从导入的函数开始计数
                typeIndex
            });
        }
        
        // 输出部分函数信息
        this.functions.slice(0, 5).forEach(func => {
            const typeInfo = this.types[func.typeIndex];
            const signature = typeInfo ? 
                `(${typeInfo.params.join(', ')}) -> (${typeInfo.returns.join(', ')})` :
                '未知类型';
            console.log(`  函数[${func.index}]: 类型[${func.typeIndex}] ${signature}`);
        });
        if (this.functions.length > 5) {
            console.log(`  ... 剩余 ${this.functions.length - 5} 个函数 ...`);
        }
    }
    
    /**
     * 解析导出部分
     * @param {Object} section - 部分信息
     */
    parseExportSection(section) {
        const sectionEnd = section.end;
        const exportCount = this.readLEB128();
        console.log(`\n导出部分: ${exportCount} 个导出`);
        
        for (let i = 0; i < exportCount && this.offset < sectionEnd; i++) {
            // 读取导出名
            const nameLength = this.readLEB128();
            const nameBytes = this.wasmBuffer.slice(this.offset, this.offset + nameLength);
            const name = new TextDecoder().decode(nameBytes);
            this.offset += nameLength;
            
            // 读取导出类型和索引
            const exportType = this.wasmBuffer[this.offset++];
            const exportTypeStr = ['function', 'table', 'memory', 'global'][exportType] || 'unknown';
            const index = this.readLEB128();
            
            this.exports.push({
                name,
                type: exportTypeStr,
                index
            });
        }
        
        // 输出所有导出信息
        this.exports.forEach(exp => {
            console.log(`  导出: "${exp.name}" (${exp.type} 索引: ${exp.index})`);
        });
    }
    
    /**
     * 读取表限制
     */
    readTableLimits() {
        const flags = this.wasmBuffer[this.offset++];
        this.readLEB128(); // 最小值
        if (flags & 0x01) {
            this.readLEB128(); // 最大值
        }
    }
    
    /**
     * 读取内存限制
     */
    readMemoryLimits() {
        const flags = this.wasmBuffer[this.offset++];
        this.readLEB128(); // 最小值
        if (flags & 0x01) {
            this.readLEB128(); // 最大值
        }
    }
    
    /**
     * 读取LEB128编码的数字
     * 用于读取WebAssembly中的可变长度整数
     * @returns {number} 解码后的整数
     */
    readLEB128() {
        let result = 0;
        let shift = 0;
        let byte;
        
        do {
            byte = this.wasmBuffer[this.offset++];
            result |= (byte & 0x7F) << shift;
            shift += 7;
        } while (byte & 0x80);
        
        return result;
    }
    
    /**
     * 获取WebAssembly类型名称
     * @param {number} typeCode - 类型代码
     * @returns {string} 类型名称
     */
    getTypeName(typeCode) {
        const types = {
            0x7F: 'i32',
            0x7E: 'i64',
            0x7D: 'f32',
            0x7C: 'f64',
            0x70: 'anyfunc',
            0x6F: 'anyref',
            0x7B: 'v128'
        };
        return types[typeCode] || `unknown(${typeCode})`;
    }
    
    /**
     * 打印wasm文件分析总结
     */
    printSummary() {
        console.log('\n===== WASM文件分析总结 =====');
        console.log(`文件大小: ${this.wasmBuffer.length} 字节`);
        console.log(`部分数量: ${this.sections.length}`);
        console.log(`类型定义: ${this.types.length}`);
        console.log(`函数定义: ${this.functions.length}`);
        console.log(`导入项: ${this.imports.length}`);
        console.log(`导出项: ${this.exports.length}`);
        
        // 打印tiktoken相关的导出函数
        console.log('\n主要tiktoken导出函数:');
        this.exports
            .filter(exp => exp.type === 'function' && exp.name.startsWith('tiktoken_'))
            .forEach(exp => {
                console.log(`  ${exp.name}`);
            });
    }
}

/**
 * 主函数
 */
async function main() {
    console.log('tiktoken_bg.wasm 二进制分析');
    console.log('=========================\n');
    
    try {
        const wasmPath = path.join(__dirname, '..', 'tiktoken_bg.wasm');
        const analyzer = new WasmAnalyzer(wasmPath);
        await analyzer.analyze();
    } catch (error) {
        console.error('分析失败:', error);
    }
}

// 运行主函数
main(); 