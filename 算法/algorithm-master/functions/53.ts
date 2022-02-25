import { TreeNode } from '../utils/Tree'
import { buildTree } from './../utils/Tree'

/* 
已知一棵完全二叉树，求其节点的个数
要求：时间复杂度低于O(N)，N为这棵树的节点个数
*/
function getSize(head: TreeNode): number {
  console.log(getMostLeftLevel(head))
  return progress(head, getMostLeftLevel(head))
}
function progress(head: TreeNode, level: number): number {
  if (head == null) return 0
  const rightMostLeftH = getMostLeftLevel(head.right)
  if (rightMostLeftH + 1 === level) {
    return (1 << (level - 1)) + progress(head.right, rightMostLeftH)
  } else {
    return (1 << rightMostLeftH) + progress(head.left, level - 1)
  }
}
//获取以节点为根节点的完全二叉树深度
function getMostLeftLevel(head: TreeNode): number {
  if (head == null) return 0
  let level = 1
  while (head.left) {
    level += 1
    head = head.left
  }
  return level
}
console.log(getSize(buildTree(10)))
