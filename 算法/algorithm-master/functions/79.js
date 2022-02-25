"use strict";
exports.__esModule = true;
var Tree_1 = require("./../utils/Tree");
var Tree_2 = require("../utils/Tree");
/*
在二叉树中找到两个节点的最近公共祖先
【进阶】如果查询两个节点的最近公共祖先的操作十分频繁，想法让单条查询的查询时间减少
*/
function findParent(head, o1, o2) {
    if (head == null || head.data === o1 || head.data === o2)
        return head;
    var left = findParent(head.left, o1, o2);
    var right = findParent(head.right, o1, o2);
    if (left && right)
        return head;
    if (left)
        return left;
    if (right)
        return right;
    return null;
}
var head = Tree_2.buildTree(10);
head.log();
console.log(findParent(head, 6, 7).data);
//【进阶】
var Record = /** @class */ (function () {
    function Record(head) {
        if (head == null)
            return;
        this.parentMap = new Map();
        this.parentMap.set(head, null);
        this.init(head);
    }
    Record.prototype.init = function (head) {
        if (!head)
            return;
        this.parentMap.set(head.left, head);
        this.parentMap.set(head.right, head);
        this.init(head.left);
        this.init(head.right);
    };
    Record.prototype.query = function (o1, o2) {
        var set = new Set([o1]);
        while (o1 != null) {
            var p = this.parentMap.get(o1);
            set.add(p);
            o1 = p;
        }
        while (!set.has(o2)) {
            o2 = this.parentMap.get(o2);
        }
        return o2;
    };
    return Record;
}());
var Record2 = /** @class */ (function () {
    function Record2(head) {
        this.map = new Map();
        this.init(head);
    }
    Record2.prototype.init = function (n) {
        if (!n)
            return;
        this.headRecord(n, n);
        this.subLeftRecord(n.left, n.right, n);
        this.subRightRecord(n.left, n.right, n);
        this.init(n.left);
        this.init(n.right);
    };
    Record2.prototype.headRecord = function (n, h) {
        if (n == null)
            return;
        if (this.map.get(n)) {
            this.map.get(n).set(h, h);
        }
        else {
            this.map.set(n, new Map([[h, h]]));
        }
        this.headRecord(n.left, h);
        this.headRecord(n.right, h);
    };
    Record2.prototype.subLeftRecord = function (l, r, h) {
        if (r == null || l == null)
            return;
        this.map.get(l).set(r, h);
        this.subLeftRecord(l, r.left, h);
        this.subLeftRecord(l, r.right, h);
        this.subLeftRecord(l.left, r.left, h);
        this.subLeftRecord(l.right, r.right, h);
    };
    Record2.prototype.subRightRecord = function (l, r, h) {
        if (r == null || l == null)
            return;
        this.map.get(r).set(l, h);
        this.subRightRecord(r, l.left, h);
        this.subRightRecord(r, l.right, h);
        this.subRightRecord(r.left, l.left, h);
        this.subRightRecord(r.right, l.right, h);
    };
    Record2.prototype.query = function (n1, n2) {
        return this.map.get(n1).get(n2) || this.map.get(n2).get(n1);
    };
    return Record2;
}());
var head2 = new Tree_1.TreeNode(1);
var node1 = new Tree_1.TreeNode(2);
var node2 = new Tree_1.TreeNode(3);
var node3 = new Tree_1.TreeNode(4);
var node4 = new Tree_1.TreeNode(5);
head2.left = node1;
head2.right = node2;
node1.left = node3;
node1.right = node4;
head2.log();
var r = new Record2(head2);
console.log(r.query(node2, node3).data);
