/* 
最大值减去最小值小于或等于num的子数组数量
【题目】
给定数组arr和整数num，共返回有多少个子数组满足如下情况：
max（arr[i..j]）-min（arr[i..j]）<=num
max（arr[i..j]）表示子数组arr[i..j]中的最大值，min（arr[i..j]）表示子 数组arr[i..j]中的最小值。
【要求】
如果数组长度为N，请实现时间复杂度为O（N）的解法。
【难度】
校　★★★☆
*/
const Queue = require('../utils/Queue')
function getNum(arr, num) {
  if (!arr || arr.length < 1) return
  const qmax = new Queue(),
    qmin = new Queue()
  let i = 0,
    j = 0,
    res = 0
  while (i < arr.length) {
    while (j < arr.length) {
      while (!qmax.isEmpty() && arr[qmax.peekLast()] <= arr[j]) {
        qmax.pollLast()
      }
      qmax.add(j)
      while (!qmin.isEmpty() && arr[qmin.peekLast()] >= arr[j]) {
        qmin.pollLast()
      }
      qmin.add(j)
      if (arr[qmax.peek()] - arr[qmin.peek()] > num) break
      j++
    }
    res += j - i
    if (qmin.peek() === i) {
      qmin.poll()
    }
    if (qmax.peek() === i) {
      qmax.poll()
    }
    i++
  }
  return res
}
/* console.log(
  getNum(
    [7, 6, 8, 2, 1, 9, 7, 5, 3, 12, 45, 7, 15, 6, 7, 13, 5, 1, 2, 8, 6, 23],
    5
  )
) */
