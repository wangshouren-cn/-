"use strict";
exports.__esModule = true;
/*
判断一棵二叉树是否是平衡二叉树（一个节点的左子树高度和右子树高度差不超过1）
*/
var Tree_1 = require("../utils/Tree");
function isBalance(head) {
    return progress(head) >= 0;
}
//如果当前节点平衡返回他的高度，否则返回-1
function progress(head) {
    if (head == null)
        return 0;
    var leftH = progress(head.left);
    if (leftH < 0)
        return -1;
    var rightH = progress(head.right);
    if (rightH < 0)
        return -1;
    if (Math.abs(leftH - rightH) > 1)
        return -1;
    return Math.max(leftH, rightH) + 1;
}
var node = new Tree_1.TreeNode(1);
var node2 = new Tree_1.TreeNode(2);
var node3 = new Tree_1.TreeNode(3);
node.left = node2;
node2.left = node3;
console.log(isBalance(Tree_1.buildTree(5)));
console.log(isBalance(node));
