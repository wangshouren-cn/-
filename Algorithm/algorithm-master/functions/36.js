/* 
将单向链表按某值划分成左边小、中间相等、右边大的形式
【进阶】
如果链表长度为N，时间复杂度请达到O(N)，额外空间复杂度请达到O(1)。
*/
function divide(head, x) {
  let less = null,
    less_tail = null,
    equal = null,
    equal_tail = null,
    more = null,
    more_tail = null
  while (head != null) {
    let tmp = head.next
    if (head.data < x) {
      !less ? (less = head) : (less_tail.next = head)
      less_tail = head
      less_tail.next = null
    } else if (head.data === x) {
      !equal ? (equal = head) : (equal_tail.next = head)
      equal_tail = head
      equal_tail.next = null
    } else {
      !more ? (more = head) : (more_tail.next = head)
      more_tail = head
      more_tail.next = null
    }
    head = tmp
  }

  if (less != null) {
    less_tail.next = equal ? equal : more
  }
  if (equal != null) {
    equal_tail.next = more
  }
  return less ? less : equal ? equal : more
}

const buildLinkList = require('../utils/buildLinkList')
let node = buildLinkList(100, false, 100)
node.log()
console.log('*******'.repeat(20))
node = divide(node, 50)
node.log()
