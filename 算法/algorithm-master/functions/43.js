/* 
将搜索二叉树转换成双向链表
【题目】
对二叉树的节点来说，有本身的值域，有指向左孩子和右孩子的两个指针；对双向 链表的节点来说，有本身的值域，有指向上一个节点和下一个节点的指针。在结构 上，两种结构有相似性，现在有一棵搜索二叉树，请将其转换为一个有序的双向链 表。
*/
class Node {
  constructor(data) {
    this.left = null
    this.right = null
    this.data = data
  }
}
//方法一：用队列等容器收集二叉树中序遍历结果的方法。时间复杂度为O（N），额 外空间复杂度为O（N）
const Queue = require('../utils/Queue')
function cover1(head) {
  if (!head) return head
  const queue = new Queue()
  insertIntoQueue(head, queue)
  let newHead = queue.poll(),
    pre = newHead,
    cur = null
  while (!queue.isEmpty()) {
    cur = queue.poll()
    cur.left = pre
    pre.right = cur
    pre = cur
  }
  return newHead
}
function insertIntoQueue(head, queue) {
  if (head == null) return
  insertIntoQueue(head.left, queue)
  queue.add(head)
  insertIntoQueue(head.right, queue)
}
// 方法二：利用递归函数，除此之外不使用任何容器的方法。时间复杂度为O（N）， 额外空间复杂度为O（+h），h为二叉树的高度
function cover2(head) {
  if (!head) return head
  return process(head)[0]
}
function process(head) {
  if (!head) return [null, null]
  const [leftStart, leftEnd] = process(head.left)
  const [rightStart, rightEnd] = process(head.right)
  if (leftEnd) {
    leftEnd.right = head
  }
  head.left = leftEnd
  if (rightStart) {
    rightStart.left = head
  }
  head.right = rightStart
  return [leftStart ? leftStart : head, rightEnd ? rightEnd : head]
}
const node = new Node(3)
const node2 = new Node(1)
const node3 = new Node(2)
node3.left = node2
node3.right = node
const head = cover2(node3)
console.log(head)
