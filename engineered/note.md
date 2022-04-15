## vite
### vite特点
1. 冷服务启动
2. 热更新
3. 按需进行编译


## webpack 应用

`webpack`是在`node`环境中运行的一个打包工具，`webpack`通过寻找`require`和`import`关键字打包关联文件

### 主要文件`webpack.config.js`

```js
const path = require("path");
module.exports = {
  mode: "development", //指定模式
  //entry可以是个数组，
  entry: "./src/index.js", //入口 等价于写 {main:"./src/index.js"}
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  }, //出口
  module: {
    rules: [
      /*...loaders*/
    ],
  },
  plugins: [
    //...
  ],
};
```

### 安装

`npm install webpack webpack-cli --save-dev`

> `webpack`是核心包，`webpack-cli`是命令行程序

### 打包

在`package.json`中增加`webpack`命令脚本

```json
{
  //...
  "scripts": {
    //...
    "build": "webpack" //或者"webpack-cli"
  }
  //...
}
```

然后执行 `npm run build`

### npm run build 干了什么

1. 拿到`package.json`下面的`script`下面的`build`对应的`shell`脚本
2. 执行`webpack`命令
   1. 先看本地`node_modules/.bin/webpack.cmd`文件存不存在，如果存在就执行，如果不存在就在全局目录（C:\Users\Lenovo\AppData\Roaming\npm\webpack.js）下查找，找不到就报错
3. 找到`webpack.cmd`之后，他会执行并读取当前目录下的`webpack.config.js`文件开始打包

### 什么是 Loader

webpack 默认只能引入`js`和`json`文件，引入其他文件会默认把他们当成`js`文件处理，对于其他文件`loader`可以将其转换为`webpack`认识的文件

```js
module.exports = {
  //...
  module: {
    rules: [{ test: /\.txt$/, use: ["raw-loader"] }],//识别.txt文件
  },
};
```

### 入口使用多个文件和输出多个文件

`entry`可以指定多个文件

```js
entry:{
  index1:"index1.js",
  index2:"index2.js"
}
```

`output`可以指定多个文件

```js
output: {
  //...
  filename: "[name].js"; //[name]会替换成entry对象中key的名字
}
```

### 什么是 plugin

插件可以介入`webpack`打包的整个流程，比如打包优化，资源管理，注入环境变量

#### 例子：使用`html-webpack-plugin`

```js
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  //...
  plugins: [
    //这个插件会向输出目录创建index.html文件，并且自动插入脚本
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
  ],
};
```
