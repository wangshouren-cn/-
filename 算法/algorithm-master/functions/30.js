/* 
反转部分单向链表
【难度】
士　★☆☆☆
*/
function reverse(head, from, to) {
  if (!head || from < 1 || to < from) return head

  let len = 0,
    pre,
    next
  node = head

  //找到from前一个节点，to后一个节点
  while (node != null) {
    len++
    len === from - 1 ? (pre = node) : null
    len === to + 1 ? (next = node) : null
    node = node.next
  }

  if (len < to) return head

  //翻转from——to的节点
  let _pre = null,
    _cur = pre ? pre.next : head,
    last = _cur //假设from=2，to=5，last是反转后的第4节点，这里记录一下
  while (_cur != next) {
    let tmp = _cur.next
    _cur.next = _pre
    _pre = _cur
    _cur = tmp
  }
  //重连
  last.next = next
  pre.next = _pre
  return pre == null ? _pre : head
}

const buildLinkList = require('../utils/buildLinkList')
reverse(buildLinkList(10), 3, 7).log()
