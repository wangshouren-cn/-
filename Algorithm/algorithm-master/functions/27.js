/* 
在单链表和双链表中删除倒数第K个节点
【题目】
分别实现两个函数，一个可以删除单链表中倒数第K个节点，另一个可以删除双链表 中倒数第K个节点。
【要求】
如果链表长度为N，时间复杂度达到O（N），额外空间复杂度达到O（1）。
【难度】
士　★☆☆☆
*/
class Node {
  constructor(data) {
    this.data = data
    this.next = null
    this.last = null
  }
}
function removeLastK(head, k) {
  if (k < 1) return
  let cur = head
  while (cur !== null) {
    cur = cur.next
    k--
  }
  if (k === 0) head = head.next
  if (k < 0) {
    cur = head
    let last = cur
    while (k++ !== 0) {
      last = cur
      cur = cur.next
    }
    last.next = last.next.next
  }
  return head
}
function removeLastK2(head, k) {
  if (k < 1) return
  let cur = head
  while (cur !== null) {
    cur = cur.next
    k--
  }
  if (k === 0) {
    head = head.next
    head.last = null
  }
  if (k < 0) {
    cur = head
    let last = cur
    while (k++ !== 0) {
      last = cur
      cur = cur.next
    }
    if (last.next.next) {
      last.next.next.last = last
    }
    last.next = last.next.next
  }
  return head
}


