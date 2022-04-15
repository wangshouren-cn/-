/* 
实现二叉树的先序、中序、后序遍历，包括递归方式和非递归方式
*/
import { TreeNode, buildTree } from '../utils/Tree'
import Stack from '../utils/Stack'
function preorder(head: TreeNode) {
  if (head == null) return
  console.log(head.data + ' ')
  preorder(head.left)
  preorder(head.right)
}
function preorder2(head: TreeNode) {
  if (head == null) return head
  const stack = new Stack<TreeNode>()
  stack.push(head)
  while (!stack.isEmpty()) {
    const node = stack.pop()
    if (node.right) {
      stack.push(node.right)
    }
    if (node.left) {
      stack.push(node.left)
    }
    console.log(node.data + ' ')
  }
}
function inorder(head: TreeNode) {
  if (head == null) return
  inorder(head.left)
  console.log(head.data + ' ')
  inorder(head.right)
}
function inorder2(head: TreeNode) {
  if (head == null) return
  const stack = new Stack<TreeNode>()
  while (!stack.isEmpty() || head != null) {
    if (head != null) {
      stack.push(head)
      head = head.left
    } else {
      const node = stack.pop()
      console.log(node.data + ' ')
      head = node.right
    }
  }
}
function postorder(head: TreeNode) {
  if (head == null) return
  postorder(head.left)
  postorder(head.right)
  console.log(head.data + ' ')
}
function postorder2(head: TreeNode) {
  if (head == null) return head
  const stack = new Stack<TreeNode>()
  const resStack = new Stack<string>()
  stack.push(head)
  while (!stack.isEmpty()) {
    const node = stack.pop()
    if (node.left) {
      stack.push(node.left)
    }
    if (node.right) {
      stack.push(node.right)
    }

    resStack.push(node.data + '\n')
  }
  while (!resStack.isEmpty()) {
    console.log(resStack.pop())
  }
}
const treeNode = buildTree(5)
console.log('preorder***********************')
preorder(treeNode)
console.log('preorder2***********************')
preorder2(treeNode)
console.log('inorder***********************')
inorder(treeNode)
console.log('inorder2***********************')
inorder2(treeNode)
console.log('postorder***********************')
postorder(treeNode)
console.log('postorder2***********************')
postorder(treeNode)
