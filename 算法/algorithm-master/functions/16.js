/*
用栈来求解汉诺塔问题
汉诺塔问题比较经典，这里修改一下游戏规则：现在限制不能从最左侧的塔直接移 动到最右侧，也不能从最右侧直接移动到最左侧，而是必须经过中间。求当塔有N层 的时候，打印最优移动过程和最优移动总步数。
【难度】
校　★★★☆
*/
const LEFT = 'LEFT'
const MID = 'MID'
const RIGHT = 'RIGHT'

//方法一：递归的方法

function hanoiProblem(x, from, to) {
  console.log(`It will move ${process(x, from, to)} steps.`)
}
function process(x, from, to) {
  if (x < 1) return
  const rest = [LEFT, MID, RIGHT].find((item) => item !== from && item !== to)
  if (x === 1) {
    if (rest !== MID) {
      //from 和 to 相邻
      console.log(`Move 1 from ${from} to ${to}`)
      return 1
    } else {
      console.log(`Move 1 from ${from} to ${MID}`)
      console.log(`Move 1 from ${MID} to ${to}`)
      return 2
    }
  } else {
    if (rest !== MID) {
      //from 和 to 相邻
      return (
        process(x - 1, from, rest) +
        process(1, from, MID) +
        process(x - 1, rest, MID)
      )
    } else {
      return (
        process(x - 1, from, to) +
        process(1, from, MID) +
        process(x - 1, to, from) +
        process(1, MID, to) +
        process(x - 1, from, to)
      )
    }
  }
}
// hanoiProblem(3, LEFT, MID)

//方法二：非递归的方法-用栈来模拟整个过程
const Stack = require('../utils/Stack')
const LTOM = 'LTOM'
const MTOL = 'MTOL'
const MTOR = 'MTOR'
const RTOM = 'RTOM'
const NONE = 'NONE'
function hanoiProblem2(x, from, to) {
  const LS = new Stack()
  const MS = new Stack()
  const RS = new Stack()
  LS.push(Infinity)
  MS.push(Infinity)
  RS.push(Infinity)
  const fromStack = from === LEFT ? LS : from === MID ? MS : RS
  const targetStack = to === LEFT ? LS : to === MID ? MS : RS
  for (let i = x; i > 0; i--) {
    fromStack.push(i)
  }
  let prevAct = NONE,
    total = 0
  while (targetStack.size() !== x + 1) {
    prevAct =
      process2(prevAct, MTOL, LTOM, LS, MS, LEFT, MID) ||
      process2(prevAct, LTOM, MTOL, MS, LS, MID, LEFT) ||
      process2(prevAct, RTOM, MTOR, MS, RS, MID, RIGHT) ||
      process2(prevAct, MTOR, RTOM, RS, MS, RIGHT, MID)
    total++
  }
  console.log(`It will move ${total} steps.`)
}
function process2(prevAct, noAct, nowAct, fromStack, toStack, from, to) {
  if (
    prevAct !== noAct &&
    fromStack.peek() < toStack.peek()
  ) {
    toStack.push(fromStack.pop())
    console.log(`Move 1 from ${from} to ${to}`)
    return nowAct
  }
}
hanoiProblem2(3, LEFT, MID)
