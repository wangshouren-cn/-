/*
二叉树的序列化和反序列化
*/
import { TreeNode, buildTree } from '../utils/Tree';
import Queue from './../utils/Queue';
function serialize(head) {
    if (head == null)
        return '#_';
    let res = `${head.data}_`;
    res += serialize(head.left);
    res += serialize(head.right);
    return res;
}
function deSerialization(string) {
    const queue = new Queue();
    const res = string.split('_');
    for (let i = 0; i < res.length - 1; i++) {
        queue.add(res[i]);
    }
    if (queue.isEmpty())
        return null;
    return progress(queue);
}
function progress(queue) {
    if (queue.isEmpty())
        return;
    const val = queue.poll();
    if (val === '#')
        return null;
    const node = new TreeNode(val);
    node.left = progress(queue);
    node.right = progress(queue);
    return node;
}
const node = buildTree(5);
const res = serialize(node);
console.log(serialize(deSerialization(res)));
