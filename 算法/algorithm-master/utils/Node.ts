export default class Node {
  data: any
  next: Node
  last: Node
  constructor(data: any) {
    this.data = data
    this.next = null
    this.last = null
  }
  log() {
    let res = `${this.data}`
    let cur: Node = this
    while (cur.next) {
      cur = cur.next
      res += `${cur.last ? '<->' : '->'}${cur.data}`
    }
    console.log(res)
  }
}
export function buildLinkList(
  size: number,
  isDouble?: boolean,
  RandNumber?: number
): Node  {
  if (size < 1) return null
  const res = new Node(
    RandNumber ? Math.floor(Math.random() * RandNumber) + 1 : 1
  )
  let cur = res,
    x = 2
  while (x <= size) {
    cur.next = new Node(RandNumber ? Math.floor(Math.random() * RandNumber) : x)
    isDouble ? (cur.next.last = cur) : null
    cur = cur.next
    x++
  }
  return res
}
