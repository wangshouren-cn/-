const Equal = require('../utils/Equal')
class Stack {
  constructor() {
    this.stack = []
  }
  pop() {
    return this.stack.pop()
  }
  push(x) {
    this.stack.push(x)
    return this
  }
  getMin() {
    return Math.min(...this.stack)
  }
}
function failed(val1, val2, fnName, stack1, stack2) {
  console.log('failed!')
  console.log(fnName)
  console.log('right:', val1)
  console.log('error:', val2)
  console.log('stack1', JSON.stringify(stack1))
  console.log('stack2', JSON.stringify(stack2))
}
function test(size, value, count, MyStack) {
  console.time('test')
  for (let i = 0; i < count; i++) {
    const stack1 = new Stack()
    const stack2 = new MyStack()
    for (let j = 0; j < size; j++) {
      const x = Math.floor(Math.random() * value + 1)
      stack1.push(x)
      stack2.push(x)
    }
    for (let j = 0; j < size; j++) {
      const choice = Math.floor(Math.random() * 2 + 1)
      switch (choice) {
        case 1: {
          const val1 = stack1.pop()
          const val2 = stack2.pop()
          if (val1 !== val2) {
            return failed(val1, val2, 'pop')
          }
          break
        }

        case 2: {
          const val1 = stack1.getMin()
          const val2 = stack2.getMin()
          if (val1 !== val2) {
            return failed(val1, val2, 'getMin', stack1, stack2)
          }
          break
        }
      }
    }
  }
  console.log('Nice!')
  console.timeEnd('test')
}
module.exports = test
