/* 
由两个栈组成的队列
【题目】
编写一个类，用两个栈实现队列，支持队列的基本操作（add、poll、peek）。
【难度】
尉　★★☆☆
*/
const Stack = require('../utils/Stack')

class TwoStacksQueue {
  constructor() {
    this.pushStack = new Stack()
    this.popStack = new Stack()
  }
  pushToPop() {
    if (this.popStack.isEmpty()) {
      while (!this.pushStack.isEmpty()) {
        this.popStack.push(this.pushStack.pop())
      }
    }
  }
  add(item) {
    this.pushStack.push(item)
    this.pushToPop()
    return this
  }
  poll() {
    this.pushToPop()
    return this.popStack.pop()
  }
  peek() {
    this.pushToPop()
    return this.popStack.peek()
  }
}
module.exports = TwoStacksQueue
