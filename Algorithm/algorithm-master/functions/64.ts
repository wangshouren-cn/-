/* 
认识并查集结构
*/
import Node from '../utils/Node'
class UnionFindSet {
  parentMap: Map<Node, Node>
  sizeMap: Map<Node, number>
  constructor(nodes: Node[]) {
    this.parentMap = new Map<Node, Node>()
    this.sizeMap = new Map<Node, number>()
    for (let i = 0, node; (node = nodes[i++]); ) {
      this.parentMap.set(node, node)
      this.sizeMap.set(node, 1)
    }
  }
  private findHead(node: Node) {
    let parent = this.parentMap.get(node)
    if (parent != node) {
      parent = this.findHead(parent)
    }
    this.parentMap.set(node, parent)
    return parent
  }
  isSameSet(node1: Node, node2: Node) {
    return this.findHead(node1) === this.findHead(node2)
  }
  union(node1: Node, node2: Node) {
    const node1Parent = this.findHead(node1)
    const node2Parent = this.findHead(node2)
    if (node1Parent !== node2Parent) {
      const union1Size = this.sizeMap.get(node1Parent)
      const union2Size = this.sizeMap.get(node2Parent)
      if (union1Size <= union2Size) {
        this.parentMap.set(node1Parent, node2Parent)
        this.sizeMap.set(node2Parent, union1Size + union2Size)
      } else {
        this.parentMap.set(node2Parent, node1Parent)
        this.sizeMap.set(node1Parent, union1Size + union2Size)
      }
    }
  }
}

const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)
const node4 = new Node(4)
const node5 = new Node(5)
const node6 = new Node(6)
const node7 = new Node(7)

const unionFindSet = new UnionFindSet([
  node1,
  node2,
  node3,
  node4,
  node5,
  node6,
  node7,
])
console.log(unionFindSet.isSameSet(node1, node2))
unionFindSet.union(node1, node2)
console.log(unionFindSet.isSameSet(node1, node2))
