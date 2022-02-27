/*
 * @Author: 王首人
 * @Date: 2022-02-27 16:14:10
 * @LastEditors: 王首人
 * @LastEditTime: 2022-02-27 19:28:18
 * @FilePath: \myReact\react2\react.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
import {
  HTML_TEXT,
  HTML_ELEMENT,
  FUNCTION_COMPONENT,
  CLASS_COMPONENT,
} from "./constants.js";
import updater, { updateQueue } from "./updater.js";
import util from "./util.js";
/**
 * @description:
 * @param {String(htmlTag),Function,Class} type
 * @param {*} props
 * @param {array} children
 * @return {*} react虚拟Dom
 * {
 * type,
 * props
 * }
 */
function createElement(type, props, ...children) {
  props = props || {};
  props.children = children.map((child) => {
    if (util.isString(child) || util.isNumber(child)) {
      return wrapTextChild(child);
    } else {
      return child;
    }
  });
  return { $$type: get$$Type(type), type, props };
}
/**
 * @description: 将文本节点也转成虚拟Dom对象
 * @param {*} child
 * @return {*}
 */
function wrapTextChild(child) {
  return {
    $$type: HTML_TEXT,
    type: child.toString(),
  };
}
function get$$Type(type) {
  let $$type = "";
  if (util.isString(type)) {
    $$type = HTML_ELEMENT;
  } else if (util.isFunction(type)) {
    if (type.isClassComponent) $$type = CLASS_COMPONENT;
    else $$type = FUNCTION_COMPONENT;
  }

  return $$type;
}
class Component {
  static isClassComponent = true; //用于区分函数组件和类组件
  constructor(props) {
    this.props = props;
    this.updater = new updater(this);
    
  }
  setState(partial) {
    this.updater.enqueueSetState(partial);
  }
}
export { Component };
const ReactDom = { createElement };
export default ReactDom;
