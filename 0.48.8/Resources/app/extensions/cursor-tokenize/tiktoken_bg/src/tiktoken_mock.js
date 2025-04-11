/**
 * tiktoken_mock.js
 * tiktoken编码器的JavaScript模拟实现
 * 
 * 此文件提供了一个简化版的tiktoken实现，用于理解其基本原理
 * 真实的tiktoken使用WebAssembly实现，性能更高，功能更完整
 */

// 导入必要的Node.js模块
const util = require('util');

// 如果在Node.js环境中，使用Buffer替代TextEncoder/TextDecoder
const textEncoder = {
    encode: (str) => {
        return Buffer.from(str);
    }
};

/**
 * 简化版的BPE (Byte Pair Encoding) 实现
 * 用于模拟tiktoken的核心算法
 */
class BPEEncoder {
    constructor(merges, vocab) {
        this.merges = merges;
        this.vocab = vocab;
        this.inverseVocab = Object.fromEntries(
            Object.entries(vocab).map(([k, v]) => [v, k])
        );
    }
    
    /**
     * 编码字符串为token IDs
     * @param {string} text - 要编码的文本
     * @returns {number[]} - token ID数组
     */
    encode(text) {
        // 先将文本转换为UTF-8字节序列
        const bytes = textEncoder.encode(text);
        // 将字节序列转换为字符串表示，方便处理
        let parts = Array.from(bytes).map(b => b.toString());
        
        // 应用合并规则
        for (const [pair, newToken] of this.merges) {
            const [first, second] = pair.split(' ');
            let i = 0;
            
            while (i < parts.length - 1) {
                if (parts[i] === first && parts[i + 1] === second) {
                    parts.splice(i, 2, newToken);
                } else {
                    i++;
                }
            }
        }
        
        // 查找每个部分对应的token ID
        return parts.map(part => this.vocab[part] || 0);
    }
    
    /**
     * 解码token IDs为字符串
     * @param {number[]} tokens - token ID数组
     * @returns {Buffer} - 解码后的UTF-8字节序列
     */
    decode(tokens) {
        // 将每个token ID转换回字节序列
        const byteArrays = tokens.map(token => {
            const str = this.inverseVocab[token] || '';
            // 将字符串表示转回字节
            return str.split('_').map(b => parseInt(b, 10));
        });
        
        // 扁平化字节数组
        const bytes = byteArrays.flat();
        return Buffer.from(bytes);
    }
}

/**
 * 简化版的tiktoken库
 * 提供类似原始tiktoken的接口
 */
class TiktokenMock {
    constructor() {
        // 预定义的编码器
        this.encodings = {
            // 简化版的cl100k_base编码器
            'cl100k_base': new BPEEncoder(
                // 非常简化的合并规则
                [
                    ['72 101', '72_101'], // He
                    ['108 108', '108_108'], // ll
                    ['72_101 108', '72_101_108'], // Hel
                    ['72_101_108 108_108', '72_101_108_108_108'], // Hello
                    ['119 111', '119_111'], // wo
                    ['114 108', '114_108'], // rl
                    ['119_111 114_108', '119_111_114_108'], // worl
                    ['119_111_114_108 100', '119_111_114_108_100'], // world
                ],
                // 非常简化的词汇表
                {
                    // 基本字节
                    '32': 0,  // 空格
                    '33': 1,  // !
                    '44': 2,  // ,
                    '72': 3,  // H
                    '101': 4, // e
                    '108': 5, // l
                    '111': 6, // o
                    '119': 7, // w
                    '114': 8, // r
                    '100': 9, // d
                    // 合并的token
                    '72_101': 10,        // He
                    '108_108': 11,       // ll
                    '72_101_108': 12,    // Hel
                    '72_101_108_108_108': 13, // Hello
                    '119_111': 14,       // wo
                    '114_108': 15,       // rl
                    '119_111_114_108': 16,    // worl
                    '119_111_114_108_100': 17  // world
                }
            ),
            
            // gpt-4预设
            'gpt-4': null  // 会在运行时设置为cl100k_base
        };
        
        // 设置模型使用的编码器
        this.encodings['gpt-4'] = this.encodings['cl100k_base'];
    }
    
    /**
     * 获取指定名称的编码器
     * @param {string} encoding_name - 编码器名称
     * @returns {BPEEncoder} - 编码器实例
     */
    get_encoding(encoding_name) {
        const encoding = this.encodings[encoding_name];
        if (!encoding) {
            throw new Error(`未知的编码器: ${encoding_name}`);
        }
        return encoding;
    }
    
    /**
     * 获取特定模型使用的编码器
     * @param {string} model_name - 模型名称
     * @returns {BPEEncoder} - 编码器实例
     */
    encoding_for_model(model_name) {
        if (model_name.startsWith('gpt-')) {
            return this.encodings['cl100k_base'];
        }
        throw new Error(`未知的模型: ${model_name}`);
    }
}

// 创建并导出tiktoken实例
const tiktoken = new TiktokenMock();
module.exports = tiktoken;

// 示例用法
if (require.main === module) {
    // 获取编码器
    console.log('tiktoken模拟器演示:');
    const encoder = tiktoken.get_encoding('cl100k_base');
    
    // 编码示例文本
    const text = "Hello, world!";
    const tokens = encoder.encode(text);
    console.log(`\n文本 "${text}" 的tokens:`, tokens);
    
    // 解码回文本
    const decoded = encoder.decode(tokens).toString();
    console.log(`\n解码结果: "${decoded}"`);
    
    // 计算token数量
    console.log(`\ntoken数量: ${tokens.length}`);
} 