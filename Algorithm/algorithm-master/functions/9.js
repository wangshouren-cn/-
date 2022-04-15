/* 
随机快排
用荷兰国旗优化快速排序
时间复杂度O(N*logN)，额外空间复杂度O(logN)
稳定性：false
*/
const swap = require('../utils/swap')
function quickSort(arr) {
  if (arr.length < 2 || !arr) return
  _quickSort(arr, 0, arr.length - 1)
}
function _quickSort(arr, l, r) {
  if (l < r) {
    const random = arr[Math.floor(Math.random() * (r - l + 1) + l)]
    let [p_less, p_more] = partition(arr, 0, r, random)
    _quickSort(arr, l, p_less)
    _quickSort(arr, p_more, r)
  }
}

function partition(arr, l, r, p) {
  let p_less = l - 1,
    p_more = r + 1
  //[l,p_less]表示小于num的数
  //(p_less,index)表示等于num的数
  //[index,p_more)待确认
  //[p_more,r]大于num的数
  while (l < p_more) {
    if (arr[l] < p) {
      swap(arr, ++p_less, l++)
    } else if (arr[l] === p) {
      l++
    } else {
      swap(arr, --p_more, l)
    }
  }
  // console.log(arr,p_less,p_more)
  return [p_less, p_more]
}
module.exports = quickSort
