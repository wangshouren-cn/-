/* 
归并排序
稳定性：true
*/
//T(n) = 2T(n/2) + T(n) 利用master公式 O(n) = nlogn
//时间复杂度：O(N*logN),空间复杂度：O(N)

function merge_sort(arr, l = 0, r = arr.length - 1) {
  _merge_sort(arr, l, r)
}

function _merge_sort(arr, l, r) {
  if (l >= r) return

  const mid = ~~((l + r) / 2)

  _merge_sort(arr, l, mid)
  _merge_sort(arr, mid + 1, r)
  _merge(arr, l, mid, r)
}
function _merge(arr, l, q, r) {
  const new_arr = Array.from({ lenth: r - l + 1 })
  let p1 = l,
    p2 = q + 1,
    i = 0
  while (p1 <= q && p2 <= r) {
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
}
module.exports = merge_sort
