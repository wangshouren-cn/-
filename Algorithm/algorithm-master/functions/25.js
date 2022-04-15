/* 
可见山峰数量
【题目】
一个不含有负数的数组可以代表一圈环形山，每个位置的值代表山的高度。
例：{1,2,4,5,3}、{3,1,2,4,5}、{4,5,3,1,2}都代表同样结构的环形山
1->2->4->5->3->1方向叫做next方向（逆时针），1->3->5->4->2->1方向叫做last方向（顺时针）。
山峰A 和山峰B 能够相互看见的条件为：
1．如果A 和B 是同一座山，认为不能相互看见。
2．如果A 和B 是不同的山，并且在环中相邻，认为可以相互看见。
3．如果A 和B 是不同的山，并且在环中不相邻，假设两座山高度的最小值为min。如果A通过next 方向到B 的途中没有高度比min 大的山峰，或者A 通过last 方向到B 的途中没有高度比min 大的山峰，认为A 和B 可以相互看见。
给定一个不含有负数且的数组arr，请返回有多少对山峰能够相互看见。
【要求】
如果arr 长度为N，没有重复值的情况下时间复杂度达到O(1)，可能有重复值的情况下时间复杂度请达到O(N)。
【难度】
★★★★
*/
//数组不重复
function getVisibleNum1(arr) {
  if (!arr || arr.length < 2) {
    return 0
  } else if (arr.length === 2) {
    return 1
  } else {
    return (arr.length - 2) * 2 + 1
  }
}
//数组重复
const Stack = require('../utils/Stack')
function getVisibleNum2(arr) {
  if (!arr || arr.length < 2) return 0

  let maxIndex = 0,
    size = arr.length,
    res = 0
  //找到最大值索引
  for (let i = 0; i < size; i++) {
    maxIndex = arr[maxIndex] > arr[i] ? maxIndex : i
  }
  const stack = new Stack()
  //先把最大值放入stack
  stack.push({ value: arr[maxIndex], times: 1 })
  let k = nextIndex(maxIndex, size)

  while (k !== maxIndex) {
    let flag
    while (!stack.isEmpty() && stack.peek().value <= arr[k]) {
      if (stack.peek().value === arr[k]) {
        stack.peek().times++
        flag = true
        break
      } else {
        const times = stack.pop().times
        res += getRes(times) + times * 2
      }
    }
    !flag && stack.push({ value: arr[k], times: 1 })
    k = nextIndex(k, size)
  }
  //清算第一阶段
  while (stack.size() > 2) {
    const times = stack.pop().times
    res += getRes(times) + times * 2
  }
  //清算第二阶段
  if (stack.size() === 2) {
    const times = stack.pop().times
    res += getRes(times) + (stack.peek().times === 1 ? times : times * 2)
  } else {
    //清算第三阶段
    res += getRes(stack.pop().times)
  }
  return res
}
function getRes(times) {
  return times === 1 ? 0 : (times * (times - 1)) / 2
}
function nextIndex(index, size) {
  return index === size - 1 ? 0 : index + 1
}

console.log(
  getVisibleNum2([3, 5, 4, 2, 2, 1, 3, 7, 1, 2, 3, 5, 3, 6, 4, 2, 8, 4])
)
