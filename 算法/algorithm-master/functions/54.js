"use strict";
exports.__esModule = true;
var Node_1 = require("../utils/Node");
function merge(head1, head2) {
    if (head1 == null)
        return head2;
    if (head2 == null)
        return head1;
    var head = head1.data < head2.data ? head1 : head2, cur1 = head === head1 ? head1 : head2, cur2 = head === head1 ? head2 : head1, pre = null, next = null;
    while (cur1 != null && cur2 != null) {
        if (cur1.data < cur2.data) {
            pre = cur1;
            cur1 = cur1.next;
        }
        else {
            next = cur2.next;
            pre.next = cur2;
            cur2.next = cur1;
            pre = cur2;
            cur2 = next;
        }
    }
    cur1 ? null : (pre.next = cur2);
    return head;
}
var node1 = new Node_1["default"](2);
var node2 = new Node_1["default"](4);
var node3 = new Node_1["default"](6);
node1.next = node2;
node2.next = node3;
var node11 = new Node_1["default"](1);
var node22 = new Node_1["default"](3);
node11.next = node22;
merge(node1, node11).log();
