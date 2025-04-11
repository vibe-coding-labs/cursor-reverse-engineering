/**
 * tiktoken_bg.js
 * WebAssembly绑定层
 * 
 * 本文件提供JavaScript与tiktoken WebAssembly模块之间的绑定接口
 * 实现了内存管理、字符串传递和核心编码/解码功能
 * 这是tiktoken库的底层实现，为上层API提供支持
 */

// WebAssembly实例引用，由tiktoken.js设置
let wasm;

/**
 * 设置WebAssembly实例
 * 此函数由tiktoken.js调用，用于初始化WebAssembly环境
 * 
 * @param {WebAssembly.Instance.exports} wasmInstance - WebAssembly实例的导出对象
 */
exports.__wbg_set_wasm = function(wasmInstance) {
    wasm = wasmInstance;
};

//===== 对象缓存管理 =====

/**
 * 缓存对象列表
 * 用于在JavaScript和WebAssembly之间传递对象引用
 * 避免在两个环境间重复序列化/反序列化对象
 */
// 预填充128个undefined，然后添加几个常用值
const cachedObjects = new Array(128).fill(undefined);
cachedObjects.push(undefined, null, true, false);
let cachedObjectIndex = cachedObjects.length;

/**
 * 获取缓存的对象
 * 根据索引从缓存中获取对象
 * 
 * @param {number} index - 对象索引
 * @returns {any} - 缓存的对象
 */
function getCachedObject(index) {
    return cachedObjects[index];
}

/**
 * 缓存对象并返回其索引
 * 将JavaScript对象存储在缓存中，以便WebAssembly引用
 * 
 * @param {any} obj - 要缓存的对象
 * @returns {number} - 对象的缓存索引
 */
function cacheObject(obj) {
    // 如果缓存已满，则将新对象追加到缓存末尾
    if (cachedObjectIndex === cachedObjects.length) {
        cachedObjects.push(cachedObjects.length + 1);
    }
    const idx = cachedObjectIndex;
    cachedObjectIndex = cachedObjects[idx];
    cachedObjects[idx] = obj;
    return idx;
}

/**
 * 释放已缓存的对象
 * 回收不再需要的对象索引，清理内存
 * 
 * @param {number} idx - 对象索引
 * @returns {any} - 被释放的对象
 */
function dropObject(idx) {
    const obj = getCachedObject(idx);
    
    // 释放索引以便重用
    function recycleObjectIndex(idx) {
        // 只回收大于特定值的索引，保留常用对象
        if (idx >= 132) {
            cachedObjects[idx] = cachedObjectIndex;
            cachedObjectIndex = idx;
        }
    }
    
    recycleObjectIndex(idx);
    return obj;
}

//===== 内存管理 =====

// WebAssembly内存操作的相关变量
let textStringEncodingPosition = 0;  // 字符串编码位置
let cachedUint8Memory = null;        // Uint8内存缓存

/**
 * 获取Uint8内存视图
 * 提供WebAssembly内存的Uint8视图，用于字节操作
 * 
 * @returns {Uint8Array} - WebAssembly内存的Uint8Array视图
 */
function getUint8Memory() {
    // 惰性初始化，只在需要时创建
    if (cachedUint8Memory === null || cachedUint8Memory.byteLength === 0) {
        cachedUint8Memory = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8Memory;
}

// 文本编码/解码工具
// 根据环境选择适当的编码器实现
let textEncoder = new (typeof TextEncoder !== 'undefined' ? TextEncoder : require('util').TextEncoder)('utf-8');
let textDecoder = new (typeof TextDecoder !== 'undefined' ? TextDecoder : require('util').TextDecoder)('utf-8', { ignoreBOM: true, fatal: true });

/**
 * 解码文本
 * 从WebAssembly内存中解码UTF-8文本
 * 
 * @param {number} ptr - 内存指针
 * @param {number} len - 字节长度
 * @returns {string} - 解码后的文本
 */
function decodeText(ptr, len) {
    return textDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));
}

// Int32内存视图缓存
let cachedInt32Memory = null;
/**
 * 获取Int32内存视图
 * 提供WebAssembly内存的Int32视图，用于整数操作
 * 
 * @returns {Int32Array} - WebAssembly内存的Int32Array视图
 */
function getInt32Memory() {
    if (cachedInt32Memory === null || cachedInt32Memory.byteLength === 0) {
        cachedInt32Memory = new Int32Array(wasm.memory.buffer);
    }
    return cachedInt32Memory;
}

// Uint32内存视图缓存
let cachedUint32Memory = null;
/**
 * 获取Uint32内存视图
 * 提供WebAssembly内存的Uint32视图，用于无符号整数操作
 * 
 * @returns {Uint32Array} - WebAssembly内存的Uint32Array视图
 */
function getUint32Memory() {
    if (cachedUint32Memory === null || cachedUint32Memory.byteLength === 0) {
        cachedUint32Memory = new Uint32Array(wasm.memory.buffer);
    }
    return cachedUint32Memory;
}

/**
 * 获取Uint32数组视图
 * 从WebAssembly内存中提取Uint32数组
 * 
 * @param {number} ptr - 内存指针
 * @param {number} len - 元素数量
 * @returns {Uint32Array} - 指定区域的Uint32Array视图
 */
function getUint32ArrayView(ptr, len) {
    return getUint32Memory().subarray(ptr / 4, ptr / 4 + len);
}

/**
 * 获取Uint8数组视图
 * 从WebAssembly内存中提取Uint8数组
 * 
 * @param {number} ptr - 内存指针
 * @param {number} len - 元素数量
 * @returns {Uint8Array} - 指定区域的Uint8Array视图
 */
function getUint8ArrayView(ptr, len) {
    return getUint8Memory().subarray(ptr / 1, ptr / 1 + len);
}

//===== 核心API实现 =====

/**
 * 获取指定名称的编码器
 * 根据编码器名称创建tiktoken编码器实例
 * 
 * @param {string} encodingName - 编码器名称（如"cl100k_base"）
 * @param {Object} options - 选项对象
 * @returns {TiktokenWrapper} - Tiktoken编码器实例
 * @throws {Error} - 如果WebAssembly未初始化或编码器创建失败
 */
exports.get_encoding = function(encodingName, options) {
    // 检查WebAssembly是否已初始化
    if (wasm == null) {
        throw new Error("@dqbd/tiktoken: WASM binary has not been properly initialized.");
    }
    
    try {
        // 调用WebAssembly函数获取编码器
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const encodingNamePtr = passStringToWasm(encodingName);
        wasm.get_encoding(retptr, encodingNamePtr, textStringEncodingPosition, cacheObject(options));
        
        // 获取返回值
        const r0 = getInt32Memory()[retptr / 4 + 0];  // 返回的编码器指针
        const r1 = getInt32Memory()[retptr / 4 + 1];  // 可能的错误消息
        
        // 检查是否有错误
        if (getInt32Memory()[retptr / 4 + 2]) {
            throw dropObject(r1);
        }
        
        // 包装并返回编码器
        return TiktokenWrapper.__wrap(r0);
    }
    finally {
        // 恢复栈指针
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
};

/**
 * 根据模型名称获取适合的编码器
 * 为特定的AI模型选择合适的编码器
 * 
 * @param {string} modelName - 模型名称（如"gpt-4"）
 * @param {Object} options - 选项对象
 * @returns {TiktokenWrapper} - Tiktoken编码器实例
 * @throws {Error} - 如果WebAssembly未初始化或编码器创建失败
 */
exports.encoding_for_model = function(modelName, options) {
    if (wasm == null) {
        throw new Error("@dqbd/tiktoken: WASM binary has not been properly initialized.");
    }
    
    try {
        // 调用WebAssembly函数根据模型获取编码器
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const modelNamePtr = passStringToWasm(modelName);
        wasm.encoding_for_model(retptr, modelNamePtr, textStringEncodingPosition, cacheObject(options));
        
        // 获取返回值
        const r0 = getInt32Memory()[retptr / 4 + 0];
        const r1 = getInt32Memory()[retptr / 4 + 1];
        
        // 检查是否有错误
        if (getInt32Memory()[retptr / 4 + 2]) {
            throw dropObject(r1);
        }
        
        return TiktokenWrapper.__wrap(r0);
    }
    finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
};

/**
 * Tiktoken编码器包装类
 * 包装WebAssembly实现的编码器，提供JavaScript接口
 * 核心功能包括文本编码和标记解码
 */
class TiktokenWrapper {
    /**
     * 构造函数
     * 创建一个新的tiktoken编码器
     * 
     * @param {string} encoding_name - 编码器名称
     * @param {Object} options - 选项对象
     * @param {string} pat_str - 模式字符串
     * @returns {TiktokenWrapper} - 编码器实例
     */
    constructor(encoding_name, options, pat_str) {
        if (wasm == null) {
            throw new Error("@dqbd/tiktoken: WASM binary has not been properly initialized.");
        }
        
        // 初始化编码器
        const ptr = wasm.tiktoken_new(
            passStringToWasm(encoding_name), 
            textStringEncodingPosition,
            cacheObject(options),
            passStringToWasm(pat_str),
            textStringEncodingPosition
        );
        
        return TiktokenWrapper.__wrap(ptr);
    }
    
    /**
     * 获取编码器名称
     * 
     * @returns {string} - 编码器名称
     */
    get name() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.tiktoken_name(retptr, this.ptr);
            
            const r0 = getInt32Memory()[retptr / 4 + 0];
            const r1 = getInt32Memory()[retptr / 4 + 1];
            
            let result;
            if (r0 !== 0) {
                result = decodeText(r0, r1).slice();
                wasm.__wbindgen_export_2(r0, r1 * 1);
            }
            
            return result;
        }
        finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    
    /**
     * 包装WebAssembly指针
     * 创建一个新的TiktokenWrapper实例，封装WebAssembly对象
     * 
     * @param {number} ptr - WebAssembly对象指针
     * @returns {TiktokenWrapper} - 包装的编码器实例
     */
    static __wrap(ptr) {
        const obj = Object.create(TiktokenWrapper.prototype);
        obj.ptr = ptr;
        return obj;
    }
    
    /**
     * 释放原始指针
     * 将指针从对象中分离，以便单独释放
     * 
     * @returns {number} - 原始WebAssembly指针
     */
    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
    }
    
    /**
     * 释放资源
     * 清理WebAssembly分配的内存
     */
    free() {
        if (wasm == null) {
            throw new Error("@dqbd/tiktoken: WASM binary has not been properly initialized.");
        }
        
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_tiktoken_free(ptr);
    }
    
    /**
     * 对文本进行编码
     * 将文本转换为标记ID数组，这是核心编码功能
     * 
     * @param {string} text - 要编码的文本
     * @param {Object} allowedSpecial - 允许的特殊标记
     * @param {Object} disallowedSpecial - 不允许的特殊标记
     * @returns {Uint32Array} - 编码后的标记ID数组
     */
    encode(text, allowedSpecial, disallowedSpecial) {
        if (wasm == null) {
            throw new Error("@dqbd/tiktoken: WASM binary has not been properly initialized.");
        }
        
        try {
            // 调用WebAssembly编码函数
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            const textPtr = passStringToWasm(text);
            wasm.tiktoken_encode(
                retptr, 
                this.ptr, 
                textPtr, 
                textStringEncodingPosition,
                cacheObject(allowedSpecial),
                cacheObject(disallowedSpecial)
            );
            
            // 获取结果
            const r0 = getInt32Memory()[retptr / 4 + 0];  // 标记数组指针
            const r1 = getInt32Memory()[retptr / 4 + 1];  // 标记数量
            const r2 = getInt32Memory()[retptr / 4 + 2];  // 可能的错误消息
            
            // 检查是否有错误
            if (getInt32Memory()[retptr / 4 + 3]) {
                throw dropObject(r2);
            }
            
            // 获取标记数组并复制为新数组
            const result = getUint32ArrayView(r0, r1).slice();
            // 释放WebAssembly分配的内存
            wasm.__wbindgen_export_2(r0, r1 * 4);
            
            return result;
        }
        finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    
    /**
     * 使用普通模式对文本进行编码
     * 不处理特殊标记，直接编码
     * 
     * @param {string} text - 要编码的文本
     * @returns {Uint32Array} - 编码后的标记ID数组
     */
    encode_ordinary(text) {
        if (wasm == null) {
            throw new Error("@dqbd/tiktoken: WASM binary has not been properly initialized.");
        }
        
        try {
            // 调用WebAssembly普通编码函数
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            const textPtr = passStringToWasm(text);
            wasm.tiktoken_encode_ordinary(retptr, this.ptr, textPtr, textStringEncodingPosition);
            
            // 获取结果
            const r0 = getInt32Memory()[retptr / 4 + 0];
            const r1 = getInt32Memory()[retptr / 4 + 1];
            
            // 获取标记数组并复制为新数组
            const result = getUint32ArrayView(r0, r1).slice();
            wasm.__wbindgen_export_2(r0, r1 * 4);
            
            return result;
        }
        finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    
    /**
     * 解码标记ID数组为文本
     * 将标记ID转换回原始文本
     * 
     * @param {Uint32Array} tokens - 标记ID数组
     * @returns {Uint8Array} - 解码后的文本字节
     */
    decode(tokens) {
        if (wasm == null) {
            throw new Error("@dqbd/tiktoken: WASM binary has not been properly initialized.");
        }
        
        try {
            // 调用WebAssembly解码函数
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            const tokensPtr = passUint32ArrayToWasm(tokens);
            wasm.tiktoken_decode(retptr, this.ptr, tokensPtr, tokens.length);
            
            // 获取结果
            const r0 = getInt32Memory()[retptr / 4 + 0];
            const r1 = getInt32Memory()[retptr / 4 + 1];
            
            // 获取解码结果并复制为新数组
            const result = getUint8ArrayView(r0, r1).slice();
            wasm.__wbindgen_export_2(r0, r1 * 1);
            
            return result;
        }
        finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    
    /**
     * 解码单个标记ID
     * 将单个标记ID转换为其文本表示
     * 
     * @param {number} token - 标记ID
     * @returns {Uint8Array} - 解码后的文本字节
     */
    decode_single_token_bytes(token) {
        if (wasm == null) {
            throw new Error("@dqbd/tiktoken: WASM binary has not been properly initialized.");
        }
        
        try {
            // 调用WebAssembly单标记解码函数
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.tiktoken_decode_single_token_bytes(retptr, this.ptr, token);
            
            // 获取结果
            const r0 = getInt32Memory()[retptr / 4 + 0];
            const r1 = getInt32Memory()[retptr / 4 + 1];
            
            // 获取解码结果并复制为新数组
            const result = getUint8ArrayView(r0, r1).slice();
            wasm.__wbindgen_export_2(r0, r1 * 1);
            
            return result;
        }
        finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
}

//===== 辅助函数 =====

/**
 * 将字符串传递给WebAssembly内存
 * 编码字符串并存储到WebAssembly内存中
 * 
 * @param {string} str - 要传递的字符串
 * @param {Function} allocateFunc - 内存分配函数
 * @param {Function} reallocFunc - 内存重分配函数
 * @returns {number} - 内存指针
 */
function passStringToWasm(str, allocateFunc, reallocFunc) {
    // 简单情况：没有提供重分配函数，直接编码整个字符串
    if (reallocFunc === undefined) {
        const buf = textEncoder.encode(str);
        const ptr = allocateFunc(buf.length);
        getUint8Memory().subarray(ptr, ptr + buf.length).set(buf);
        textStringEncodingPosition = buf.length;
        return ptr;
    }
    
    // 复杂情况：优化处理ASCII和非ASCII字符
    let len = str.length;
    let ptr = allocateFunc(len);
    const mem = getUint8Memory();
    let offset = 0;
    
    // 快速路径：尝试复制ASCII字符
    for (; offset < len; offset++) {
        const code = str.charCodeAt(offset);
        if (code > 127) break;  // 遇到非ASCII字符就退出
        mem[ptr + offset] = code;
    }
    
    // 慢速路径：处理非ASCII字符
    if (offset !== len) {
        if (offset !== 0) {
            str = str.slice(offset);
        }
        
        // 重新分配更多内存以存储UTF-8编码字符（可能需要多字节）
        ptr = reallocFunc(ptr, len, len = offset + str.length * 3);
        const view = getUint8Memory().subarray(ptr + offset, ptr + len);
        const ret = textEncoder.encodeInto(str, view);
        offset += ret.written;
    }
    
    textStringEncodingPosition = offset;
    return ptr;
}

/**
 * 将Uint32数组传递给WebAssembly内存
 * 将JavaScript Uint32Array复制到WebAssembly内存中
 * 
 * @param {Uint32Array} array - 要传递的数组
 * @param {Function} allocateFunc - 内存分配函数
 * @returns {number} - 内存指针
 */
function passUint32ArrayToWasm(array, allocateFunc) {
    const ptr = allocateFunc(array.length * 4);
    getUint32Memory().set(array, ptr / 4);
    textStringEncodingPosition = array.length;
    return ptr;
}

// 导出Tiktoken类
exports.Tiktoken = TiktokenWrapper;

//===== WebAssembly绑定辅助函数 =====

/**
 * 对象引用计数管理：释放对象
 */
exports.__wbindgen_object_drop_ref = function(idx) {
    dropObject(idx);
};

/**
 * 检查值是否为undefined
 */
exports.__wbindgen_is_undefined = function(idx) {
    return getCachedObject(idx) === undefined;
};

/**
 * 获取字符串值
 * 将JavaScript字符串传递给WebAssembly
 */
exports.__wbindgen_string_get = function(retptr, idx) {
    if (wasm == null) {
        throw new Error("@dqbd/tiktoken: WASM binary has not been properly initialized.");
    }
    
    // 从缓存中获取对象
    const obj = getCachedObject(idx);
    const objString = typeof obj === "string" ? obj : undefined;
    
    // 将字符串传递给WebAssembly内存
    let ptr = objString == null ? 0 : passStringToWasm(objString, wasm.__wbindgen_export_0, wasm.__wbindgen_export_1);
    let len = textStringEncodingPosition;
    
    // 设置返回值
    getInt32Memory()[retptr / 4 + 1] = len;
    getInt32Memory()[retptr / 4 + 0] = ptr;
}; 