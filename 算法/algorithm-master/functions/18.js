/* 
单调栈结构
【题目】给定一个不含重复值的数组arr，找到每一个i位置左边和右边离i位置比arr[i]小的位置。返回所有位置相应的信息。
【难度】
★★☆☆
【举例】
arr = [3,4,1,5,6,2,7]
返回：
[
  [-1,2],
  [0,2],
  [-1,-1],
  [2,5],
  [3,5],
  [2,-1],
  [5,-1],
]
*/
const Stack = require('../utils/Stack')
function getNearLessNoRepeat(arr) {
  const stack = new Stack(),
    res = []
  for (let i = 0, x; (x = arr[i]); i++) {
    while (!stack.isEmpty() && arr[stack.peek()] > x) {
      const pos = stack.pop()
      const left = stack.peek() === undefined ? -1 : stack.peek()
      res[pos] = [left, i]
    }
    stack.push(i)
  }
  while (!stack.isEmpty()) {
    const pos = stack.pop()
    const left = stack.peek() === undefined ? -1 : stack.peek()
    res[pos] = [left, -1]
  }
  return res
}

/* 
进阶：数组含有重复的元素
【举例】
arr = [3, 1, 34, 3, 5, 3, 2, 2]
返回：
[
  [-1,1],
  [-1,-1],
  [1,7],
  [2,4],
  [1,7],
  [4,6],
  [1,7],
  [1,-1],
  [1,-1]
]
*/
function getNearLess(arr) {
  const stack = new Stack(),
    res = []
  for (let i = 0, x; (x = arr[i]); i++) {
    let value, //当前要比较的值
      pos, //当前要操作的res位置索引
      pushed //i是否被push过
    if (Array.isArray(stack.peek())) {
      pos = stack.peek()[stack.peek().length - 1]
      value = arr[pos]
    } else {
      pos = stack.peek()
      value = arr[pos]
    }
    while (!stack.isEmpty() && value >= x) {
      if (value === x) {
        //等于
        Array.isArray(stack.peek())
          ? stack.peek().push(i)
          : stack.push([stack.pop(), i])
        pushed = true
        break
      } else {
        //大于
        const poss = stack.pop()
        const left = Array.isArray(stack.peek())
          ? stack.peek()[stack.peek().length - 1]
          : stack.peek() >= 0
          ? stack.peek()
          : -1
        if (Array.isArray(poss)) {
          for (let j = 0; j < poss.length; j++) {
            res[poss[j]] = [left, i]
          }
        } else {
          res[poss] = [left, i]
        }
      }

      if (Array.isArray(stack.peek())) {
        pos = stack.peek()[stack.peek().length - 1]
        value = arr[pos]
      } else {
        pos = stack.peek()
        value = arr[pos]
      }
    }
    !pushed && stack.push(i)
  }
  while (!stack.isEmpty()) {
    const poss = stack.pop()
    const left = Array.isArray(stack.peek())
      ? stack.peek()[stack.peek.length() - 1]
      : stack.peek() >= 0
      ? stack.peek()
      : -1
    if (Array.isArray(poss)) {
      for (let j = 0; j < poss.length; j++) {
        res[poss[j]] = [left, -1]
      }
    } else {
      res[poss] = [left, -1]
    }
  }
  return res
}

console.log(getNearLess([3]))
