/* 
数组找最大值
剖析递归行为和递归行为时间复杂度的估算
一个递归行为的例子
master公式的使用
T(N) = a*T(N/b) + O(N^d)
1) log(b,a) > d -> 复杂度为O(N^log(b,a)) 
2) log(b,a) = d -> 复杂度为O(N^d * logN) 
3) log(b,a) < d -> 复杂度为O(N^d)

如下 :
    T(n) = 2T(n/2) + O(1)
    a = 2 ,b = 2 ,d = 0
    log(b,a) = 1 > d  所以复杂度为O(N^log(b,a)) = O(N)
*/
function getMax(arr, l = 0, r = arr.length - 1) {
  return _getMax(arr, l, r)
}
function _getMax(arr, l, r) {
  if (l == r) return arr[l]
  const mid = ~~((l + r) / 2)
  return Math.max(_getMax(arr, l, mid), _getMax(arr, mid + 1, r))
}
module.exports = getMax

// console.log(getMax([5, 6, 8, 10, 3, 5, 20]))
