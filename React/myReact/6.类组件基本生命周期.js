import React, { Component } from "./react/react.js";
import ReactDom from "./react/react-dom.js";
class CounterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { number: props.number };
  }
  componentWillMount() {
    console.log("componentWillMount", this);
  }
  componentDidMount() {
    console.log("componentDidMount", this);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", this);
    return nextState.number % 2 === 0;
  }
  componentWillUpdate() {
    console.log("componentWillUpdate", this);
  }
  componentDidUpdate() {
    console.log("componentDidUpdate", this);
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
// console.log(element4);
ReactDom.render(element4, document.getElementById("root"));
