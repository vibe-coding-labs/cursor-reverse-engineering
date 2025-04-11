const path = require('path');

module.exports = {
  target: 'node',
  entry: './src/extension.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    libraryTarget: 'commonjs2'
  },
  externals: {
    vscode: 'commonjs vscode',
    // 其他不需要打包的外部依赖
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                targets: {
                  node: '14'
                }
              }]
            ]
          }
        }
      }
    ]
  },
  devtool: 'source-map',
  mode: 'production',
  optimization: {
    // 不压缩代码，保持可读性
    minimize: false
  },
  // 添加WebAssembly支持
  experiments: {
    asyncWebAssembly: true
  },
  // 确保WebAssembly文件被正确处理
  node: {
    __dirname: false,
    __filename: false
  }
}; 