/*
判断一棵二叉树是否是平衡二叉树（一个节点的左子树高度和右子树高度差不超过1）
*/
import { TreeNode, buildTree } from '../utils/Tree';
function isBalance(head) {
    return progress(head) >= 0;
}
//如果当前节点平衡返回他的高度，否则返回-1
function progress(head) {
    if (head == null)
        return 0;
    const leftH = progress(head.left);
    if (leftH < 0)
        return -1;
    const rightH = progress(head.right);
    if (rightH < 0)
        return -1;
    if (Math.abs(leftH - rightH) > 1)
        return -1;
    return Math.max(leftH, rightH) + 1;
}
const node = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
node.left = node2;
node2.left = node3;
console.log(isBalance(buildTree(5)));
console.log(isBalance(node));
