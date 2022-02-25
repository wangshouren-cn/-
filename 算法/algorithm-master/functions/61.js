"use strict";
exports.__esModule = true;
var Tree_1 = require("../utils/Tree");
/*
在二叉树中找到累加和为指定值的最长路径长度
【难度】尉 ★★☆☆
*/
function getMaxLen(head, sum) {
    // key表示累加和，value表示当前和最早出现的层数
    var map = new Map();
    map.set(0, 0);
    return preOrder(head, 0, 1, 0, sum, map);
}
function preOrder(node, preSum, level, maxLen, sum, map) {
    if (node == null)
        return maxLen;
    var curSum = node.data + preSum;
    if (!map.has(curSum))
        map.set(curSum, level);
    if (map.has(curSum - sum))
        maxLen = Math.max(maxLen, level - map.get(curSum - sum));
    maxLen = preOrder(node.left, curSum, level + 1, maxLen, sum, map);
    maxLen = preOrder(node.right, curSum, level + 1, maxLen, sum, map);
    if (level === map.get(curSum))
        map["delete"](curSum);
    return maxLen;
}
var node = Tree_1.buildTree(20);
console.log(getMaxLen(node, 34));
