/* 
两个队列实现栈
*/
const Queue = require('../utils/Queue')
class Stack {
  constructor() {
    this.queue = new Queue()
    this.help = new Queue()
  }
  swap() {
    const tmp = this.queue
    this.queue = this.help
    this.help = tmp
  }
  push(item) {
    this.queue.add(item)
  }
  pop() {
    if (this.queue.size() < 2) return this.queue.poll()
    while (this.queue.size() !== 1) {
      this.help.add(this.queue.poll())
    }
    this.swap()
    return this.help.poll()
  }
}

