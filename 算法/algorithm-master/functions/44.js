/* 
单链表的选择排序  
【题目】
给定一个无序单链表的头节点head，实现单链表的选择排序。
要求：额外空间复杂度为O（1）。
【难度】
士　★☆☆☆
*/
const buildLinkList = require('../utils/buildLinkList')
export function selectionSort(head) {
  if (!head) return head
  let tail = null,
    cur = head,
    small = null,
    smallPre = null,
    newHead
  while (cur != null) {
    smallPre = getSmallestPre(cur)
    if (smallPre != null) {
      small = smallPre.next
      smallPre.next = small.next
    } else {
      small = cur
    }
    cur = small === cur ? cur.next : cur
    if (tail == null) {
      tail = small
      newHead = small
    } else {
      tail.next = small
      tail = tail.next
    }
  }
  return newHead
}
function getSmallestPre(head) {
  let small = head,
    smallPre = null,
    min = head.data,
    cur = head
  while (cur.next != null) {
    let pre = cur
    cur = cur.next
    if (cur.data < min) {
      small = cur
      smallPre = pre
      min = cur.data
    }
  }
  return smallPre
}
const node = buildLinkList(10, false, 10)
node.log()
selectionSort(node).log()
