//桶排序
function bucketSort(arr, max) {
  if (arr == null || arr.length < 2) return
  const bucket = Array(max + 1).fill(0)
  for (let i = 0, num; (num = arr[i]); i++) {
    bucket[num]++
  }
  let j = 0
  for (let i = 0, count; (count = bucket[i]) !== undefined; i++) {
    while (count-- > 0) {
      arr[j++] = i
    }
  }
}
/* const arr = [3, 4, 5, 1, 8, 5, 4, 9, 7, 6]
bucketSort(arr, 10)
console.log(arr) */
module.exports = bucketSort
