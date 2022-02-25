"use strict";
exports.__esModule = true;
var Tree_1 = require("./../utils/Tree");
/*
已知一棵完全二叉树，求其节点的个数
要求：时间复杂度低于O(N)，N为这棵树的节点个数
*/
function getSize(head) {
    console.log(getMostLeftLevel(head));
    return progress(head, getMostLeftLevel(head));
}
function progress(head, level) {
    if (head == null)
        return 0;
    var rightMostLeftH = getMostLeftLevel(head.right);
    if (rightMostLeftH + 1 === level) {
        return (1 << (level - 1)) + progress(head.right, rightMostLeftH);
    }
    else {
        return (1 << rightMostLeftH) + progress(head.left, level - 1);
    }
}
function getMostLeftLevel(head) {
    if (head == null)
        return 0;
    var level = 1;
    while (head.left) {
        level += 1;
        head = head.left;
    }
    return level;
}
console.log(getSize(Tree_1.buildTree(10)));
