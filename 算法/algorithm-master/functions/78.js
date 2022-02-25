"use strict";
exports.__esModule = true;
/*
通过有序数组生成平衡搜索二叉树
【题目】
给定一个有序数组sortArr，已知其中没有重复值，用这个有序数组生成一棵平衡 搜索二叉树，并且该搜索二叉树中序遍历的结果与sortArr一致。
【难度】
士　★☆☆☆
 */
var Tree_1 = require("../utils/Tree");
function makeTree(arr) {
    return make(arr, 0, Math.floor(arr.length / 2), arr.length - 1);
}
function make(arr, l, mid, r) {
    if (l > mid || mid > r)
        return null;
    var head = new Tree_1.TreeNode(arr[mid]);
    var left = make(arr, l, Math.floor((mid + l - 1) / 2), mid - 1);
    var right = make(arr, mid + 1, Math.floor((r + mid + 1) / 2), r);
    head.left = left;
    head.right = right;
    return head;
}
makeTree([1, 2]).log();
