/*
 删除链表的中间节点和a/b处的节点
【题目】
给定链表的头节点head，实现删除链表的中间节点的函数。
例如：
1->2，删除节点1；
1->2->3，删除节点2；
1->2->3->4->5，删除节点3；
进阶：
给定链表的头节点head、整数a和b，实现删除位于a/b处节点的函数。
例如：
链表：1->2->3->4->5，假设a/b的值为r。
如果r等于0，不删除任何节点；
如果r在区间（0，1/5]上，删除节点1；
如果r在区间（1/5，2/5]上，删除节点2；
如果r在区间（2/5，3/5]上，删除节点3；
如果r在区间（3/5，4/5]上，删除节点4；
如果r在区间（4/5，1]上，删除节点5；
如果r大于1，不删除任何节点。
【难度】
士　★☆☆☆
先来分析原问题，如果链表为空或者长度为1，不需要调整，则直接返回；如果链表 的长度为2，将头节点删除即可；当链表长度到达3，应该删除第2个节点；当链表长 度为4，应该删除第2个节点；当链表长度为5，应该删除第3个节点……也就是链表
长度每增加2（3，5，7…），要删除的节点就后移一个节点。删除节点的问题在之 前的题目中我们已经讨论过，如果要删除一个节点，则需要找到待删除节点的前一 个节点。
*/

function removeMid(head) {
  if (head == null || head.next == null) {
    //链表长度小于2
    return head
  }
  if (head.next.next == null) {
    //链表长度等于2
    return head.next
  }
  let pre = head,
    cur = head.next.next
  while (cur.next && cur.next.next) {
    pre = pre.next
    cur = cur.next.next
  }
  pre.next = pre.next.next
  return head
}
function removeByRatio(node, a, b) {
  if (a / b == 0 || a / b > 1 || node == null) return node
  let k = 1,
    cur = node
  while (cur.next) {
    cur = cur.next
    k++
  }

  let which = Math.ceil((a * k) / b)
  if (which === 1) {
    return node.next
  }
  let pre = node
  while (--which > 1) {
    pre = pre.next
  }
  pre.next = pre.next ? pre.next.next : null
  return node
}
/*
const buildLinkList = require('../utils/buildLinkList')
 const node = buildLinkList(10, false)
removeByRatio(node, 2, 3).log() */
