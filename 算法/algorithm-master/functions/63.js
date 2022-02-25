"use strict";
exports.__esModule = true;
var Tree_1 = require("../utils/Tree");
var Tree_2 = require("./../utils/Tree");
/*
找到二叉树中符合搜索二叉树条件的最大拓扑结构
【题目】给定一棵二叉树的头节点head，已知所有节点的值都不一样，返回其中最大的且符合搜索二叉树条件的最大拓扑结构的大小。
*/
// 方案一，时间复杂度O（n^2）
function getMaxTree(head) {
    if (head == null)
        return 0;
    var max = process(head, head);
    max = Math.max(getMaxTree(head.left), max);
    max = Math.max(getMaxTree(head.right), max);
    return max;
}
function process(h, n) {
    if (n != null && isBSTh(h, n, n.data)) {
        return process(h, n.left) + process(h, n.right) + 1;
    }
    return 0;
}
function isBSTh(h, n, value) {
    if (h == null)
        return false;
    if (h == n)
        return true;
    return isBSTh(h.data > value ? h.left : h.right, n, value);
}
// 方案二，时间复杂度O（n）
var ReturnType = /** @class */ (function () {
    function ReturnType(l, r) {
        this.l = l;
        this.r = r;
    }
    return ReturnType;
}());
function getMaxTree2(head) {
    var map = new Map();
    return progress2(head, map);
}
function progress2(node, map) {
    if (!node)
        return null;
    var ls = progress2(node.left, map);
    var rs = progress2(node.right, map);
    modifyMap(node.left, map, node.data, true);
    modifyMap(node.right, map, node.data, false);
    var rl = map.get(node.left);
    var rr = map.get(node.right);
    var nl = rl ? rl.l + rl.r + 1 : 0;
    var nr = rr ? rr.l + rr.r + 1 : 0;
    var r = new ReturnType(nl, nr);
    map.set(node, r);
    return Math.max(ls, rs, nl + nr + 1);
}
function modifyMap(node, map, value, l) {
    if (node == null || !map.has(node))
        return 0;
    var r = map.get(node);
    if ((node.data > value && l) || (node.data < value && !l)) {
        map["delete"](node);
        return r.l + r.r + 1;
    }
    else {
        var m = modifyMap(l ? node.right : node.left, map, value, l);
        if (l) {
            r.r -= m;
        }
        else {
            r.l -= m;
        }
        return m;
    }
}
var node6 = new Tree_1.TreeNode(6);
var node1 = new Tree_1.TreeNode(1);
var node12 = new Tree_1.TreeNode(12);
var node0 = new Tree_1.TreeNode(0);
var node3 = new Tree_1.TreeNode(3);
var node10 = new Tree_1.TreeNode(10);
var node13 = new Tree_1.TreeNode(13);
var node4 = new Tree_1.TreeNode(4);
var node14 = new Tree_1.TreeNode(14);
var node20 = new Tree_1.TreeNode(20);
var node16 = new Tree_1.TreeNode(16);
var node2 = new Tree_1.TreeNode(2);
var node5 = new Tree_1.TreeNode(5);
var node11 = new Tree_1.TreeNode(11);
var node15 = new Tree_1.TreeNode(15);
node6.left = node1;
node6.right = node12;
node1.left = node0;
node1.right = node3;
node12.left = node10;
node12.right = node13;
node10.left = node4;
node10.right = node14;
node13.left = node20;
node13.right = node16;
node4.left = node2;
node4.right = node5;
node14.left = node11;
node14.right = node15;
Tree_2.printTree(node6);
console.log(getMaxTree(node6));
console.log(getMaxTree2(node6));
