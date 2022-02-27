<!--
 * @Author: 王首人
 * @Date: 2022-02-26 16:40:20
 * @LastEditors: 王首人
 * @LastEditTime: 2022-02-27 11:42:09
 * @FilePath: \myReact\work exp.md
 * @Description: 开发过程的经验
 * 
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved. 
-->
## 1、如何禁止html请求favicon.ico
```html
<head>
    ...
    <link rel="icon" href="data:;base64,=">
    ...
</head>
```
## 2、虚拟Dom
`<h1>标题</h1>`（JSX：JS+XML）经babel转义后变成 `React.createElement("h1", null, "标题")`，执行后返回一个虚拟Dom对象
```js
虚拟Dom的例子
{
    type:String/FunctionComponent/ClassComponent
    props:{
        style:{...},
        onClick:Function,
        children:String/Number/[String/vDom...]/vDom,
        ...
    }
}
```
## 3、关于setState更新
react更新在事件函数、生命周期函数里都是批量的（会在函数执行完成之后批量更新），除此之外比如像setTimeout等原生的异步函数中都是同步更新的
 

