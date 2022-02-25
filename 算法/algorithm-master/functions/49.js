"use strict";
exports.__esModule = true;
/*
二叉树的序列化和反序列化
*/
var Tree_1 = require("../utils/Tree");
var Queue_1 = require("./../utils/Queue");
function serialize(head) {
    if (head == null)
        return '#_';
    var res = head.data + "_";
    res += serialize(head.left);
    res += serialize(head.right);
    return res;
}
function deserialization(string) {
    var queue = new Queue_1["default"]();
    var res = string.split('_');
    for (var i = 0; i < res.length - 1; i++) {
        queue.add(res[i]);
    }
    if (queue.isEmpty())
        return null;
    console.log(queue.stack);
    return progress(queue);
}
function progress(queue) {
    if (queue.isEmpty())
        return;
    var val = queue.poll();
    if (val === '#')
        return null;
    var node = new Tree_1.TreeNode(val);
    node.left = progress(queue);
    node.right = progress(queue);
    return node;
}
var node = Tree_1.buildTree(5);
var res = serialize(node);
console.log(res);
console.log(serialize(deserialization(res)));
