/* 
用数组结构实现大小固定的队列和栈
*/
class Stack {
  constructor(size) {
    this.size = size
    this.end = 0
    this.arr = []
  }
  push(item) {
    if (this.end >= this.size) {
      throw new Error('栈溢出！')
    }
    this.arr[this.end++] = item
  }
  pop() {
    if (this.end === 0) throw new Error('空栈！')
    return this.arr[this.end-- - 1]
  }
}
class Queue {
  constructor(size) {
    this.maxSize = size
    this.size = this.start = this.end = 0
    this.arr = []
  }
  add(item) {
    if (this.size === this.maxSize) throw new Error('队列溢出！')
    this.arr[this.end++] = item
    this.end = this.end === this.maxSize ? 0 : this.end
    this.size++
  }
  poll() {
    if (this.size === 0) throw new Error('队列已空！')
    let tmp = this.arr[this.start++]
    this.start = this.start === this.maxSize ? 0 : this.start
    this.size--
    return tmp
  }
}





