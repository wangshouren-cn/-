import { buildTree } from '../utils/Tree';
/*
遍历二叉树的神级方法
【题目】给定一个二叉树头节点head，完成二叉树的先序/中序/后序遍历。如果二叉树节点为N，要求时间复杂度为O（n），额外空间复杂度为O（1）
 */
function morris(head) {
    if (head == null)
        return;
    let cur = head, mostRight = null;
    while (cur != null) {
        mostRight = cur.left;
        if (mostRight != null) {
            //有左子树
            //找到最右节点
            while (mostRight.right != null && mostRight.right != cur) {
                mostRight = mostRight.right;
            }
            if (mostRight.right == null) {
                //最右节点是null
                mostRight.right = cur;
                cur = cur.left;
            }
            else {
                //最右节点是cur
                mostRight.right = null;
                cur = cur.right;
            }
        }
        else {
            //无左子树
            cur = cur.right;
        }
    }
}
function preMorris(head) {
    if (head == null)
        return;
    let cur = head, mostRight = null;
    while (cur != null) {
        mostRight = cur.left;
        if (mostRight != null) {
            while (mostRight.right != null && mostRight.right != cur) {
                mostRight = mostRight.right;
            }
            if (mostRight.right == null) {
                console.log(cur.data);
                mostRight.right = cur;
                cur = cur.left;
            }
            else {
                mostRight.right = null;
                cur = cur.right;
            }
        }
        else {
            console.log(cur.data);
            cur = cur.right;
        }
    }
}
function inOrderMorris(head) {
    if (head == null)
        return;
    let cur = head, mostRight = null;
    while (cur != null) {
        mostRight = cur.left;
        if (mostRight != null) {
            //有左子树
            //找到最右节点
            while (mostRight.right != null && mostRight.right != cur) {
                mostRight = mostRight.right;
            }
            if (mostRight.right == null) {
                //最右节点是null
                mostRight.right = cur;
                cur = cur.left;
            }
            else {
                console.log(cur.data);
                mostRight.right = null;
                cur = cur.right;
            }
        }
        else {
            //无左子树
            console.log(cur.data);
            cur = cur.right;
        }
    }
}
function postMorris(head) {
    if (head == null)
        return;
    let cur = head, mostRight = null;
    while (cur != null) {
        mostRight = cur.left;
        if (mostRight != null) {
            while (mostRight.right != null && mostRight.right != cur) {
                mostRight = mostRight.right;
            }
            if (mostRight.right == null) {
                mostRight.right = cur;
                cur = cur.left;
            }
            else {
                mostRight.right = null;
                printRight(cur.left);
                cur = cur.right;
            }
        }
        else {
            cur = cur.right;
        }
    }
    printRight(head);
}
function printRight(head) {
    if (head == null)
        return;
    let tail = reverse(head);
    console.log(tail.data);
    while (tail.right != null) {
        tail = tail.right;
        console.log(tail.data);
    }
    reverse(tail);
}
function reverse(head) {
    let pre = null;
    while (head != null) {
        let tmp = head.right;
        head.right = pre;
        pre = head;
        head = tmp;
    }
    return pre;
}
const node = buildTree(5);
preMorris(node);
console.log("*".repeat(20));
inOrderMorris(node);
console.log("*".repeat(20));
postMorris(node);
