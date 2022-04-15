import { TreeNode } from "./../utils/Tree";
import { buildTree } from "../utils/Tree";
/*
在二叉树中找到两个节点的最近公共祖先
进阶:如果查询两个节点的最近公共祖先的操作十分频繁，想法让单条查询的查询 时间减少。
再进阶:给定二叉树的头节点head，同时给定所有想要进行的查询。二叉树的节点 数量为N，查询条数为M，请在时间复杂度为O(N+M)内返回所有查询的结果。
【难度】 原问题:士 ★☆☆☆ 进阶问题:尉 ★★☆☆ 再进阶问题:校 ★★★☆
*/
function findParent(head, o1, o2) {
    if (head == null || head.data === o1 || head.data === o2)
        return head;
    const left = findParent(head.left, o1, o2);
    const right = findParent(head.right, o1, o2);
    if (left && right)
        return head;
    if (left)
        return left;
    if (right)
        return right;
    return null;
}
const head = buildTree(10);
head.log();
console.log(findParent(head, 6, 7).data);
//【进阶】
class Record {
    constructor(head) {
        if (head == null)
            return;
        this.parentMap = new Map();
        this.parentMap.set(head, null);
        this.init(head);
    }
    init(head) {
        if (!head)
            return;
        this.parentMap.set(head.left, head);
        this.parentMap.set(head.right, head);
        this.init(head.left);
        this.init(head.right);
    }
    query(o1, o2) {
        const set = new Set([o1]);
        while (o1 != null) {
            const p = this.parentMap.get(o1);
            set.add(p);
            o1 = p;
        }
        while (!set.has(o2)) {
            o2 = this.parentMap.get(o2);
        }
        return o2;
    }
}
class Record2 {
    constructor(head) {
        this.map = new Map();
        this.init(head);
    }
    init(n) {
        if (!n)
            return;
        this.headRecord(n, n);
        this.subLeftRecord(n.left, n.right, n);
        this.subRightRecord(n.left, n.right, n);
        this.init(n.left);
        this.init(n.right);
    }
    headRecord(n, h) {
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
    }
    subLeftRecord(l, r, h) {
        if (r == null || l == null)
            return;
        this.map.get(l).set(r, h);
        this.subLeftRecord(l, r.left, h);
        this.subLeftRecord(l, r.right, h);
        this.subLeftRecord(l.left, r.left, h);
        this.subLeftRecord(l.right, r.right, h);
    }
    subRightRecord(l, r, h) {
        if (r == null || l == null)
            return;
        this.map.get(r).set(l, h);
        this.subRightRecord(r, l.left, h);
        this.subRightRecord(r, l.right, h);
        this.subRightRecord(r.left, l.left, h);
        this.subRightRecord(r.right, l.right, h);
    }
    query(n1, n2) {
        return this.map.get(n1).get(n2) || this.map.get(n2).get(n1);
    }
}
const head2 = new TreeNode(1);
const node1 = new TreeNode(2);
const node2 = new TreeNode(3);
const node3 = new TreeNode(4);
const node4 = new TreeNode(5);
head2.left = node1;
head2.right = node2;
node1.left = node3;
node1.right = node4;
head2.log();
const r = new Record2(head2);
console.log(r.query(node2, node3).data);
