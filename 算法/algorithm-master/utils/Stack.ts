export default class Stack<T = any> {
  stack: T[]
  constructor() {
    this.stack = []
  }
  pop() {
    return this.stack.pop()
  }
  push(x:any) {
    this.stack.push(x)
    return this
  }
  isEmpty() {
    return this.stack.length < 1
  }
  peek() {
    return this.stack[this.stack.length - 1]
  }
  size() {
    return this.stack.length
  }
}
