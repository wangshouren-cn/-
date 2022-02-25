"use strict";
exports.__esModule = true;
/*
在二叉树中找到一个节点的后继节点
【题目】 现在有一种新的二叉树节点类型如下：
public class Node { public int value; public Node left; public Node right; public Node parent;
public Node(int data) { this.value = data; }
}
该结构比普通二叉树节点结构多了一个指向父节点的parent指针。假 设有一 棵Node类型的节点组成的二叉树，树中每个节点的parent指针 都正确地指向 自己的父节点，头节点的parent指向null。只给一个在 二叉树中的某个节点 node，请实现返回node的后继节点的函数。在二 叉树的中序遍历的序列中， node的下一个节点叫作node的后继节点。
*/
var Tree_1 = require("../utils/Tree");
function getSuccessorNode(node) {
    if (node == null)
        return null;
    if (node.right) {
        return getMostLeft(node.right);
    }
    else {
        var parent_1 = node.parent;
        var curent = node;
        while (parent_1 != null && curent != parent_1.left) {
            parent_1 = parent_1.parent;
            curent = curent.parent;
        }
        return parent_1;
    }
}
function getMostLeft(node) {
    while (node.left) {
        node = node.left;
    }
    return node;
}
var treeNode = Tree_1.buildTree(5, true);
console.log(getSuccessorNode(treeNode.left.right));
