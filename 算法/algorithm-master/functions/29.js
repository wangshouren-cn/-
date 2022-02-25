/* 
反转单向/双向链表
*/
const buildLinkList  = require('../utils/buildLinkList')
function reverseSimple(head){
  if(!head) return
  let pre=null,
  next=null
  while(head!=null){
    next = head
    head = head.next
    next.next = pre
    pre = next
  }
  return next
}
function reverseDouble(head){
  if(!head) return
  let pre=null,
  next=null
  while(head!=null){
    next = head
    head = head.next
    next.next = pre
    next.last= head
    pre = next
  }
  return next
}
const node = buildLinkList(10)
// reverseSimple(node).log()
reverseSimple(node).log()
reverseDouble(buildLinkList(10,true)).log()