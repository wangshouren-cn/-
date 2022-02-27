/*
 * @Author: 王首人
 * @Date: 2022-02-27 17:31:20
 * @LastEditors: 王首人
 * @LastEditTime: 2022-02-27 22:19:48
 * @FilePath: \myReact\react\util.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
export function typeOf(instance) {
  return Object.prototype.toString.call(instance).slice(8, -1);
}
const util = {
  typeOf,
};

["Function", "String", "Number", "Array", "Object"].forEach((type) => {
  util[`is${type}`] = function (instance) {
    return typeOf(instance) === type;
  };
});
export default util;
