import { buildTree } from "../utils/Tree";
import Queue from "../utils/Queue";
/*
二叉树的按层打印与ZigZag打印
【题目】
给定一棵二叉树的头节点head,分别实现按层打印和ZigZag打印二叉树的函数。

按层打印时,输出格式必须如下:
Level 1 : 1
Level 2 : 2 3
Level 3 : 4 5 6
Level 4 : 7 8

ZigZag打印时,输出格式必须如下:
Level 1 from left to right: 1
Level 2 from right to left: 3 2
Level 3 from left to right: 4 5 6
Level 4 from right to left: 8 7

【难度】尉 ★★☆☆
*/
function printByLevel(head) {
    if (!head)
        return;
    let q = new Queue(), last = head, nextLast = null, level = 1;
    q.add(head);
    let str = "Level 1 :";
    while (!q.isEmpty()) {
        const node = q.poll();
        str += " " + node.data;
        if (node.left) {
            q.add(node.left);
            nextLast = node.left;
        }
        if (node.right) {
            q.add(node.right);
            nextLast = node.right;
        }
        if (node === last) {
            last = nextLast;
            console.log(str);
            str = `Level ${++level} :`;
        }
    }
}
function printByZigZag(head) {
    if (!head)
        return;
    let q = new Queue(), last = head, nextLast = null, lr = true, str = `Level 1 from left to right:`, level = 1;
    q.add(head);
    while (!q.isEmpty()) {
        let n;
        if (lr) {
            n = q.pollLast();
            str += " " + n.data;
            if (n.left) {
                q.addFirst(n.left);
                nextLast = nextLast == null ? n.left : nextLast;
            }
            if (n.right) {
                q.addFirst(n.right);
                nextLast = nextLast == null ? n.right : nextLast;
            }
        }
        else {
            n = q.poll();
            str += " " + n.data;
            if (n.right) {
                q.add(n.right);
                nextLast = nextLast == null ? n.right : nextLast;
            }
            if (n.left) {
                q.add(n.left);
                nextLast = nextLast == null ? n.left : nextLast;
            }
        }
        if (n === last) {
            lr = !lr;
            console.log(str);
            str = `Level ${++level} from ${lr ? "left to right" : "right to left"}:`;
            last = nextLast;
            nextLast = null;
        }
    }
}
const node = buildTree(10, false, 100);
node.log();
printByLevel(node);
console.log("*".repeat(20));
printByZigZag(node);
