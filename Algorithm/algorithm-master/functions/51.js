/*
判断一棵树是否是搜索二叉树
*/
import { TreeNode } from '../utils/Tree';
import Stack from './../utils/Stack';
function isSBT(head) {
    if (head == null)
        return false;
    const stack = new Stack();
    let min = -Infinity;
    while (!stack.isEmpty() || head != null) {
        if (head != null) {
            stack.push(head);
            head = head.left;
        }
        else {
            const node = stack.pop();
            if (min > node.data)
                return false;
            min = node.data;
            head = node.right;
        }
    }
    return true;
}
const node = new TreeNode(5);
const node2 = new TreeNode(4);
const node3 = new TreeNode(6);
const node4 = new TreeNode(2);
const node5 = new TreeNode(7);
node.left = node2;
node.right = node3;
node2.left = node4;
node3.right = node5;
console.log(isSBT(node));
