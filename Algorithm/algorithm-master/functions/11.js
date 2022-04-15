/* 
【题目】
实现一个特殊的栈，在实现栈的基本功能的基础上，再实现返回栈中最小元素的操 作。
【要求】
1. pop、push、getMin操作的时间复杂度都是O（1）。
2. 设计的栈类型可以使用现成的栈结构。
【难度】
士　★☆☆☆
*/
//方案一 压入节省时间 弹出稍费时间
class Stack1 {
  constructor() {
    //用来存储数据
    this.stackData = []
    //用来存储小值
    this.stackMin = []
  }
  isEmpty() {
    return this.stackData.length < 1
  }
  pop() {
    const res = this.stackData.pop()
    return res === this.stackMin[this.stackMin.length - 1]
      ? this.stackMin.pop()
      : res
  }
  push(num) {
    this.stackData.push(num)
    num <= this.stackMin[this.stackMin.length - 1] ||
    this.stackData.length === 1
      ? this.stackMin.push(num)
      : null
    return this
  }
  peek() {
    return this.stackData[0]
  }
  getMin() {
    return this.stackMin[this.stackMin.length - 1]
  }
}
//方案二 压入稍费时间 弹出节省时间
class Stack2 {
  constructor() {
    //用来存储数据
    this.stackData = []
    //用来存储小值
    this.stackMin = []
  }
  pop() {
    this.stackMin.pop()
    return this.stackData.pop()
  }
  push(num) {
    this.stackData.push(num)
    num <= this.stackMin[this.stackMin.length - 1] ||
    this.stackData.length === 1
      ? this.stackMin.push(num)
      : this.stackMin.push(this.stackMin[this.stackMin.length - 1])
    return this
  }
  getMin() {
    return this.stackMin[this.stackMin.length - 1]
  }
}
module.exports = {
  Stack1,
  Stack2,
}
