/*
 * @Author: 王首人
 * @Date: 2022-02-27 13:40:24
 * @LastEditors: 王首人
 * @LastEditTime: 2022-02-28 08:56:55
 * @FilePath: \myReact\3.classComponent.js
 * @Description:类组件例子
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
import React, { Component } from "./react/react.js";
import ReactDom from "./react/react-dom.js";
class One extends Component {
  render() {
    return React.createElement(Two, {
      name: this.props.name,
    });
  }
}
class Two extends Component {
  render() {
    return React.createElement(Three, {
      name: this.props.name,
    });
  }
}
class Three extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return React.createElement("h1", null, this.props.name);
  }
}

let element4 = React.createElement(One, {
  name: "xxx",
});
console.log(element4);
ReactDom.render(element4, document.getElementById("root"));
