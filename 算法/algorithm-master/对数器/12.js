const Equal = require('../utils/Equal')
class Queue {
  constructor() {
    this.stack = []
  }
  //返回队列头元素并删除
  poll() {
    return this.stack.shift()
  }
  //入队列
  add(x) {
    this.stack.push(x)
    return this
  }
  //返回队列头元素
  peek() {
    return this.stack[0]
  }
}
function failed(val1, val2, fnName, queue1, queue2) {
  console.log('failed!')
  console.log(fnName)
  console.log('right:', val1)
  console.log('error:', val2)
  console.log('queue1', JSON.stringify(queue1))
  console.log('queue2', JSON.stringify(queue2))
}
function test(size, value, count, MyQueue) {
  console.time('test')
  for (let i = 0; i < count; i++) {
    const queue1 = new Queue()
    const queue2 = new MyQueue()
    
    for (let j = 0; j < size; j++) {
      const choice = Math.floor(Math.random() * 3 + 1)
      switch (choice) {
        case 1: {
          const val1 = queue1.poll()
          const val2 = queue2.poll()
          if (val1 !== val2) {
            return failed(val1, val2, 'poll', queue1, queue2)
          }
          break
        }

        case 2: {
          const val1 = queue1.peek()
          const val2 = queue1.peek()
          if (val1 !== val2) {
            return failed(val1, val2, 'peek', queue1, queue2)
          }
          break
        }
        case 3: {
          const x = Math.floor(Math.random() * value + 1)
          queue1.add(x)
          queue2.add(x)
          break
        }
      }
    }
  }
  console.log('Nice!')
  console.timeEnd('test')
}
module.exports = test
