/*
 * @Author: 王首人
 * @Date: 2022-02-27 13:44:14
 * @LastEditors: 王首人
 * @LastEditTime: 2022-02-27 20:37:19
 * @FilePath: \myReact\4.setState.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
import React, { Component } from "./react2/react.js";
import ReactDom from "./react2/react-dom.js";
class CounterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }
  fatherHandler(se) {
    console.log("fatherHandler");
  }
  handleClick(se) {
    se.stopPropagation();
    this.setState({ number: this.state.number + 1 });
    console.log(1, this.state.number);
    this.setState({ number: this.state.number + 1 });
    console.log(2, this.state.number);
    setTimeout(() => {
      this.setState({ number: this.state.number + 1 });
      console.log(3, this.state.number);
      this.setState({ number: this.state.number + 1 });
      console.log(4, this.state.number);
    }, 0);
    new Promise(() => {
      this.setState({ number: this.state.number + 1 });
      console.log(5, this.state.number);
      this.setState({ number: this.state.number + 1 });
      console.log(6, this.state.number);
      setTimeout(() => {
        this.setState({ number: this.state.number + 1 });
        console.log(7, this.state.number);
        this.setState({ number: this.state.number + 1 });
        console.log(8, this.state.number);
      });
    });
    console.log(9);
    // se.stopPropagation();
  }
  render() {
    return React.createElement(
      "div",
      {
        onClick: this.fatherHandler.bind(this),
      },
      /*#__PURE__*/ React.createElement("h1", null, this.state.number),
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
class FatherComponent extends Component {
  render() {
    return React.createElement(CounterComponent, null);
  }
}
const element5 = React.createElement(FatherComponent, null);
console.log(element5);
ReactDom.render(element5, document.getElementById("root"));
