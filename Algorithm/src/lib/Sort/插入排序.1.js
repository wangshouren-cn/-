// 稳定 n**2
// 从左往右依次将元素插入到应该在的位置，当前元素之前是已经排序了的
/**
 * @description: 插入排序
 * @param {*} array
 */
function insertionSort(array) {
  if (array.length < 2) return;
  for (let i = 1; i < array.length; i++) {
    let cur = i;

    while (cur >= 1 && array[cur - 1] > array[cur]) {
      swap(array, cur - 1, cur--);
    }
  }
}

const swap = (array, l, r) => void ([array[l], array[r]] = [array[r], array[l]]);

for (let i = 0; i < 10; i++) {
  const randomAry = (new Array(10)).fill(1).map((x) => Math.ceil(Math.random() * 10));
  console.log('source:' + randomAry);
  insertionSort(randomAry);
  console.log('sorted:' + randomAry);
}

