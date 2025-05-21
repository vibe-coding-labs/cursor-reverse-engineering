#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 获取当前文件的目录名称
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 直接使用相对路径，因为已经在正确的工作目录
const workbenchDir = '.';

// 格式化单个文件
function formatFile(filePath) {
  try {
    console.log(`格式化文件: ${filePath}`);
    
    // 为处理过程创建一个临时文件
    const tempDir = path.join(__dirname, 'temp');
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir);
    }
    
    const tempFilePath = path.join(tempDir, `${path.basename(filePath)}.temp`);
    
    // 检查文件内容以确定是否包含ES模块语法
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const hasESModuleSyntax = fileContent.includes('export ') || fileContent.includes('import ');
    const sourceType = hasESModuleSyntax ? 'module' : 'script';
    
    // 使用Babel格式化JavaScript文件
    try {
      execSync(`npx babel "${filePath}" --out-file "${tempFilePath}" --source-type=${sourceType} --no-babelrc --presets=@babel/preset-env --plugins=@babel/plugin-proposal-class-properties,@babel/plugin-proposal-object-rest-spread`);
      
      // 使用Prettier进一步格式化
      execSync(`npx prettier --write "${tempFilePath}" --single-quote --print-width 100 --parser babel`);
      
      // 将格式化后的内容复制回原文件
      const formattedContent = fs.readFileSync(tempFilePath, 'utf8');
      fs.writeFileSync(filePath, formattedContent);
      
      // 删除临时文件
      fs.unlinkSync(tempFilePath);
      
      console.log(`已格式化并替换源文件: ${filePath}`);
      return filePath;
    } catch (transformError) {
      console.error(`转换错误: ${transformError.message}`);
      console.log(`源文件保持不变: ${filePath}`);
      // 如果临时文件存在，删除它
      if (fs.existsSync(tempFilePath)) {
        fs.unlinkSync(tempFilePath);
      }
      return filePath;
    }
  } catch (error) {
    console.error(`格式化文件失败: ${filePath}`, error);
    return null;
  }
}

// 处理workbench目录下的JS文件
function processWorkbenchDir() {
  const mainJsPath = path.join(workbenchDir, 'workbench.desktop.main.js');
  
  if (fs.existsSync(mainJsPath)) {
    console.log('开始处理workbench.desktop.main.js...');
    const formattedPath = formatFile(mainJsPath);
    if (formattedPath) {
      console.log(`主文件已格式化: ${formattedPath}`);
    }
  } else {
    console.error(`文件不存在: ${mainJsPath}`);
  }
  
  // 处理其它子目录的JS文件
  const subDirs = ['services', 'contrib', 'browser', 'api'];
  subDirs.forEach(subDir => {
    const dirPath = path.join(workbenchDir, subDir);
    if (fs.existsSync(dirPath)) {
      console.log(`处理目录: ${subDir}`);
      processDir(dirPath);
    }
  });
}

// 处理目录中的所有JS文件
function processDir(dirPath) {
  try {
    const files = fs.readdirSync(dirPath);
    
    files.forEach(file => {
      const filePath = path.join(dirPath, file);
      try {
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
          processDir(filePath); // 递归处理子目录
        } else if (path.extname(file) === '.js') {
          formatFile(filePath);
        }
      } catch (statError) {
        console.error(`获取文件状态失败: ${filePath}`, statError);
      }
    });
  } catch (error) {
    console.error(`处理目录失败: ${dirPath}`, error);
  }
}

processWorkbenchDir();
console.log('所有文件处理完成!'); 