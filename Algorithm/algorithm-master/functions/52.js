import { TreeNode } from '../utils/Tree';
import Queue from './../utils/Queue';
/*
判断一棵树是否是完全二叉树
*/
function isCBT(head) {
    if (head == null)
        return false;
    const queue = new Queue();
    queue.add(head);
    let flag = false;
    while (!queue.isEmpty()) {
        const node = queue.poll();
        if ((flag && (node.left || node.right)) || (node.right && !node.left))
            return false;
        if (node.left)
            queue.add(node.left);
        if (node.right)
            queue.add(node.right);
        if (!node.left || !node.right)
            flag = true;
    }
    return true;
}
const node1 = new TreeNode(1);
const node2 = new TreeNode(1);
const node3 = new TreeNode(1);
const node4 = new TreeNode(1);
const node5 = new TreeNode(1);
const node6 = new TreeNode(1);
node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
console.log(isCBT(node1));
