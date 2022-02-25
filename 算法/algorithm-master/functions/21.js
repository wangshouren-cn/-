/* 
给定一个数组，求如果排序之后，相邻两数的最大差值，要求时间复杂度O(N)，且要求不能用非基于比较的排序。
*/

function getMaxGap(arr) {
  if (!arr || arr.length < 2) return
  let max = -Infinity,
    min = Infinity,
    len = arr.length,
    res = 0
  for (let i = 0, num; (num = arr[i]) !== undefined; i++) {
    max = Math.max(max, num)
    min = Math.min(min, num)
  }
  if (max === min) return 0
  const hasNum = Array(len + 1).fill(false)
  const maxs = Array(len + 1).fill(-Infinity)
  const mins = Array(len + 1).fill(Infinity)
  for (let i = 0, num; (num = arr[i]) !== undefined; i++) {
    const bid = bucket(num, len + 1, max, min)
    maxs[bid] = hasNum[bid] ? Math.max(maxs[bid], num) : num
    mins[bid] = hasNum[bid] ? Math.min(mins[bid], num) : num
    hasNum[bid] = true
  }
  let lastMax = maxs[0]
  for (let i = 1; i < len + 1; i++) {
    if (hasNum[i]) {
      res = Math.max(res, mins[i] - lastMax)
      lastMax = maxs[i]
    }
  }
  return res
}
function bucket(num, len, max, min) {
  return parseInt(num / ((max - min) / len))
}

module.exports = getMaxGap
// console.log(getMaxGap([12, 3, 8, 46, 45, 37, 84, 56, 68, 95]))
// console.log([12, 3, 8, 46, 45, 37, 84, 56, 68, 95].sort((a, b) => a - b))
