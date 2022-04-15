const Node = require('./Node')
module.exports = function (size, isDouble, RandNumber) {
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
