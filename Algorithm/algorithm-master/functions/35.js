/* 
判断一个链表是否为回文结构
【题目】 给定一个链表的头节点head，请判断该链表是否为回 
文结构。 例如： 1->2->1，返回true。 1->2->2->1，返回true。 15->6->15，返回true。 1->2->3，返回false。
进阶： 如果链表长度为N，时间复杂度达到O(N)，额外空间复杂 度达到O(1)。
*/
const Node = require('../utils/Node')
function isPalindrome(head) {
  if (!head) return false
  if (head.next == null) return true

  let f = head,
    s = head
  //找到中点
  while (f.next && f.next.next) {
    s = s.next
    f = f.next.next
  }

  //反转中点后面的链表
  let node = s.next,
    pre = s
  s.next = null
  while (node != null) {
    let tmp = node.next
    node.next = pre
    pre = node
    node = tmp
  }
  //比较两条链表
  let node1 = pre,
    res = true
  // console.log('node1, head', node1, head)
  while (pre != null && head != null) {
    if (pre.data !== head.data) {
      res = false
      break
    }
    pre = pre.next
    head = head.next
  }

  //恢复中点之后的链表  重连
  pre = null

  while (node1 != null && node1 !== s) {
    let tmp = node1.next
    node1.next = pre
    pre = node1
    node1 = tmp
  }

  s.next = pre
  return res
}
const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)
const node4 = new Node(3)
const node5 = new Node(2)
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node1.log()
console.log(isPalindrome(node1))
node1.log()
