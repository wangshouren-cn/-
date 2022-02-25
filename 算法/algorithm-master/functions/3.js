/* 
插入排序
稳定性：true
在样本量小于60的时候，常数项很低，适合插入排序
 */
const { swap } = require('../utils')
//插入排序跟数据状况是由关系的 数据是有序的 复杂度越低
//最好情况：n   最坏情况：n^2
function insertion_sort(nums) {
  if (nums.length < 2 || nums == null) return
  for (let i = 1; i < nums.length; i++) {
    //当前要排序前 i 个 i = 1, 2...
    for (let j = i; j > 0 && nums[j] < nums[j - 1]; j--) {
      //j = i, i-1, ...1    如果 nums[j] < nums[j - 1] 交换
      swap(nums, j, j - 1)
    }
  }
}

module.exports = insertion_sort
