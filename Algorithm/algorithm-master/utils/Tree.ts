import Queue from "./Queue";
export interface TreeNodeInterface {
  data: any;
  left: TreeNode;
  right: TreeNode;
  parent?: TreeNode;
}
export class TreeNode implements TreeNodeInterface {
  data: any;
  left: TreeNode;
  right: TreeNode;
  parent?: TreeNode;
  constructor(data: any, parent?: TreeNode) {
    this.data = data;
    this.left = this.right = null;
    if (typeof parent !== "undefined") this.parent = parent;
  }
  log() {
    printTree(this);
  }
}
export function printTree(head: TreeNode) {
  printNode(head, 0, "H", 17);
}
function printNode(node: TreeNode, height: number, to: string, len: number) {
  if (node == null) return;
  printNode(node.right, height + 1, "v", len);
  let val = to + node.data + to;
  const leftL = Math.trunc(len - String(val).length);
  const rightL = len - String(val).length - leftL;
  val = " ".repeat(height * len + leftL) + val + "-".repeat(rightL);
  console.log(val);
  printNode(node.left, height + 1, "^", len);
}
/**
 * @description: 创建树节点
 * @param {type}
 * @return: TreeNode
 */
export function buildTree(
  size: number | any[],
  includeParent?: boolean,
  value?: number
): TreeNode {
  if (Array.isArray(size)) {
    if (size.length == 0) return null;
    const numberArr = size;
    let head = new TreeNode(numberArr.shift()),
      left = true,
      father: TreeNode = head,
      fatherArr = [];
    while (numberArr.length > 0) {
      const newNode = new TreeNode(
        numberArr.shift(),
        includeParent ? father : null
      );
      fatherArr.push(newNode);
      if (left) {
        father.left = newNode;
      } else {
        father.right = newNode;
        father = fatherArr.shift();
      }
      left = !left;
    }

    return head;
  }
  if (size < 1) return null;
  const queue = new Queue<TreeNode>();
  const head = new TreeNode(1);
  queue.add(head);
  let currentSize = 1,
    left = true,
    father;
  while (++currentSize <= size) {
    let newNode = new TreeNode(
      value ? Math.floor(Math.random() * value) : currentSize,
      includeParent ? father : null
    );
    if (left) {
      father = queue.poll();
      father.left = newNode;
    } else {
      father.right = newNode;
    }
    queue.add(newNode);
    left = !left;
  }
  return head;
}
export function isSameTree(node1: TreeNode, node2: TreeNode) {
  return serialize(node1) === serialize(node2);
}
function serialize(head: TreeNode) {
  if (head == null) return "#_";
  let res = `${head.data}_`;
  res += serialize(head.left);
  res += serialize(head.right);
  return res;
}
function deSerialization(string: string) {
  const queue = new Queue();
  const res = string.split("_");
  for (let i = 0; i < res.length - 1; i++) {
    queue.add(res[i]);
  }
  if (queue.isEmpty()) return null;
  return progress(queue);
}
function progress(queue: Queue): TreeNode {
  if (queue.isEmpty()) return;
  const val = queue.poll();
  if (val === "#") return null;
  const node = new TreeNode(val);
  node.left = progress(queue);
  node.right = progress(queue);
  return node;
}
