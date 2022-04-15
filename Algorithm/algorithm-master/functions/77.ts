import { TreeNode } from "../utils/Tree";
/* 
根据后序数组重建搜索二叉树
【题目】
给定一个整型数组arr,已知其中没有重复值,判断arr是否可能是节点值类型为整
型的搜索二叉树后序遍历的结果。
进阶:如果整型数组arr中没有重复值,且已知是一棵搜索二叉树的后序遍历结果,
通过数组arr重构二叉树。
【难度】
士
★☆☆☆
*/
function isPostArr(arr: number[]) {
  if (!arr) return false;
  return isPost(arr, 0, arr.length - 1);
}
function isPost(arr: number[], start: number, end: number) {
  if (start === end || start + 1 === end) return true;
  let less = -1,
    more = end;
  for (let i = start; i < end; i++) {
    if (arr[end] > arr[i]) {
      less = i;
    } else {
      more = more === end ? i : more;
    }
  }
  if (more === less + 1 && more !== end) return isPost(arr, start, less) && isPost(arr, more, end - 1);
  return false;
}

//通过数组arr重构二叉树

function rebuildPostArr(arr: number[]) {
  if (!arr) return null;
  return rebuild(arr, 0, arr.length - 1);
}
function rebuild(arr, start, end) {
  if (start > end) return null;
  const head = new TreeNode(arr[end]);
  let less = -1,
    more = end;
  for (let i = start; i < end; i++) {
    if (arr[end] > arr[i]) {
      less = i;
    } else {
      more = more === end ? i : more;
    }
  }
  head.left = rebuild(arr, start, less);
  head.right = rebuild(arr, more, end - 1);
  return head;
}
console.log(isPostArr([1, 3]));
rebuildPostArr([2, 1]).log();
