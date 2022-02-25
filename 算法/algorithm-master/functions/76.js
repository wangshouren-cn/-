"use strict";
exports.__esModule = true;
var Tree_1 = require("../utils/Tree");
/*
判断一棵树是不是平衡二叉树
*/
var ReturnType = /** @class */ (function () {
    function ReturnType(isBalance, height) {
        this.isBalance = isBalance;
        this.height = height;
    }
    return ReturnType;
}());
function isBalance(head) {
    return progress(head).isBalance;
}
function progress(head) {
    if (head == null)
        return new ReturnType(true, 0);
    var left = progress(head.left);
    var right = progress(head.right);
    var height = Math.max(left.height, right.height) + 1;
    var isBalance = left.isBalance && right.isBalance && Math.abs(left.height - right.height) < 2;
    return new ReturnType(isBalance, height);
}
var node = Tree_1.buildTree([1, 3, 2, 5, 4]);
console.log(isBalance(node));
