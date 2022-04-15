/* 
求最大子矩阵的大小
【题目】给定一个整形矩阵map，其中的值只有0和1两种，求其中全是1的所有矩形区域中，最大的矩形区域为1的数量。
例如：
1 0 1 1
1 1 1 1 
1 1 1 0
其中，最大的矩形区域有6个1，所以返回6
【难度】
★★★☆
*/
const Stack = require('../utils/Stack')
function maxRecSize(map) {
  let res = 0,
    stack = new Stack(),
    height = Array(map[0].length).fill(0)
  for (let i = 0; i < map.length; i++) {
    //处理height
    for (let j = 0; j < map[0].length; j++) {
      height[j] = map[i][j] === 0 ? 0 : height[j] + 1
      while (!stack.isEmpty() && height[stack.peek()] >= height[j]) {
        const pos = stack.pop()
        res = Math.max(res, (j - (stack.peek() || -1) - 1) * height[pos])
      }
      stack.push(j)
    }
    while (!stack.isEmpty()) {
      const pos = stack.pop()
      res = Math.max(
        res,
        (height.length - (stack.peek() || -1) - 1) * height[pos]
      )
    }
  }
  return res
}

console.log(
  maxRecSize([
    [1, 0, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ])
)
