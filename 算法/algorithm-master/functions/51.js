"use strict";
exports.__esModule = true;
/*
判断一棵树是否是搜索二叉树
*/
var Tree_1 = require("../utils/Tree");
var Stack_1 = require("./../utils/Stack");
function isSBT(head) {
    if (head == null)
        return false;
    var stack = new Stack_1["default"]();
    var min = -Infinity;
    while (!stack.isEmpty() || head != null) {
        if (head != null) {
            stack.push(head);
            head = head.left;
        }
        else {
            var node_1 = stack.pop();
            if (min > node_1.data)
                return false;
            min = node_1.data;
            head = node_1.right;
        }
    }
    return true;
}
var node = new Tree_1.TreeNode(5);
var node2 = new Tree_1.TreeNode(4);
var node3 = new Tree_1.TreeNode(6);
var node4 = new Tree_1.TreeNode(2);
var node5 = new Tree_1.TreeNode(7);
node.left = node2;
node.right = node3;
node2.left = node4;
node3.right = node5;
console.log(isSBT(node));
