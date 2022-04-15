import { buildTree } from "../utils/Tree";
/*
二叉树的最小深度
【题目】
给定一棵二叉树的头节点head，求这棵二叉树的最小深度。
【进阶】
请将解法优化到时间复杂度O（n），空间复杂度O（1）
【难度】
原问题 士 ★☆☆☆
进阶问题 将 ★★★★
*/
function minDepth1(head) {
    return progress(head, 1);
}
function progress(head, level) {
    if (head.left == null && head.right == null)
        return level;
    let minHeight = -Infinity;
    if (head.left) {
        minHeight = Math.max(minHeight, progress(head.left, level + 1));
    }
    if (head.right) {
        minHeight = Math.max(minHeight, progress(head.right, level + 1));
    }
    return minHeight;
}
//【进阶】
function minDepth2(head) {
    if (head == null)
        return 0;
    let mostRight, curLevel = 0, cur = head, minHeight = -Infinity;
    while (cur != null) {
        mostRight = cur.left;
        if (mostRight != null) {
            //有左子树
            let rightSize = 1;
            while (mostRight.right != null && mostRight.right != cur) {
                mostRight = mostRight.right;
                rightSize++;
            }
            if (mostRight.right == null) {
                mostRight.right = cur;
                cur = cur.left;
                curLevel += 1;
            }
            else {
                mostRight.right = null;
                if (mostRight.left == null) {
                    //记录
                    minHeight = Math.max(minHeight, curLevel);
                }
                curLevel -= rightSize;
                cur = cur.right;
            }
        }
        else {
            cur = cur.right;
            curLevel += 1;
        }
    }
    let mostRightLevel = 1;
    while (head.right) {
        head = head.right;
        mostRightLevel += 1;
    }
    return Math.max(minHeight, mostRightLevel);
}
export default minDepth2;
console.log(minDepth2(buildTree(8)));
