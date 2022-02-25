import { TreeNode, buildTree } from "../utils/Tree";
/* 
在二叉树中找到累加和为指定值的最长路径长度
【难度】尉 ★★☆☆
*/

function getMaxLen(head: TreeNode, sum: number) {
  // key表示累加和，value表示当前和最早出现的层数
  const map = new Map<number, number>();
  map.set(0, 0);
  return preOrder(head, 0, 1, 0, sum, map);
}
function preOrder(
  node: TreeNode,
  preSum: number,
  level: number,
  maxLen: number,
  sum: number,
  map: Map<number, number>
) {
  if (node == null) return maxLen;
  const curSum = node.data + preSum;
  if (!map.has(curSum)) map.set(curSum, level);
  if (map.has(curSum - sum))
    maxLen = Math.max(maxLen, level - map.get(curSum - sum));
  maxLen = preOrder(node.left, curSum, level + 1, maxLen, sum, map);
  maxLen = preOrder(node.right, curSum, level + 1, maxLen, sum, map);
  // 因为这是一个深度优先遍历，所以清除下副作用
  if (level === map.get(curSum)) map.delete(curSum);
  return maxLen;
}
const node = buildTree(20);
console.log(getMaxLen(node, 34));
