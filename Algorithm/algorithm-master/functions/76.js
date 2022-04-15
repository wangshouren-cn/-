import { buildTree } from "../utils/Tree";
/*
判断一棵树是不是平衡二叉树
*/
class ReturnType {
    constructor(isBalance, height) {
        this.isBalance = isBalance;
        this.height = height;
    }
}
function isBalance(head) {
    return progress(head).isBalance;
}
function progress(head) {
    if (head == null)
        return new ReturnType(true, 0);
    const left = progress(head.left);
    const right = progress(head.right);
    const height = Math.max(left.height, right.height) + 1;
    const isBalance = left.isBalance && right.isBalance && Math.abs(left.height - right.height) < 2;
    return new ReturnType(isBalance, height);
}
const node = buildTree([1, 3, 2, 5, 4]);
console.log(isBalance(node));
