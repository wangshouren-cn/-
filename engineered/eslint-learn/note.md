## 安装 vscode 插件

- eslint

- prettier

## 项目中安装

pnpm i eslint prettier eslint-config-prettier eslint-plugin-prettier -D

## 生成配置文件

npx eslint --init

## 兼容 prettier

.eslintrc.js

```js
module.exports = {
  extends: [/* ... */ "prettier"],

  plugins: [/* ... */ "prettier"],
  rules: {},
};
```

## 配置 Vscode 自动保存格式化

将格式化工具设置为 prettier

## 部分问题的解决方案

### 解决报错 Expected linebreaks to be 'LF' but found 'CRLF'

.eslintrc.js

```js
{
  /* ... */
  'rules': {
    /* ... */
    'linebreak-style': [0, 'error', 'windows'],
  },
}
```
