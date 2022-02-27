/*
 * @Author: 王首人
 * @Date: 2022-02-27 13:39:55
 * @LastEditors: 王首人
 * @LastEditTime: 2022-02-27 18:06:33
 * @FilePath: \myReact\2.fc.js
 * @Description:函数组件例子
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

import React from "./react/react.js";
import ReactDom from "./react/react-dom.js";
function FunctionComponent(props) {
  return /*#__PURE__*/ React.createElement(
    "h1",
    {
      onClick: props.onClick,
    },
    props.name
  );
}

let element3 = /*#__PURE__*/ React.createElement(FunctionComponent, {
  onClick: () => {
    console.log("FunctionComponent");
  },
  name: "FunctionComponent",
});
console.log(element3);
ReactDom.render(element3, document.getElementById("root"));
