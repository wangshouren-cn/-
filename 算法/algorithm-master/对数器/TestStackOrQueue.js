module.exports = class TestStackOrQueue {
  constructor(size, value, count, Right, My, functionNames, addFunctionName) {
    this.size = size
    this.value = value
    this.count = count
    this.Right = Right
    this.My = My
    this.functionNames = functionNames
    this.addFunctionName = addFunctionName
  }
  error(right, my, val1, val2, fnName) {
    console.log('failed')
    console.log('right', right)
    console.log('my', my)
    console.log('val1', val1)
    console.log('val2', val2)
    console.log('fnName', fnName)
  }
  start() {
    const {
      size,
      value,
      count,
      Right,
      My,
      functionNames,
      addFunctionName,
    } = this
    console.time('test')
    for (let i = 0; i < count; i++) {
      const right = new Right()
      const my = new My()

      for (let j = 0; j < size; j++) {
        const choice = Math.floor(Math.random() * functionNames.length )
        const fnName = functionNames[choice]
        if (fnName === addFunctionName) {
          //添加操作
          const random = Math.floor(Math.random() * value + 1)
          right[fnName](random)
          my[fnName](random)
        } else {
          const val1 = right[fnName]()
          const val2 = my[fnName]()
          if (val1 !== val2) {
            return this.error(right, my, val1, val2, fnName)
          }
        }
      }
    }
    console.log('Nice!')
    console.timeEnd('test')
  }
}
