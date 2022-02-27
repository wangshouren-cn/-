/*
 * @Author: 王首人
 * @Date: 2022-02-26 11:32:27
 * @LastEditors: 王首人
 * @LastEditTime: 2022-02-27 21:41:04
 * @FilePath: \basic\src\index.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
import React, { Component } from "react";
import ReactDOM from "react-dom";
class HtmlRef extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }
  handleClick = () => {
    this.input.current.focus();
  };
  render() {
    return React.createElement(
      "div",
      null,
      /*#__PURE__*/ React.createElement("input", {
        ref: this.input,
      }),
      /*#__PURE__*/ React.createElement(
        "button",
        {
          onClick: this.handleClick,
        },
        "HtmlRef"
      )
    );
  }
}
console.log(<HtmlRef />);
class Child extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }
  render() {
    return React.createElement("input", {
      ref: this.input,
    });
  }
}

class ComponentRef extends Component {
  constructor(props) {
    super(props);
    this.childComponent = React.createRef();
  }
  handleClick = () => {
    this.childComponent.current.input.current.focus();
  };
  render() {
    return React.createElement(
      "div",
      null,
      /*#__PURE__*/ React.createElement(Child, {
        ref: this.childComponent,
      }),
      /*#__PURE__*/ React.createElement(
        "button",
        {
          onClick: this.handleClick,
        },
        "ComponentRef"
      )
    );
  }
}
function InputText(props, ref) {
  return React.createElement("input", {
    ref: ref,
  });
}
const ForwardInputText = React.forwardRef(InputText);
class FunctionRef extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }
  handleClick = () => {
    this.input.current.focus();
  };
  render() {
    return React.createElement(
      "div",
      null,
      /*#__PURE__*/ React.createElement(ForwardInputText, {
        ref: this.input,
      }),
      /*#__PURE__*/ React.createElement(
        "button",
        {
          onClick: this.handleClick,
        },
        "FunctionRef"
      )
    );
  }
}
ReactDOM.render(
  React.createElement(
    "div",
    null,
    /*#__PURE__*/ React.createElement(HtmlRef, null),
    /*#__PURE__*/ React.createElement(ComponentRef, null),
    /*#__PURE__*/ React.createElement(FunctionRef, null)
  ),
  document.getElementById("root")
);
