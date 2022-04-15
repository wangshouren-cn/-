import { TreeNode } from '../utils/Tree';
import { printTree } from './../utils/Tree';
/*
找到二叉树中符合搜索二叉树条件的最大拓扑结构
【题目】给定一棵二叉树的头节点head，已知所有节点的值都不一样，返回其中最大的且符合搜索二叉树条件的最大拓扑结构的大小。
*/
// 方案一，时间复杂度O（n^2）
function getMaxTree(head) {
    if (head == null)
        return 0;
    let max = process(head, head);
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
class ReturnType {
    constructor(l, r) {
        this.l = l;
        this.r = r;
    }
}
function getMaxTree2(head) {
    const map = new Map();
    return progress2(head, map);
}
function progress2(node, map) {
    if (!node)
        return null;
    const ls = progress2(node.left, map);
    const rs = progress2(node.right, map);
    modifyMap(node.left, map, node.data, true);
    modifyMap(node.right, map, node.data, false);
    const rl = map.get(node.left);
    const rr = map.get(node.right);
    const nl = rl ? rl.l + rl.r + 1 : 0;
    const nr = rr ? rr.l + rr.r + 1 : 0;
    const r = new ReturnType(nl, nr);
    map.set(node, r);
    return Math.max(ls, rs, nl + nr + 1);
}
function modifyMap(node, map, value, l) {
    if (node == null || !map.has(node))
        return 0;
    const r = map.get(node);
    if ((node.data > value && l) || (node.data < value && !l)) {
        map.delete(node);
        return r.l + r.r + 1;
    }
    else {
        const m = modifyMap(l ? node.right : node.left, map, value, l);
        if (l) {
            r.r -= m;
        }
        else {
            r.l -= m;
        }
        return m;
    }
}
const node6 = new TreeNode(6);
const node1 = new TreeNode(1);
const node12 = new TreeNode(12);
const node0 = new TreeNode(0);
const node3 = new TreeNode(3);
const node10 = new TreeNode(10);
const node13 = new TreeNode(13);
const node4 = new TreeNode(4);
const node14 = new TreeNode(14);
const node20 = new TreeNode(20);
const node16 = new TreeNode(16);
const node2 = new TreeNode(2);
const node5 = new TreeNode(5);
const node11 = new TreeNode(11);
const node15 = new TreeNode(15);
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
printTree(node6);
console.log(getMaxTree(node6));
console.log(getMaxTree2(node6));
