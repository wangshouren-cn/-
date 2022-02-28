/*
 * @Author: 王首人
 * @Date: 2022-02-26 11:32:27
 * @LastEditors: 王首人
 * @LastEditTime: 2022-02-28 09:36:43
 * @FilePath: \basic\src\index.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
import React, { Component } from "react";
import ReactDom from "react-dom";
class CounterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { number: props.number };
  }
  componentWillMount() {
    console.log("componentWillMount");
  }
  componentDidMount() {
    debugger;
    console.log("componentDidMount");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return nextState.number % 2 === 0;
  }
  componentWillUpdate() {
    console.log("componentWillUpdate");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  handleClick(se) {
    this.setState({ number: this.state.number + 1 });
  }
  render() {
    console.log("render");
    return React.createElement(
      "div",
      null,
      /*#__PURE__*/ React.createElement("p", null, this.state.number),
      /*#__PURE__*/ React.createElement(
        "button",
        {
          onClick: this.handleClick.bind(this),
        },
        "+"
      )
    );
  }
}
let element4 = React.createElement(CounterComponent, {
  number: 0,
});
console.log(element4);
ReactDom.render(element4, document.getElementById("root"));
