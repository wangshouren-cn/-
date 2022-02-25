"use strict";
exports.__esModule = true;
function swap(ary, i, j) {
    var temp = ary[i];
    ary[i] = ary[j];
    ary[j] = temp;
}
exports["default"] = swap;
