/* 
两个单链表相交的一系列问题
【题目】 在本题中，单链表可能有环，也可能无环。给定两个 单链表的头节点 head1和head2，这两个链表可能相交，也可能 不相交。请实现一个函数， 如果两个链表相交，请返回相交的 第一个节点；如果不相交，返回null 即可。 要求：如果链表1 的长度为N，链表2的长度为M，时间复杂度请达到 O(N+M)，额外 空间复杂度请达到O(1)。
*/
function getIntersectNode(head1, head2) {
  const loop1 = getLoop(head1)
  const loop2 = getLoop(head2)

  if (!loop1 && !loop2) {
    return noLoop(head1, head2)
  }
  if (loop1 && loop2) {
    return bothLoop(head1, loop1, head2, loop2)
  }
  return false
}
function bothLoop(head1, loop1, head2, loop2) {
  if (loop1 === loop2) {
    let node1 = head1,
      len1 = 1
    let node2 = head2,
      len2 = 1
    while (node1.next != loop1) {
      len1++
      node1 = node1.next
    }
    while (node2.next != loop2) {
      len2++
      node2 = node2.next
    }
    node1 = head1
    node2 = head2
    if (len1 > len2) {
      for (let i = 0; i < len1 - len2; i++) {
        node1 = node1.next
      }
    } else if (len2 > len1) {
      for (let i = 0; i < len2 - len1; i++) {
        node2 = node2.next
      }
    }
    while (node1 !== node2) {
      node1 = node1.next
      node2 = node2.next
    }
    return node1
  } else {
    let next = loop1.next
    while (next !== loop1) {
      if (next === loop2) return loop2
      next = next.next
    }
    return false
  }
}
function noLoop(head1, head2) {
  if (head1 == null || head2 == null) return false
  let node1 = head1,
    len1 = 1
  let node2 = head2,
    len2 = 1
  while (node1.next != null) {
    len1++
    node1 = node1.next
  }
  while (node2.next != null) {
    len2++
    node2 = node2.next
  }
  if (node1 === node2) {
    node1 = head1
    node2 = head2
    if (len1 > len2) {
      for (let i = 0; i < len1 - len2; i++) {
        node1 = node1.next
      }
    } else if (len2 > len1) {
      for (let i = 0; i < len2 - len1; i++) {
        node2 = node2.next
      }
    }
    while (node1 !== node2) {
      node1 = node1.next
      node2 = node2.next
    }
    return node1
  } else {
    return false
  }
}
function getLoop(head) {
  let f = head,
    s = head

  while (f.next && f.next.next) {
    f = f.next.next
    s = s.next
    if (f === s) {
      break
    }
  }
  if (f.next) {
    f = head
    while (f != null && s != null) {
      f = f.next
      s = s.next
      if (f === s) {
        return f
      }
    }
    return false
  } else {
    return false
  }
}
const Node = require('../utils/Node')

const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)
const node4 = new Node(4)
const node5 = new Node(5)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = node3

const node11 = new Node(11)
const node22 = new Node(22)
const node33 = new Node(33)
const node44 = new Node(44)
const node55 = new Node(55)

node11.next = node22
node22.next = node33
node33.next = node44
node44.next = node55
node55.next = node4
console.log(getIntersectNode(node1, node11))
