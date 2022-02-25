/* 
利用归并排序解决逆序对问题 
在一个数组中，左边的数如果比右边的数大，则这两个数构成一个逆序对，请打印所有逆序 对。
*/
//T(n) = 2T(n/2) + T(n) 利用master公式 O(n) = nlogn

function merge_sort(arr, l = 0, r = arr.length - 1) {
  _merge_sort(arr, l, r)
}

function _merge_sort(arr, l, r) {
  if (l >= r) return 0

  const mid = ~~(l + ((r - l) >> 1))

  _merge_sort(arr, l, mid) +
    _merge_sort(arr, mid + 1, r) +
    _merge(arr, l, mid, r)
}
function _merge(arr, l, q, r) {
  const new_arr = Array.from({ lenth: r - l + 1 })
  let p1 = l,
    p2 = q + 1,
    i = 0
  while (p1 <= q && p2 <= r) {
    if (arr[p1] > arr[p2]) {
      let _p1 = p1
      while (_p1 >= l) {
        console.log([arr[p1], arr[p2]])
        _p1--
      }
    }
    new_arr[i++] = arr[p1] > arr[p2] ? arr[p1++] : arr[p2++]
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
}
module.exports = merge_sort
const arr = [1, 3, 4, 2, 5]
merge_sort(arr)
console.log(arr)
