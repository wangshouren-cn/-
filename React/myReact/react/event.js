/*
 * @Author: 王首人
 * @Date: 2022-02-27 19:59:13
 * @LastEditors: 王首人
 * @LastEditTime: 2022-02-27 20:28:24
 * @FilePath: \myReact\react2\event.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

import { updateQueue } from "./updater.js";
import util from "./util.js";

export function addEvent(dom, eventType, handler) {
  const store = dom.store || (dom.store = {});
  eventType = eventType.toLowerCase();
  store[eventType.slice(2)] = handler;
  if (!document[eventType]) {
    document[eventType] = dispatchEvent;
  }
}
function dispatchEvent(e) {
  let { target, type } = e;
  let syntheticEvent = createSyntheticEvent(e);
  updateQueue.isBatchingUpdate = true;
  while (target != null) {
    if (target.store && util.isFunction(target.store[type])) {
      target.store[type](syntheticEvent);
    }
    if (syntheticEvent.isPropagationStopped) break;
    target = target.parentNode;
  }
  updateQueue.isBatchingUpdate = false;
  updateQueue.update();
}

function createSyntheticEvent(e) {
  let syntheticEvent = {};
  for (const [key, value] of Object.entries(e)) {
    syntheticEvent[key] = value;
  }
  syntheticEvent.preventDefault = preventDefault;
  syntheticEvent.stopPropagation = stopPropagation;
  syntheticEvent.nativeEvent = e;
  return syntheticEvent;
}

function preventDefault() {
  this.defaultPrevented = true;
  const event = this.nativeEvent;
  if (event.preventDefault) {
    event.preventDefault();
  } else {
    //IE
    event.returnValue = false;
  }
  this.isDefaultPrevented = true;
}
/**
 * @description: 阻止事件冒泡的兼容处理
 * @param {*}
 * @return {*}
 */
function stopPropagation() {
  const event = this.nativeEvent;
  if (event.stopPropagation) {
    event.stopPropagation();
  } else {
    //IE
    event.cancelBubble = true;
  }
  this.isPropagationStopped = true;
}
