import { createDom } from "./react-dom.js";
import util, { typeOf } from "./util.js";

/*
 * @Author: 王首人
 * @Date: 2022-02-27 19:08:06
 * @LastEditors: 王首人
 * @LastEditTime: 2022-02-28 09:47:37
 * @FilePath: \myReact\react\updater.js
 * @Description:react更新器
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
export const updateQueue = {
  updaters: [],
  isBatchingUpdate: false, //是否批量更新
  update() {
    this.updaters.forEach((updater) => {
      updater.updateState();
    });
    this.updaters.length = 0;
  },
};
export default class updater {
  constructor(instance) {
    this.classInstance = instance;
    this.pendingState = [];
  }
  enqueueSetState(partial) {
    this.pendingState.push(partial);
    this.emitUpdate();
  }
  emitUpdate() {
    if (updateQueue.isBatchingUpdate) {
      updateQueue.updaters.push(this);
    } else {
      this.updateState();
    }
  }
  updateState() {
    this.pendingState.reduce((state, partial) => {
      if (util.isFunction(partial)) {
        partial = partial(state);
      }
      Object.assign(state, partial);
      return state;
    }, this.classInstance.state);
    let shouldUpdate = true;
    if (util.isFunction(this.classInstance.shouldComponentUpdate))
      shouldUpdate = this.classInstance.shouldComponentUpdate(
        {},
        this.classInstance.state
      );
    if (shouldUpdate) this.updateComponent();
  }
  updateComponent() {
    if (util.isFunction(this.classInstance.componentWillUpdate))
      this.classInstance.componentWillUpdate();
    const oldDom = this.classInstance.vDom.dom;
    // console.log(this.classInstance.vDom.dom);
    const newVDom = this.classInstance.render();
    const newDom = createDom(newVDom);
    oldDom.parentNode.replaceChild(newDom, oldDom);
    this.classInstance.vDom = newVDom;
    if (util.isFunction(this.classInstance.componentDidUpdate))
      this.classInstance.componentDidUpdate();
  }
}
