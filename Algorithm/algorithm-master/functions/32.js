/* 
旋转正方形矩阵
【题目】 给定一个整型正方形矩阵matrix，请把该矩阵调整成 顺时针旋转90度的样子。
【要求】 额外空间复杂度为O(1)。
*/
function rotateMatrix(matrix) {
  let aX = 0,
    aY = 0,
    bX = matrix.length - 1,
    bY = matrix[bX].length - 1
  while (aX <= bX && aY <= bY) {
    _rotateMatrix(matrix, aX++, aY++, bX--, bY--)
  }
}
function _rotateMatrix(matrix, aX, aY, bX, bY) {
  const times = bX - aX
  for (let i = 0; i < times; i++) {
    let tmp = matrix[aX][aY]
    matrix[aX][aY] = matrix[bX - i][aX]
    matrix[bX - i][aX] = matrix[bX][bY - i]
    matrix[bX][bY - i] = matrix[aX + i][bY]
    matrix[aX + i][bY] = tmp
    aY++
  }
}

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
]
rotateMatrix(matrix)
console.log(matrix)
