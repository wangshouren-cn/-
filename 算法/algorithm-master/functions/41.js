/* 
删除无序链表中值重复出现的节点
给定一个无序单链表的头节点head，删除其中值重复出现的节点。
例如：1->2->3->3->4->4->2->1->1->null，删除值重复的节点之后为1->2->3->4->null。
请按以下要求实现两种方法。
方法1：如果链表长度为N，时间复杂度达到O（N）。
方法2：额外空间复杂度为O（1）。
【难度】
士　★☆☆☆
*/
const buildLinkList = require('../utils/buildLinkList')
// foo1 时间复杂度达到O（N）,额外空间复杂度为O（N）
function foo1(head) {
  if (!head) return head
  const set = new Set()
  set.add(head.data)
  let pre = head.data,
    cur = head.next
  while (cur != null) {
    if (set.has(cur.data)) {
      pre.next = cur.next
    } else {
      set.add(cur.data)
      pre = cur
    }
    cur = cur.next
  }
}
// foo1 时间复杂度达到O（N²）,额外空间复杂度为O（1）
function foo2(head) {
  if (!head) return head
  let node = head
  while (node != null) {
    let pre = node,
      cur = node.next,
      data = node.data
    while (cur != null) {
      if (cur.data === data) {
        pre.next = cur.next
      } else {
        pre = cur
      }
      cur = cur.next
    }
    node = node.next
  }
}
//测试
const node = buildLinkList(10, false, 10)
node.log()
foo2(node)
node.log() 
