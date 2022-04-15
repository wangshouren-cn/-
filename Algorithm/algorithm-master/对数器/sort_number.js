//数组排序

const { Equal, generateRandomArray, Right } = require('../utils/index')
module.exports = function sort_number(size, value, sort_fn, times = 500000) {
  let success = true

  console.time('sort number')
  for (let i = 0; i < times; i++) {
    const arr = generateRandomArray(size, value)
    const arr1 = [...arr]
    const arr2 = [...arr]
    try {
      sort_fn(arr1)
    } catch (e) {
      console.log(e)
      console.log('failed!')
      console.log('原数组', arr)
      console.log('结果', arr1)
      console.log('答案', arr2)
    }

    Right.sort(arr2)
    if (!Equal.isArrayEqual(arr1, arr2)) {
      success = false
      console.log('failed!')
      console.log('原数组', arr)
      console.log('结果', arr1)
      console.log('答案', arr2)
      process.exit()
      break
    }
  }

  console.log('Nice!')
  console.timeEnd('sort number')
}
