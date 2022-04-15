/* 
“之”字形打印矩阵
【题目】 给定一个矩阵matrix，按照“之”字形的方式打印这 个矩阵，例如： 1   2   3   4 5   6   7   8 9  10  11  12 “之”字形打印的结果为：1，2，5，9，6，3，4，7，10，11， 8，12
【要求】 额外空间复杂度为O(1)。
*/

function print(matrix) {
  let endR = matrix.length - 1,
    endC = matrix[0].length - 1,
    AR = 0,
    AC = 0,
    BR = 0,
    BC = 0,
    flag = true

  while (AR != endR + 1) {
    _print(matrix, AR, AC, BR, BC, flag)
    AC < endC ? AC++ : AR++
    BR < endR ? BR++ : BC++

    flag = !flag
  }
}
function _print(matrix, AR, AC, BR, BC, flag) {
  while (AC >= BC) {
    console.log(matrix[AR++][AC--])
  }
}
print([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
])
