import { TreeNode } from "../utils/Tree";
/*
找到二叉树中的最大搜索二叉子树
*/
class ReturnType {
    constructor(maxSize, min, max, maxChildTreeNode) {
        this.maxSize = maxSize;
        this.min = min;
        this.max = max;
        this.maxChildTreeNode = maxChildTreeNode;
    }
}
function findMaxChildTree(head) {
    return process(head).maxChildTreeNode;
}
function process(head) {
    if (head == null)
        return new ReturnType(0, Infinity, -Infinity, null);
    const lData = process(head.left);
    const rData = process(head.right);
    let maxChildTreeNode = null, maxSize = 0;
    maxChildTreeNode =
        lData.maxSize > rData.maxSize
            ? lData.maxChildTreeNode
            : lData.maxChildTreeNode;
    maxSize = lData.maxSize > rData.maxSize ? lData.maxSize : lData.maxSize;
    if (lData.maxChildTreeNode == head.left &&
        rData.maxChildTreeNode === head.right &&
        lData.max <= head.data &&
        rData.min >= head.data) {
        maxSize += 1;
        maxChildTreeNode = head;
    }
    return new ReturnType(maxSize, Math.min(lData.min, lData.min, head.data), Math.max(lData.max, rData.max, head.data), maxChildTreeNode);
}
const node = new TreeNode(4);
const node2 = new TreeNode(1);
const node3 = new TreeNode(3);
node.left = node2;
node.right = node3;
console.log(findMaxChildTree(node));
