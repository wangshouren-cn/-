/*
通过有序数组生成平衡搜索二叉树
【题目】
给定一个有序数组sortArr，已知其中没有重复值，用这个有序数组生成一棵平衡 搜索二叉树，并且该搜索二叉树中序遍历的结果与sortArr一致。
【难度】
士　★☆☆☆
 */
import { TreeNode } from '../utils/Tree'
function makeTree(arr: number[]) {
  if (!arr) return null
  return make(arr, 0, Math.floor(arr.length / 2), arr.length - 1)
}
function make(arr: number[], l, mid, r) {
  if (l > mid || mid > r) return null
  const head = new TreeNode(arr[mid])
  let left = make(arr, l, Math.floor((mid + l - 1) / 2), mid - 1)
  let right = make(arr, mid + 1, Math.floor((r + mid + 1) / 2), r)
  head.left = left
  head.right = right
  return head
}
makeTree([1, 2]).log()
