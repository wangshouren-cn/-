/* 
在单链表中删除指定值的节点
【题目】
给定一个链表的头节点head和一个整数num，请实现函数将值为num的节点全部删 除。
例如，链表为1->2->3->4->null，num=3，链表调整后为：1->2->4->null。
【难度】
士　★☆☆☆
 */
const Stack = require('../utils/Stack')
const Build = require('../utils/buildLinkList');
function remove1(head,value){
  if(!head) return head
  const stack = new Stack
  while(head!=null){
    if(head.data !=value){
      stack.push(head)
    }
    head = head.next
  }
  let pre = null
  while(!stack.isEmpty()){
    const node = stack.pop()
    node.next = pre
    pre = node
  }
  return pre
}
function remove2(head,value){
  if(!head) return head
  while(head.data===value){
    head = head.next
  }
  let pre = head,cur = head
  while(cur.next!=null){
    cur = cur.next
    if(cur.data===value){
      pre.next = cur.next
    }else{
      pre = cur
    }
  }
  return head
}
const node = Build(10,false,3)
node.log()
remove2(node,2).log()