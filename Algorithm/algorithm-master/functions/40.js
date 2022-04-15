/* 
将单链表的每K个节点之间逆序★★☆☆

 */
const Stack = require('../utils/Stack.js')
function reverseStepByK1(head, k) {
  if (k < 2 || !head) return head
  const stack = new Stack()
  let pre = null,
    next = null,
    cur = head,
    newHead = head
  while (cur != null) {
    stack.push(cur)
    next = cur.next
    if (stack.size() === k) {
      pre = resign1(stack, pre, next)
      newHead = newHead === head ? cur : newHead
    }
    cur = next
  }
  return newHead
}
function resign1(stack, left, right) {
  const head = stack.pop()
  if (left) {
    left.next = head
  }
  let node = head
  while (!stack.isEmpty()) {
    let cur = stack.pop()
    node.next = cur
    node = cur
  }
  node.next = right
  return node
}

function reverseStepByK2(head, k) {
  if (k < 2 || !head) return head

  let newHead = head,
    pre = null,
    next = null,
    cur = head,
    count = 0
  while (cur != null) {
    next = cur.next
    if (++count === k) {
      count = 0
      pre = resign2(pre, next, head)
      newHead = newHead === head ? cur : newHead
    }
    cur = next
  }
  return newHead
}
function resign2(left, right, head) {
  let cur = left ? left.next : head,
    pre = right,
    next = null,
    res = cur
  while (cur.next != right) {
    next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  cur.next = pre
  if (left) left.next = cur
  return res
}
const build = require('../utils/buildLinkList')

const node = reverseStepByK2(build(10), 2)
node.log()
