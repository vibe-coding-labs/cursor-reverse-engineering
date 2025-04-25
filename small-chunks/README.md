# Cursor main.js 逆向分析工具

本目录包含用于格式化和分析Cursor主程序main.js文件的工具。

## 主要文件

- `format-main.cjs`: 格式化脚本，用于美化和格式化main.js文件
- `main.js-formated.js`: 格式化后的main.js文件，更易于阅读和分析
- `small-chunks/`: 用于存放拆分后的main.js文件块（每个约500行）

## 使用说明

1. 使用format-main.cjs格式化main.js文件：
   ```
   node format-main.cjs
   ```

2. 使用split-js脚本拆分main.js-formated.js为多个小块文件：
   ```
   node split-js.cjs
   ```

## 拆分文件

当文件非常大时，可以使用split命令进行拆分：
```
split -l 500 main.js-formated.js small-chunks/chunk-
```

这将把文件拆分成每个约500行的小文件，命名为chunk-aa, chunk-ab等。 