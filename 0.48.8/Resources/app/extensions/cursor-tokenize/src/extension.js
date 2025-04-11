/**
 * 扩展入口文件
 * cursor-tokenize 扩展是Cursor的核心组件，用于将代码标记化并处理敏感数据
 * 本文件包含扩展的激活和停用逻辑
 */

// 导入控制提供程序类
const { ControlProvider } = require('./ControlProvider');

// 保存所有需要在停用时释放的资源
// 这样可以确保扩展停用时正确清理所有资源
const disposables = [];

/**
 * 扩展激活函数
 * 当VSCode完成启动时自动调用此函数
 * 在package.json中通过"activationEvents": ["onStartupFinished"]配置激活时机
 * 
 * @param {vscode.ExtensionContext} context - 扩展上下文对象，包含扩展的运行环境信息
 * @returns {Promise<void>} - 异步函数，无返回值
 */
async function activate(context) {
    // 创建控制提供程序实例
    // 这将自动注册该提供程序到VSCode，使其API可被访问
    const provider = new ControlProvider();
    
    // 将提供程序的资源释放函数添加到待释放列表
    // 这确保了在扩展停用时能正确释放资源
    disposables.push(async () => provider.dispose());
}

/**
 * 扩展停用函数
 * 当VSCode关闭或扩展被显式停用时调用
 * 负责清理所有扩展创建的资源
 * 
 * @returns {Promise<void>} - 异步函数，无返回值
 */
async function deactivate() {
    // 依次调用所有资源的释放函数
    for (const dispose of disposables) {
        await dispose();
    }
}

// 导出activate和deactivate函数，这是VSCode扩展必需的接口
module.exports = {
    activate,
    deactivate
}; 