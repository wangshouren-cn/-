/* 
一种怪异的节点删除方式
【题目】
链表节点值类型为int型，给定一个链表中的节点node，但不给定整个链表的头节 点。如何在链表中删除node？请实现这个函数，并分析这么会出现哪些问题。
要求：时间复杂度为O（1）。
【难度】
士　★☆☆☆
本题的思路很简单，举例就能说明具体的做法。
例如，链表1->2->3->null，只知道要删除节点2，而不知道头节点。那么只需把节 点2的值变成节点3的值，然后在链表中删除节点3即可。
问题一：这样的删除方式无法删除最后一个节点。
问题二：这种删除方式在本质上根本就不是删除了node节点，而是把node节点的值 改变，然后删除node的下一个节点，在实际的工程中可能会带来很大问题。
*/
function removeNode(node) {
  let pre = null
  while (node.next != null) {
    node.data = node.next.data
    pre = node
    node = node.next
  }
  if (pre) pre.next = null
}
const Build = require('../utils/buildLinkList')
const node = Build(2)
node.log()
removeNode(node) ///remove 3
node.log()
