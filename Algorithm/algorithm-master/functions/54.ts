import Node, { buildLinkList } from '../utils/Node'
/* 
合并两个有序链表
*/
function merge(head1: Node, head2: Node) {
  if (head1 == null) return head2
  if (head2 == null) return head1
  let head = head1.data < head2.data ? head1 : head2,
    cur1: Node | null = head === head1 ? head1 : head2,
    cur2: Node | null = head === head1 ? head2 : head1,
    pre = null,
    next = null
  while (cur1 != null && cur2 != null) {
    if (cur1.data < cur2.data) {
      pre = cur1
      cur1 = cur1.next
    } else {
      next = cur2.next
      pre!.next = cur2
      cur2.next = cur1
      pre = cur2
      cur2 = next
    }
  }
  cur1 ? null : (pre!.next = cur2)
  return head
}
let node1 = new Node(2)
let node2 = new Node(4)
let node3 = new Node(6)
node1.next = node2
node2.next = node3

let node11 = new Node(1)
let node22 = new Node(3)
node11.next = node22

merge(node1, node11).log()
