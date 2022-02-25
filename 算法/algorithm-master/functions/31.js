/* 
转圈打印矩阵
【题目】 给定一个整型矩阵matrix，请按照转圈的方式打印它。
【要求】 额外空间复杂度为O(1)。
[
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [10,11,12]
]
*/
function printMatrix(matrix) {
  let aX = 0,
    aY = 0,
    bX = matrix.length - 1,
    bY = matrix[bX].length - 1
  while (aX <= bX && aY <= bY) {
    _printMatrix(matrix, aX++, aY++, bX--, bY--)
  }
}
function _printMatrix(matrix, aX, aY, bX, bY) {
  if (aX === bX) {
    //同行
    for (; aY <= bY; aY++) {
      console.log(matrix[aX][aY])
    }
  } else if (aY === bY) {
    //同列
    for (; aX <= bX; aX++) {
      console.log(matrix[aX][aY])
    }
  } else {
    const tmp_aX = aX,
      tmp_aY = aY

    while (aY != bY) {
      console.log(matrix[aX][aY++])
    }
    while (aX != bX) {
      console.log(matrix[aX++][aY])
    }
    while (aY != tmp_aY) {
      console.log(matrix[aX][aY--])
    }
    while (aX != tmp_aX) {
      console.log(matrix[aX--][aY])
    }
  }
}
printMatrix([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
])
