/**
 * Tokenizer.js
 * 标记化器实现文件
 * 
 * 本文件实现了将文本转换为AI模型可以理解的标记(tokens)的核心功能
 * 它支持多种OpenAI模型使用的编码器，通过tiktoken库实现高效的标记化
 * 这是cursor-tokenize扩展的核心功能组件
 */

// 导入tiktoken库，该库负责实际的标记化处理
const tiktoken = require('./tiktoken');

/**
 * 定义三种主要的标记化器常量
 * 这些常量代表不同的OpenAI模型使用的编码器
 */
// GPT-4使用的编码器，最新的编码方案，支持10万+词汇
const CLK_TOKENIZER = tiktoken.get_encoding("cl100k_base"); 
// 某些GPT-3.5模型使用的编码器，改进的GPT-2编码方案
const P50_TOKENIZER = tiktoken.get_encoding("p50k_base");   
// 最初的GPT-2模型使用的编码器，基础编码方案
const GPT2_TOKENIZER = tiktoken.get_encoding("gpt2");       

/**
 * 根据模型名称获取对应的标记化器实例
 * 支持选择不同的编码器以匹配特定的AI模型
 * 
 * @param {string} name - 模型名称，如"gpt2"、"p50k_base"或"cl100k_base"
 * @returns {Object} - 对应的标记化器实例
 * @throws {Error} - 如果请求不支持的模型，如"r50k_base"
 */
function getTokenizerFromName(name) {
    switch (name) {
        case "gpt2":
            return GPT2_TOKENIZER;
        case "p50k_base":
            return P50_TOKENIZER;
        case "cl100k_base":
            return CLK_TOKENIZER;
        case "r50k_base":
            // 此模型不支持，抛出错误
            throw new Error("r50k_base not supported");
    }
}

/**
 * 标记化器类
 * 负责将文本转换为AI模型可以理解的标记序列
 * 这是敏感数据处理和AI代码理解的基础
 */
class Tokenizer {
    /**
     * 将文本标记化为标记ID和对应的文本片段
     * 这是标记化器的核心方法
     * 
     * @param {string} text - 要标记化的文本
     * @param {string} modelName - 标记化模型名称，用于选择正确的编码器
     * @returns {Array} - 标记化结果数组，每个元素包含{text:文本片段, token:标记ID}
     */
    tokenize(text, modelName) {
        // 根据指定的模型名称获取对应的标记化器
        const tokenizer = getTokenizerFromName(modelName);
        
        // 使用"all"模式将文本编码为标记ID数组
        // "all"模式表示包括特殊标记在内的所有标记
        const tokens = tokenizer.encode(text, "all");
        
        // 将每个标记ID转换为对应的文本表示和ID对
        const result = [];
        for (const token of tokens) {
            // 创建单个标记ID的Uint32Array，用于解码
            const tokenArray = new Uint32Array([token]);
            
            // 将标记ID解码回文本表示
            // 使用TextDecoder将二进制数据转换为字符串
            result.push({
                // 标记对应的原始文本片段
                text: (new TextDecoder).decode(tokenizer.decode(tokenArray)),
                // 标记的数值ID
                token: token
            });
        }
        
        // 返回完整的标记化结果数组
        return result;
    }
}

// 导出模块中的类和函数，使其可被其他模块使用
module.exports = {
    // 主标记化器类
    Tokenizer,
    // 根据名称获取标记化器的辅助函数
    getTokenizerFromName,
    // 三种预定义的标记化器常量
    CLK_TOKENIZER,
    P50_TOKENIZER,
    GPT2_TOKENIZER
}; 