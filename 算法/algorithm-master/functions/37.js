/* 
复制含有随机指针节点的链表
*/
const Node = require('../utils/Node')
function copy(head) {
  //copy newNode
  let node = head
  while (node != null) {
    const tmp = node.next
    const newNode = new Node(node.data)
    node.next = newNode
    newNode.next = tmp
    node = tmp
  }
  //连接next、random
  node = head
  while (node != null) {
    const tmp = node.next.next
    const copyNode = node.next

    copyNode.next = tmp && tmp.next
    copyNode.random = node.random && node.random.next

    node = tmp
  }
  return head.next
  //连接random
}
const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)
const node4 = new Node(4)
const node5 = new Node(5)
node1.next = node2
node1.random = node3

node2.next = node3
node2.random = node4

node3.next = node4
node3.random = null

node4.next = node5
node4.random = node1

node5.random = node2

const copyNode = copy(node1)

copyNode.log()

copyNode.random.log()
