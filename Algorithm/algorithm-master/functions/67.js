import { TreeNode, isSameTree } from "../utils/Tree";
import Stack from "../utils/Stack";
/*
调整搜索二叉树中两个错误的节点
【题目】
一棵二叉树原本是搜索二叉树,但是其中有两个节点调换了位置,使得这棵二叉树
不再是搜索二叉树,请找到这两个错误节点并返回。已知二叉树中所有节点的值都
不一样,给定二叉树的头节点head,返回一个长度为2的二叉树节点类型的数组
errs,errs[0]表示一个错误节点,errs[1]表示另一个错误节点。

进阶:如果在原问题中得到了这两个错误节点,我们当然可以通过交换两个节点的
节点值的方式让整棵二叉树重新成为搜索二叉树。但现在要求你不能这么做,而是
在结构上完全交换两个节点的位置,请实现调整的函数。

【难度】
原问题:尉
★★☆☆
进阶问题:将
★★★★

问题一:e1和e2是否有一个是头节点?如果有,谁是头?
问题二:e1和e2是否相邻?如果相邻,谁是谁的父节点?
问题三:e1和e2分别是各自父节点的左孩子还是右孩子?

特别注意:因为是在中序遍历时先找到e1,后找到e2,所以e1一定不是e2的右孩
子,e2也一定不是e1的左孩子。

以上三个问题与特别注意之间相互影响,情况非常复杂。经过仔细整理,情况共有
14种,每一种情况在调整e1和e2各自的拓扑关系时都有特殊处理。

1. e1是头,e1是e2的父,此时e2只可能是e1的右孩子。
2. e1是头,e1不是e2的父,e2是e2P的左孩子。
3. e1是头,e1不是e2的父,e2是e2P的右孩子。
4. e2是头,e2是e1的父,此时e1只可能是e2的左孩子。
5. e2是头,e2不是e1的父,e1是e1P的左孩子。
6. e2是头,e2不是e1的父,e1是e1P的右孩子。
7. e1和e2都不是头,e1是e2的父,此时e2只可能是e1的右孩子,e1是e1P的左孩子。
8. e1和e2都不是头,e1是e2的父,此时e2只可能是e1的右孩子,e1是e1P的右孩子。
9. e1和e2都不是头,e2是e1的父,此时e1只可能是e2的左孩子,e2是e2P的左孩子。
10. e1和e2都不是头,e2是e1的父,此时e1只可能是e2的左孩子,e2是e2P的右孩子。
11. e1和e2都不是头,谁也不是谁的父节点,e1是e1P的左孩子,e2是e2P的左孩子。
12. e1和e2都不是头,谁也不是谁的父节点,e1是e1P的左孩子,e2是e2P的右孩子。
13. e1和e2都不是头,谁也不是谁的父节点,e1是e1P的右孩子,e2是e2P的左孩子。
14. e1和e2都不是头,谁也不是谁的父节点,e1是e1P的右孩子,e2是e2P的右孩子。
*/
function getTwoErrorsNode(head) {
    if (!head)
        return [];
    const stack = new Stack();
    const errors = [];
    let pre = null;
    while (!stack.isEmpty() || head != null) {
        if (head != null) {
            stack.push(head);
            head = head.left;
        }
        else {
            head = stack.pop();
            if (pre && pre.data > head.data) {
                !errors[0] && (errors[0] = pre);
                errors[1] = head;
            }
            pre = head;
            head = head.right;
        }
    }
    return errors;
}
function getTwoParents(head, e1, e2) {
    const stack = new Stack();
    const parents = [];
    while (!stack.isEmpty() || head != null) {
        if (head != null) {
            stack.push(head);
            head = head.left;
        }
        else {
            head = stack.pop();
            if (head.left == e1 || head.right == e1) {
                parents[0] = head;
            }
            if (head.left == e2 || head.right == e2) {
                parents[1] = head;
            }
            head = head.right;
        }
    }
    return parents;
}
const LEFT = "left";
const RIGHT = "right";
function recoverTree(head) {
    const [e1, e2] = getTwoErrorsNode(head);
    let [e1P, e2P] = getTwoParents(head, e1, e2);
    const e1L = e1.left, e1R = e1.right, e2L = e2.left, e2R = e2.right;
    //以下是定义节点调整后的信息
    let e1LN = e2L, e1RN = e2R, e2LN = e1L, e2RN = e1R, e1PN = e2P, e2PN = e1P, d1 = (e2P === null || e2P === void 0 ? void 0 : e2P.left) == e2 ? LEFT : RIGHT, d2 = (e1P === null || e1P === void 0 ? void 0 : e1P.left) == e1 ? LEFT : RIGHT, returnNode = head;
    if (e1 === head) {
        returnNode = e2;
        //e1是头节点
        if (e2 === e1R) {
            //e2是e1右节点
            e1PN = e2;
            d1 = RIGHT;
            e2RN = e1;
        }
    }
    else if (e2 === head) {
        returnNode = e1;
        //e2是头节点
        if (e1 === e2L) {
            //e1是e2左节点
            e2PN = e1;
            d2 = LEFT;
            e1LN = e2;
        }
    }
    else {
        if (e1 === e2P) {
            //e1是e2父节点 e2是e1右节点
            e1P = e2;
            d1 = RIGHT;
            e2RN = e1;
        }
        else if (e2 === e1P) {
            //e2是e1父节点 e1是e2左节点
            e2P = e1;
            d2 = LEFT;
            e1LN = e2;
        }
    }
    console.log("e1,e2 节点新信息：");
    console.log("e1:", e1 === null || e1 === void 0 ? void 0 : e1.data, "；e2:", e2 === null || e2 === void 0 ? void 0 : e2.data, "；e1左:", e1LN === null || e1LN === void 0 ? void 0 : e1LN.data, "；e1右:", e1RN === null || e1RN === void 0 ? void 0 : e1RN.data, "；e2左:", e2LN === null || e2LN === void 0 ? void 0 : e2LN.data, "；e2右:", e2RN === null || e2RN === void 0 ? void 0 : e2RN.data, "；e1父:", e1PN === null || e1PN === void 0 ? void 0 : e1PN.data, "；e2父:", e2PN === null || e2PN === void 0 ? void 0 : e2PN.data, "；e1方向:", d1, "；e2方向:", d2);
    recoverNode(e1, e2, e1LN, e1RN, e2LN, e2RN, e1PN, e2PN, d1, d2);
    return returnNode;
}
function recoverNode(n1, n2, l1, r1, l2, r2, p1, p2, d1, d2) {
    if (p1 && d1) {
        p1[d1] = n1;
    }
    if (p2 && d2) {
        p2[d2] = n2;
    }
    n1.left = l1;
    n1.right = r1;
    n2.left = l2;
    n2.right = r2;
}
function test(text, x1, x2) {
    console.log("*".repeat(100));
    console.log(text);
    const nodes = [];
    nodes[1] = new TreeNode(1);
    nodes[2] = new TreeNode(2);
    nodes[3] = new TreeNode(3);
    nodes[4] = new TreeNode(4);
    nodes[5] = new TreeNode(5);
    nodes[6] = new TreeNode(6);
    nodes[7] = new TreeNode(7);
    nodes[8] = new TreeNode(8);
    nodes[5].left = nodes[3];
    nodes[3].left = nodes[2];
    nodes[3].right = nodes[4];
    nodes[5].right = nodes[7];
    nodes[7].left = nodes[6];
    nodes[7].right = nodes[8];
    const rightNode = JSON.parse(JSON.stringify(nodes[5]));
    nodes[x1].data = x2;
    nodes[x2].data = x1;
    let newNode = recoverTree(nodes[5]);
    console.log("通过：", isSameTree(rightNode, newNode));
}
test("1. e1是头,e1是e2的父,此时e2只可能是e1的右孩子。", 7, 5);
test("2. e1是头,e1不是e2的父,e2是e2P的左孩子。", 6, 5);
test("3. e1是头,e1不是e2的父,e2是e2P的右孩子。", 8, 5);
test("4. e2是头,e2是e1的父,此时e1只可能是e2的左孩子。", 3, 5);
test("5. e2是头,e2不是e1的父,e1是e1P的左孩子。", 2, 5);
test("6. e2是头,e2不是e1的父,e1是e1P的右孩子。", 4, 5);
test("7. e1和e2都不是头,e1是e2的父,此时e2只可能是e1的右孩子,e1是e1P的左孩子。", 4, 3);
test("8. e1和e2都不是头,e1是e2的父,此时e2只可能是e1的右孩子,e1是e1P的右孩子。", 7, 8);
test("9. e1和e2都不是头,e2是e1的父,此时e1只可能是e2的左孩子,e2是e2P的左孩子。", 2, 3);
test("10. e1和e2都不是头,e2是e1的父,此时e1只可能是e2的左孩子,e2是e2P的右孩子。", 6, 7);
test("11. e1和e2都不是头,谁也不是谁的父节点,e1是e1P的左孩子,e2是e2P的左孩子。", 6, 2);
test("12. e1和e2都不是头,谁也不是谁的父节点,e1是e1P的左孩子,e2是e2P的右孩子。", 8, 2);
test("13. e1和e2都不是头,谁也不是谁的父节点,e1是e1P的右孩子,e2是e2P的左孩子。", 6, 4);
test("14. e1和e2都不是头,谁也不是谁的父节点,e1是e1P的右孩子,e2是e2P的右孩子。", 8, 4);
