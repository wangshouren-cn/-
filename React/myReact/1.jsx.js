/*
 * @Author: 王首人
 * @Date: 2022-02-27 13:41:26
 * @LastEditors: 王首人
 * @LastEditTime: 2022-02-27 17:10:44
 * @FilePath: \myReact\1.jsx.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
import React from "./react2/react.js";
import ReactDom from "./react2/react-dom.js";
let element1 = React.createElement(
  /*<div >
	<h1 style={{color:"red"}}>hello world</h1>
  <span>111</span>
</div> */
  "div",
  null,
  /*#__PURE__*/ React.createElement(
    "h1",
    {
      style: `color: red`,
    },
    "hello world"
  ),
  /*#__PURE__*/ React.createElement("span", null, "111")
);
console.log(element1);
ReactDom.render(element1, document.getElementById("root"));
