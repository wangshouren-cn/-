"use strict";
exports.__esModule = true;
var Tree_1 = require("../utils/Tree");
var Queue_1 = require("./../utils/Queue");
/*
判断一棵树是否是完全二叉树
*/
function isCBT(head) {
    if (head == null)
        return false;
    var queue = new Queue_1["default"]();
    queue.add(head);
    var flag = false;
    while (!queue.isEmpty()) {
        var node = queue.poll();
        if ((flag && (node.left || node.right)) || (node.right && !node.left))
            return false;
        if (node.left)
            queue.add(node.left);
        if (node.right)
            queue.add(node.right);
        if (!node.left || !node.right)
            flag = true;
    }
    return true;
}
var node1 = new Tree_1.TreeNode(1);
var node2 = new Tree_1.TreeNode(1);
var node3 = new Tree_1.TreeNode(1);
var node4 = new Tree_1.TreeNode(1);
var node5 = new Tree_1.TreeNode(1);
var node6 = new Tree_1.TreeNode(1);
node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
console.log(isCBT(node1));
