/* *
用递归函数和栈操作逆序一个栈
【题目】
一个栈依次压入1、2、3、4、5，那么从栈顶到栈底分别为5、4、3、2、1。将这个 栈转置后，从栈顶到栈底为1、2、3、4、5，也就是实现栈中元素的逆序，但是只能 用递归函数来实现，不能用其他数据结构。
【难度】
尉　★★☆☆
*/

function reverse(stack) {
  if (stack.isEmpty()) return
  const last = getAndRemoveLastItem(stack)
  reverse(stack)
  stack.push(last)
}

function getAndRemoveLastItem(stack) {
  if (stack.isEmpty()) return
  const item = stack.pop()
  if (!stack.isEmpty()) {
    const last = getAndRemoveLastItem(stack)
    stack.push(item)
    return last
  } else {
    return item
  }
}
module.exports = reverse
