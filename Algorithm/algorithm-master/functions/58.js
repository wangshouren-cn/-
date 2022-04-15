/*
如何直观打印一棵二叉树
*/
function printTree(head) {
    printNode(head, 0, "H", 17);
}
function printNode(node, height, to, len) {
    if (node == null)
        return;
    printNode(node.right, height + 1, "v", len);
    let val = to + node.data + to;
    const leftL = Math.trunc(len - String(val).length);
    const rightL = len - String(val).length - leftL;
    val = "-".repeat(height * len + leftL) + val + "-".repeat(rightL);
    console.log(val);
    printNode(node.left, height + 1, "^", len);
}
export {};
// printTree(buildTree(10));
