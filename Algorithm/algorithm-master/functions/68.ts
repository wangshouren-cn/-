import { TreeNode, buildTree } from "../utils/Tree";
/* 
判断t1树是否包含t2树全部的拓扑结构
【题目】
给定彼此独立的两棵树头节点分别为t1和t2,判断t1树是否包含t2树全部的拓扑结构。
*/
function contains(n1: TreeNode, n2: TreeNode): boolean {
  if (n2 == null) return true;
  if (n1 == null) return false;
  return check(n1, n2) || contains(n1.left, n2) || contains(n1.right, n2);
}
function check(n1: TreeNode, n2: TreeNode): boolean {
  if (n2 == null) return true;
  if (n1 != null && n1.data == n2.data) {
    return check(n1.left, n2.left) && check(n1.right, n2.right);
  } else {
    return false;
  }
}
const node = buildTree(10);
const node2 = buildTree([2, 4, 5, 8, 9]);
node.log();
node2.log();
console.log(contains(node, node2));
