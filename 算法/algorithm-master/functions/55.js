"use strict";
exports.__esModule = true;
var Node_1 = require("../utils/Node");
/*
按照左右半区的方式重新组合单链表
【题目】
给定一个单链表的头部节点head，链表长度为N，如果N为偶数，那么前N/2个节点算作左半区，后N/2个节点算作右半区；如果N为奇数，那么前N/2个节点算作左半 区，后N/2+1个节点算作右半区。左半区从左到右依次记为L1->L2->…，右半区从 左到右依次记为R1->R2->…，请将单链表调整成L1->R1->L2->R2->…的形式。
*/
function relocate(head) {
    if (head == null || head.next == null)
        return head;
    var mid = head, right = head.next;
    while (right.next != null && right.next.next != null) {
        mid = mid.next;
        right = right.next.next;
    }
    right = mid.next;
    mid.next = null;
    merge(head, right);
}
function merge(left, right) {
    while (left.next != null) {
        var next = right.next;
        right.next = left.next;
        left.next = right;
        left = right.next;
        right = next;
    }
    left.next = right;
}
var node1 = Node_1.buildLinkList(1);
relocate(node1);
node1.log();
var node2 = Node_1.buildLinkList(2);
relocate(node2);
node2.log();
var node3 = Node_1.buildLinkList(3);
relocate(node3);
node3.log();
var node4 = Node_1.buildLinkList(4);
relocate(node4);
node4.log();
var node5 = Node_1.buildLinkList(5);
relocate(node5);
node5.log();
// console.log(node)
