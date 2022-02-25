"use strict";
exports.__esModule = true;
exports.isSameTree = exports.buildTree = exports.printTree = exports.TreeNode = void 0;
var Queue_1 = require("./Queue");
var TreeNode = /** @class */ (function () {
    function TreeNode(data, parent) {
        this.data = data;
        this.left = this.right = null;
        if (typeof parent !== "undefined")
            this.parent = parent;
    }
    TreeNode.prototype.log = function () {
        printTree(this);
    };
    return TreeNode;
}());
exports.TreeNode = TreeNode;
function printTree(head) {
    printNode(head, 0, "H", 17);
}
exports.printTree = printTree;
function printNode(node, height, to, len) {
    if (node == null)
        return;
    printNode(node.right, height + 1, "v", len);
    var val = to + node.data + to;
    var leftL = Math.trunc(len - String(val).length);
    var rightL = len - String(val).length - leftL;
    val = " ".repeat(height * len + leftL) + val + "-".repeat(rightL);
    console.log(val);
    printNode(node.left, height + 1, "^", len);
}
/**
 * @description: 创建树节点
 * @param {type}
 * @return: TreeNode
 */
function buildTree(size, includeParent, value) {
    if (Array.isArray(size)) {
        if (size.length == 0)
            return null;
        var numberArr = size;
        var head_1 = new TreeNode(numberArr.shift()), left_1 = true, father_1 = head_1, fatherArr = [];
        while (numberArr.length > 0) {
            var newNode = new TreeNode(numberArr.shift(), includeParent ? father_1 : null);
            fatherArr.push(newNode);
            if (left_1) {
                father_1.left = newNode;
            }
            else {
                father_1.right = newNode;
                father_1 = fatherArr.shift();
            }
            left_1 = !left_1;
        }
        return head_1;
    }
    if (size < 1)
        return null;
    var queue = new Queue_1["default"]();
    var head = new TreeNode(1);
    queue.add(head);
    var currentSize = 1, left = true, father;
    while (++currentSize <= size) {
        var newNode = new TreeNode(value ? Math.floor(Math.random() * value) : currentSize, includeParent ? father : null);
        if (left) {
            father = queue.poll();
            father.left = newNode;
        }
        else {
            father.right = newNode;
        }
        queue.add(newNode);
        left = !left;
    }
    return head;
}
exports.buildTree = buildTree;
function isSameTree(node1, node2) {
    return serialize(node1) === serialize(node2);
}
exports.isSameTree = isSameTree;
function serialize(head) {
    if (head == null)
        return "#_";
    var res = head.data + "_";
    res += serialize(head.left);
    res += serialize(head.right);
    return res;
}
function deSerialization(string) {
    var queue = new Queue_1["default"]();
    var res = string.split("_");
    for (var i = 0; i < res.length - 1; i++) {
        queue.add(res[i]);
    }
    if (queue.isEmpty())
        return null;
    return progress(queue);
}
function progress(queue) {
    if (queue.isEmpty())
        return;
    var val = queue.poll();
    if (val === "#")
        return null;
    var node = new TreeNode(val);
    node.left = progress(queue);
    node.right = progress(queue);
    return node;
}
