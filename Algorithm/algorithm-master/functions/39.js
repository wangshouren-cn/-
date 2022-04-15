/* 
两个单链表生成相加链表
*/
const Stack = require('../utils/Stack')
const Node = require('../utils/Node')

function AddLinkList(head1, head2) {
  if (!head1 || !head2) return head1 || head2
  const stack1 = new Stack()
  const stack2 = new Stack()
  while (head1 != null) {
    stack1.push(head1.data)
    head1 = head1.next
  }
  while (head2 != null) {
    stack2.push(head2.data)
    head2 = head2.next
  }
  let a = 0,
    b = 0,
    res = null,
    as = 0
  while (!stack1.isEmpty() && !stack2.isEmpty()) {
    a = stack1.pop()
    b = stack2.pop()
    const curNode = new Node((a + b + as) % 10)
    as = parseInt((a + b + as) / 10)
    curNode.next = res
    res = curNode
  }
  if (!stack1.isEmpty() || !stack2.isEmpty()) {
    let notEmptyStack = stack1.isEmpty() ? stack2 : stack1
    while (!notEmptyStack.isEmpty()) {
      let x = notEmptyStack.pop()
      const curNode = new Node((x + as) % 10)
      as = parseInt((a + b + as) / 10)
      curNode.next = res
      res = curNode
    }
  }
  if (as > 0) {
    const curNode = new Node(as)
    curNode.next = res
    res = curNode
  }
  return res
}
function AddLinkList2(head1, head2) {
  if (!head1 || !head2) return head1 || head2

  let node1 = reverse(head1)
  let node2 = reverse(head2)
  let as = 0,
    res = null
  while (node1 != null && node2 != null) {
    const a = node1.data
    const b = node2.data
    const newNode = new Node((a + b + as) % 10)
    newNode.next = res
    res = newNode
    as = parseInt((a + b + as) / 10)
    node1 = node1.next
    node2 = node2.next
  }
  if (node1 || node2) {
    let notEmpty = node1 ? node1 : node2
    while (notEmpty != null) {
      let x = notEmpty.data
      const newNode = new Node((x + as) % 10)
      newNode.next = res
      res = newNode
      as = parseInt((x + as) / 10)
      notEmpty = notEmpty.next
    }
  }
  if (as > 0) {
    const curNode = new Node(as)
    curNode.next = res
    res = curNode
  }
  return res
}
function reverse(head) {
  let pre = null,
    node = head
  while (node != null) {
    let tmp = node.next
    node.next = pre
    pre = node
    node = tmp
  }
  return pre
}

const build = require('../utils/buildLinkList')

const node1 = build(7)
const node2 = build(8)
AddLinkList2(node1, node2).log()
