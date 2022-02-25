const pushRandomToStacks = require('../utils/pushRandomToStacks')
const Stack = require('../utils/Stack')
const Equal = require('../utils/Equal')
module.exports = (size, value, count, reverse, myReverse) => {
  console.time('test')

  for (let i = 0; i < count; i++) {
    const stack1 = new Stack()
    const stack2 = new Stack()
    pushRandomToStacks(size, value, stack1, stack2)
    reverse(stack1)
    myReverse(stack2)
    if (!Equal.isArrayEqual(stack1.stack, stack2.stack)) {
      return console.log('failed', stack1.stack, stack2.stack)
    }
  }
  console.log('Nice!')
  console.timeEnd('test')
}
