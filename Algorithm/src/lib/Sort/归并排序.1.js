//https://www.bilibili.com/video/av62759440?from=search&seid=15544984917251537250&spm_id_from=333.337.0.0
//稳定 nlgn
function mergeSort(array, l = 0, r = array.length - 1) {
  if (l == r) return;
  const m = Math.floor((l + r) / 2);
  mergeSort(array, l, m);
  mergeSort(array, m + 1, r);
  merge(array, l, r, m);
}
function merge(array, l, r, m) {
  let _arr = [], left = l, right = m + 1;
  let i = 0;
  while (left <= m && right <= r) {
    if (array[left] <= array[right]) {
      _arr.push(array[left++])
    } else {
      _arr.push(array[right++])
    }
  }
  while (left <= m) _arr.push(array[left++])
  while (right <= r) _arr.push(array[right++])
  array.splice(l, r - l + 1, ..._arr)
}
for (let i = 0; i < 10; i++) {
  let randomAry = (new Array(10)).fill(1).map(x => Math.ceil(Math.random() * 10))
  console.log("source:" + randomAry); mergeSort(randomAry);
  console.log("sorted:" + randomAry);
}


