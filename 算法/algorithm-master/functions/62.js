"use strict";
exports.__esModule = true;
var Tree_1 = require("../utils/Tree");
/*
找到二叉树中的最大搜索二叉子树
*/
var ReturnType = /** @class */ (function () {
    function ReturnType(maxSize, min, max, maxChildTreeNode) {
        this.maxSize = maxSize;
        this.min = min;
        this.max = max;
        this.maxChildTreeNode = maxChildTreeNode;
    }
    return ReturnType;
}());
function findMaxChildTree(head) {
    return process(head).maxChildTreeNode;
}
function process(head) {
    if (head == null)
        return new ReturnType(0, Infinity, -Infinity, null);
    var lData = process(head.left);
    var rData = process(head.right);
    var maxChildTreeNode = null, maxSize = 0;
    maxChildTreeNode =
        lData.maxSize > rData.maxSize
            ? lData.maxChildTreeNode
            : lData.maxChildTreeNode;
    maxSize = lData.maxSize > rData.maxSize ? lData.maxSize : lData.maxSize;
    if (lData.maxChildTreeNode == head.left &&
        rData.maxChildTreeNode === head.right &&
        lData.max <= head.data &&
        rData.min >= head.data) {
        maxSize += 1;
        maxChildTreeNode = head;
    }
    return new ReturnType(maxSize, Math.min(lData.min, lData.min, head.data), Math.max(lData.max, rData.max, head.data), maxChildTreeNode);
}
var node = new Tree_1.TreeNode(4);
var node2 = new Tree_1.TreeNode(1);
var node3 = new Tree_1.TreeNode(3);
node.left = node2;
node.right = node3;
console.log(findMaxChildTree(node));
