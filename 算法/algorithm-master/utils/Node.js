"use strict";
exports.__esModule = true;
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
        this.last = null;
    }
    Node.prototype.log = function () {
        var res = "" + this.data;
        var cur = this;
        while (cur.next) {
            cur = cur.next;
            res += "" + (cur.last ? '<->' : '->') + cur.data;
        }
        console.log(res);
    };
    return Node;
}());
exports["default"] = Node;
function buildLinkList(size, isDouble, RandNumber) {
    if (size < 1)
        return null;
    var res = new Node(RandNumber ? Math.floor(Math.random() * RandNumber) + 1 : 1);
    var cur = res, x = 2;
    while (x <= size) {
        cur.next = new Node(RandNumber ? Math.floor(Math.random() * RandNumber) : x);
        isDouble ? (cur.next.last = cur) : null;
        cur = cur.next;
        x++;
    }
    return res;
}
exports.buildLinkList = buildLinkList;
