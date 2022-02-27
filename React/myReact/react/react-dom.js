/*
 * @Author: 王首人
 * @Date: 2022-02-27 16:14:20
 * @LastEditors: 王首人
 * @LastEditTime: 2022-02-27 20:09:48
 * @FilePath: \myReact\react2\react-dom.js
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
import { addEvent } from "./event.js";
function render(vDom, fatherDom) {
  let dom = createDom(vDom);
  fatherDom.appendChild(dom);
}
/**
 * @description: 根据虚拟Dom创建真实Dom
 * @param {*} vDom
 * @return {*}
 */
export function createDom(vDom) {
  const { type, props, $$type } = vDom;

  if ($$type === HTML_TEXT) {
    const dom = document.createTextNode(type);
    vDom.dom = dom;
    return dom;
  }
  let dom;
  if ($$type === HTML_ELEMENT) {
    //html元素
    dom = document.createElement(type);
    bindPropsToDom(props, dom);
  } else if ($$type === FUNCTION_COMPONENT) {
    //函数组件
    dom = createDomByFunctionComponent;
  } else if ($$type === CLASS_COMPONENT) {
    //类组件

    dom = createDomByClassComponent(type, props);
  }
  vDom.dom = dom;
  return dom;
}
/**
 * @description: 根据函数组件生成Dom
 * @param {Function} type
 * @param {Object} props
 * @return {dom}
 */
function createDomByFunctionComponent(type, props) {
  const renderedVDom = type(props); //函数执行后生成虚拟Dom
  return createDom(renderedVDom); //根据虚拟Dom创建真实Dom
}
/**
 * @description: 根据类组件生成Dom
 * @param {Class} type
 * @param {Object} props
 * @return {dom}
 */
function createDomByClassComponent(type, props) {
  const classInstance = new type(props); //创建组件对象
  const renderedVDom = classInstance.render(); //函数执行后生成虚拟Dom
  classInstance.vDom = renderedVDom;
  return createDom(renderedVDom);
}
function bindPropsToDom(props, dom) {
  for (const [propName, propValue] of Object.entries(props)) {
    if (propName === "style") {
      //样式
      bindStyleToDom(propValue, dom);
    } else if (isReactEvenName(propName)) {
      //事件
      addEvent(dom, propName, propValue);
    } else if (propName === "children") {
      //子元素
      propValue.forEach((child) => render(child, dom));
    } else {
      //其他
      dom[propName] = propValue;
    }
  }
}
function isReactEvenName(name) {
  return /^on[A-Z].*$/.test(name);
}
function bindStyleToDom(style, dom) {
  if (typeof style === "string") {
    dom.style = style;
  } else {
    for (const [name, value] of Object.entries(style)) {
      dom.style[name] = value;
    }
  }
}
const ReactDom = { render };
export default ReactDom;
