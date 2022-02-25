"use strict";
exports.__esModule = true;
/*
实现二叉树的先序、中序、后序遍历，包括递归方式和非递归方式
*/
var Tree_1 = require("../utils/Tree");
var Stack_1 = require("../utils/Stack");
function preorder(head) {
    if (head == null)
        return;
    console.log(head.data + ' ');
    preorder(head.left);
    preorder(head.right);
}
function preorder2(head) {
    if (head == null)
        return head;
    var stack = new Stack_1["default"]();
    stack.push(head);
    while (!stack.isEmpty()) {
        var node = stack.pop();
        if (node.right) {
            stack.push(node.right);
        }
        if (node.left) {
            stack.push(node.left);
        }
        console.log(node.data + ' ');
    }
}
function inorder(head) {
    if (head == null)
        return;
    inorder(head.left);
    console.log(head.data + ' ');
    inorder(head.right);
}
function inorder2(head) {
    if (head == null)
        return;
    var stack = new Stack_1["default"]();
    while (!stack.isEmpty() || head != null) {
        if (head != null) {
            stack.push(head);
            head = head.left;
        }
        else {
            var node = stack.pop();
            console.log(node.data + ' ');
            head = node.right;
        }
    }
}
function postorder(head) {
    if (head == null)
        return;
    postorder(head.left);
    postorder(head.right);
    console.log(head.data + ' ');
}
function postorder2(head) {
    if (head == null)
        return head;
    var stack = new Stack_1["default"]();
    var resStack = new Stack_1["default"]();
    stack.push(head);
    while (!stack.isEmpty()) {
        var node = stack.pop();
        if (node.left) {
            stack.push(node.left);
        }
        if (node.right) {
            stack.push(node.right);
        }
        resStack.push(node.data + '\n');
    }
    while (!resStack.isEmpty()) {
        console.log(resStack.pop());
    }
}
var treeNode = Tree_1.buildTree(5);
console.log('preorder***********************');
preorder(treeNode);
console.log('preorder2***********************');
preorder2(treeNode);
console.log('inorder***********************');
inorder(treeNode);
console.log('inorder2***********************');
inorder2(treeNode);
console.log('postorder***********************');
postorder(treeNode);
console.log('postorder2***********************');
postorder(treeNode);
