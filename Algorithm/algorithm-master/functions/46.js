/* 
向有序的环形单链表中插入新节点
【题目】
一个环形单链表从头节点head开始不降序，同时由最后的节点指回头节点。给定这 样一个环形单链表的头节点head和一个整数num，请生成节点值为num的新节点，并 插入到这个环形链表中，保证调整后的链表依然有序。
【难度】
士　★☆☆☆
*/
const build = require('../utils/buildLinkList')
const Node = require('../utils/Node')
function insertNode(head, value) {
  const node = new Node(value)
  if (head == null) {
    node.next = node
    return node
  }
  let pre = head,
    cur = head.next
  while (cur !== head) {
    if (pre.data <= value && cur.data > value) {
      pre.next = node
      node.next = cur
      return head
    }
    pre = cur
    cur = cur.next
  }
  pre.next = node
  node.next = head
  if (value < head.data) return node
  return head
}
const node1 = new Node(1)
const node2 = new Node(2)
node1.next = node2
node2.next = node1
// console.log(insertNode(node1, 0))
// console.log(insertNode(node1, 5))
// console.log(insertNode(node1, 1.5))
console.log(insertNode(null, 1.5))