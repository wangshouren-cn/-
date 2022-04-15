/* 
打印两个有序链表的公共部分
【题目】
给定两个有序链表的头指针head1和head2，打印两个链表的公共部分。
【难度】
士　★☆☆☆
*/
class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}
function printCommonPart(head1, head2) {
  while (head1 !== null && head2 !== null) {
    if (head1.data === head2.data) {
      console.log(head1.data)
      head1 = head1.next
      head2 = head2.next
    } else if (head1.data > head2.data) {
      head2 = head2.next
    } else {
      head1 = head1.next
    }
  }
}

