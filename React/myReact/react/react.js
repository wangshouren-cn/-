/*
 * @Author: 王首人
 * @Date: 2022-02-27 16:14:10
 * @LastEditors: 王首人
 * @LastEditTime: 2022-02-27 22:16:25
 * @FilePath: \myReact\react\react.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
import {
  HTML_TEXT,
  HTML_ELEMENT,
  FUNCTION_COMPONENT,
  CLASS_COMPONENT,
  FORWARD_REF,
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
  let ref = props.ref || null;
  delete props.ref;
  props.children = children.map((child) => {
    if (util.isString(child) || util.isNumber(child)) {
      return wrapTextChild(child);
    } else {
      return child;
    }
  });
  return { $$type: get$$Type(type), type, props, ref };
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
  if (util.isString(type)) {
    return HTML_ELEMENT;
  } else if (util.isFunction(type)) {
    if (type.isClassComponent) return CLASS_COMPONENT;
    else return FUNCTION_COMPONENT;
  } else if (util.isObject(type)) {
    if (type.$$type === FORWARD_REF) {
      //forwardRef返回的对象
      return FORWARD_REF;
    }
  }
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
function createRef() {
  return { current: null };
}
/**
 * @description:
 * @param {*}
 * @return {*}vDom
 */
function forwardRef(render) {
  return {
    $$type: FORWARD_REF,
    render,
  };
}
export { Component };
const React = { createElement, createRef, forwardRef };
export default React;
