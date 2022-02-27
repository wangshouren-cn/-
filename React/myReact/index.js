import React, { Component } from "./react/react.js";
import ReactDOM from "./react/react-dom.js";
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
