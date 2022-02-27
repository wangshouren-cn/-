/*
 * @Author: 王首人
 * @Date: 2022-02-26 11:32:27
 * @LastEditors: 王首人
 * @LastEditTime: 2022-02-27 20:31:26
 * @FilePath: \basic\src\index.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

import React, { Component } from "react";
import ReactDom from "react-dom";
class One extends Component {
  render() {
    return <Two name={this.props.name} />;
  }
}
class Two extends Component {
  render() {
    return <Three name={this.props.name} />;
  }
}
class Three extends Component {
  render() {
    return <h1>{this.props.name}</h1>;
  }
}

let element4 = <One name={"xxx"} />;
console.log(element4);
ReactDom.render(element4, document.getElementById("root"));
