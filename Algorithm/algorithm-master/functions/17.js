/* 
生成窗口最大值数组
【题目】
有一个整型数组arr和一个大小为w的窗口从数组的最左边滑到最右边，窗口每次向 右边滑一个位置。
例如，数组为[4，3，5，4，3，3，6，7]，窗口大小为3时：
[4 3 5] 4 3 3 6 7 窗口中最大值为5 
4 [3 5 4] 3 3 6 7 窗口中最大值为5
4 3 [5 4 3] 3 6 7 窗口中最大值为5
4 3 5 [4 3 3] 6 7 窗口中最大值为4
4 3 5 4 [3 3 6] 7 窗口中最大值为6
4 3 5 4 3 [3 6 7] 窗口中最大值为7
如果数组长度为n，窗口大小为w，则一共产生n-w+1个窗口的最大值。
请实现一个函数。
● 输入：整型数组arr，窗口大小为w。
● 输出：一个长度为n-w+1的数组res，res[i]表示每一种窗口状态下的最大值。
以本题为例，结果应该返回{5，5，5，4，6，7}。
*/
const Queue = require('../utils/Queue')
function getMaxWindow(arr, w) {
  if (!arr || arr.length < 1 || w > arr.length) return
  const queue = new Queue(),
    res = []
  for (let i = 0, x; (x = arr[i]); i++) {
    while (arr[queue.peekLast()] < x) {
      //如果 队列中队尾下标在数组中对应的值小于当前值
      queue.pollLast()
    }
    queue.add(i)

    if (queue.peek() <= i - w) {
      //队头的下标已过期
      queue.poll()
    }
    if (i >= w - 1) {
      res.push(arr[queue.peek()])
    }
  }
  return res
}
console.log(getMaxWindow([4, 3, 5, 4, 3, 3, 6, 7], 4))
