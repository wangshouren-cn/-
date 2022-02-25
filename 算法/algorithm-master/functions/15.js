/* 
用一个栈实现另一个栈的排序
一个栈中元素的类型为整型，现在想将该栈从顶到底按从大到小的顺序排序，只许申请一个栈。
除此之外，可以申请新的变量，但不能申请额外的数据结构。如何完 成排序？
【难度】
士　★☆☆☆
【解答】
将要排序的栈记为stack，申请的辅助栈记为help。在stack上执行pop操作，弹出 的元素记为cur。
● 如果cur小于或等于help的栈顶元素，则将cur直接压入help；
● 如果cur大于help的栈顶元素，则将help的元素逐一弹出，逐一压入stack，直 到cur小于或等于help的栈顶元素，再将cur压入help。
一直执行以上操作，直到stack中的全部元素都压入到help。最后将help中的所有 元素逐一压入stack，即完成排序。
*/
const Stack = require('../utils/Stack')

function sortStackByStack(stack) {
  if (stack.size() < 2) return
  const help = new Stack()
  while (stack.size() !== 0) {
    const x = stack.pop()
    let y = help.peek()
    if (x <= y || typeof y === 'undefined') {
      help.push(x)
    } else {
      while (x > y) {
        stack.push(help.pop())
        y = help.peek()
      }
      help.push(x)
    }
  }
  while (help.size() !== 0) {
    stack.push(help.pop())
  }
}

const stack = new Stack()
stack
  .push(2)
  .push(1)
  .push(7)
  .push(8)
  .push(4)
  .push(5)
  .push(1)
  .push(2)
  .push(6)
  .push(9)
sortStackByStack(stack)
console.log(stack)
