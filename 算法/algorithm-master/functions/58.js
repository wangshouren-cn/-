"use strict";
exports.__esModule = true;
var Tree_1 = require("../utils/Tree");
var _57_1 = require("./57");
/*
如何直观打印一棵二叉树
*/
function printTree(head) {
    printNode(head, 0, "H", 17);
}
function printNode(node, height, to, len) {
    if (node == null)
        return;
    printNode(node.right, height + 1, "v", len);
    var val = to + node.data + to;
    var leftL = Math.trunc(len - String(val).length);
    var rightL = len - String(val).length - leftL;
    val = "-".repeat(height * len + leftL) + val + "-".repeat(rightL);
    console.log(val);
    printNode(node.left, height + 1, "^", len);
}
// printTree(buildTree(10));
function printTree2(head) {
    console.log("minDepth(head)", _57_1["default"](head));
    printNode2(head, _57_1["default"](head));
}
function printNode2(head, height) {
    if (head == null)
        return;
    console.log(" ".repeat(height) + head.data); //     ----------1
    for (var i = 1; i < height; i++) {
        console.log(" ".repeat(height - i) + "/" + " ".repeat((i - 1) * 2) + " \\");
    }
    printNode2(head.left, height - 1);
    //   printNode2(head.right, minDepth(head.right));
}
printTree2(Tree_1.buildTree(3));
