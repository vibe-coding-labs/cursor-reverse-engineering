const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');
const prettier = require('prettier');

// 文件路径
const mainJsPath = path.resolve(__dirname, '../main.js');
const outputPath = path.resolve(__dirname, 'main.js-formated.js');

// 读取main.js文件
console.log('Reading main.js file...');
const code = fs.readFileSync(mainJsPath, 'utf-8');

// 使用Babel解析和格式化代码
console.log('Formatting code with Babel...');
babel.transform(code, {
  presets: ['@babel/preset-env'],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread'
  ],
  comments: true,
  minified: false,
  retainLines: false
}, (err, result) => {
  if (err) {
    console.error('Error during Babel transform:', err);
    return;
  }
  
  // 使用prettier进一步格式化
  console.log('Applying prettier formatting...');
  prettier.format(result.code, { 
    parser: 'babel',
    printWidth: 100,
    tabWidth: 2,
    singleQuote: true
  }).then(formattedCode => {
    // 写入结果到输出文件
    console.log(`Writing formatted code to ${outputPath}...`);
    fs.writeFileSync(outputPath, formattedCode, 'utf-8');
    console.log('Formatting completed successfully!');
  }).catch(err => {
    console.error('Error during prettier formatting:', err);
  });
}); 