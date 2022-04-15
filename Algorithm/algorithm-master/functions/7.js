/* 
利用归并排序求数组小和
在一个数组中，每一个数左边比当前数小的数累加起来，叫做这个数组的小和。求一个数组 的小和。
例子：
[1,3,4,2,5] 
1左边比1小的数，没有； 
3左边比3小的数，1； 
4左边比4小的数，1、3； 
2左边比2小的数，1； 
5左边比5小的数，1、3、4、2； 所以小和为1+1+3+1+1+3+4+2=16

*/
//T(n) = 2T(n/2) + T(n) 利用master公式 O(n) = nlogn

function merge_sort(arr, l = 0, r = arr.length - 1) {
  return _merge_sort(arr, l, r)
}

function _merge_sort(arr, l, r) {
  if (l >= r) return 0

  const mid = ~~(l + ((r - l) >> 1))

  return (
    _merge_sort(arr, l, mid) +
    _merge_sort(arr, mid + 1, r) +
    _merge(arr, l, mid, r)
  )
}
function _merge(arr, l, q, r) {
  const new_arr = Array.from({ lenth: r - l + 1 })
  let p1 = l,
    p2 = q + 1,
    i = 0
  let res = 0
  while (p1 <= q && p2 <= r) {
    res += arr[p1] < arr[p2] ? arr[p1] * (r - p2 + 1) : 0
    new_arr[i++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++]
  }

  if (p1 > q) {
    while (p2 <= r) {
      new_arr[i++] = arr[p2++]
    }
  } else {
    while (p1 <= q) {
      new_arr[i++] = arr[p1++]
    }
  }
  arr.splice(l, r - l + 1, ...new_arr)
  return res
}
module.exports = merge_sort

console.log(merge_sort([1, 3, 4, 2, 5]))
