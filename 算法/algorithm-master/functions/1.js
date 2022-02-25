/* 
冒泡排序
稳定性：true
*/
const { swap } = require('../utils')

function bubble_sort(nums) {
  if (nums.length < 2 || nums == null) return
  for (let i = nums.length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) swap(nums, j, j + 1)
    }
  }
}
module.exports = bubble_sort
