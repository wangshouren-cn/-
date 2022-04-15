/* 
选择排序
稳定性：false
*/
const { swap } = require('../utils')

function selection_sort(nums) {
  if (nums.length < 2 || nums == null) return

  const _len = nums.length

  for (let i = 0; i < _len; i++) {
    let min_idx = i
    for (let j = i; j < _len; j++) {
      nums[j] < nums[min_idx] ? (min_idx = j) : null
    }
    min_idx !== i ? swap(nums, min_idx, i) : null
  }
}
module.exports = selection_sort
