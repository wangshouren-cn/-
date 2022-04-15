/* 
荷兰国旗问题
给定一个数组arr，和一个数num，请把小于num的数放在数组的 左边，等于num的数放在数组的中间，大于num的数放在数组的 右边。
要求额外空间复杂度O(1)，时间复杂度O(N)
稳定性：false
*/
const swap = require('../utils/swap')
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
module.exports = partition
