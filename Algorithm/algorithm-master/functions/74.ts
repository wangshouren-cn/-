/* 
给你一个二维数组，二维数组中的每个数都是正数，从左上角走到到右下角，每次只能向右走或者向下走，返回最短路径和。

例：
const arr = [
  [7,1,1,1],
  [4,5,9,1],
  [6,8,1,2]
]
返回：13

ps:还有动态规划解法？
*/

function getMinSum(matrix: number[][], row: number, col: number): number {
  if (row === matrix.length - 1 && col === matrix[0].length - 1) {
    return matrix[row][col]
  }
  if (row === matrix.length - 1) {
    return matrix[row][col] + getMinSum(matrix, row, col + 1)
  }
  if (col === matrix[0].length - 1) {
    return matrix[row][col] + getMinSum(matrix, row + 1, col)
  }
  const right = getMinSum(matrix, row, col + 1)
  const down = getMinSum(matrix, row + 1, col)
  return matrix[row][col] + Math.min(right, down)
}
console.log(
  getMinSum(
    [
      [7, 1, 1, 1],
      [4, 5, 9, 1],
      [6, 8, 1, 2],
    ],
    0,
    0
  )
)
