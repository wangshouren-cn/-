//稳定n+k
function countingSort(array) {
  let max = Math.max(...array);
  let map = {};
  for (let i = 0; i <= max; i++) map[i] = 0

  //取出数组中的元素来记数
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    map[element] += 1
  }

  //还原数组
  let j = 0;
  for (let i = 0; i <= max; i++) {
    let count = map[i];//这里是count不是数组，和桶排序的区别之一
    while (count > 0) {
      array[j++] = i;
      count--;
    }
  }
}

for (let i = 0; i < 10; i++) {
  let randomAry = (new Array(10)).fill(1).map(x => Math.ceil(Math.random() * 10))
  console.log("source:" + randomAry);
  countingSort(randomAry);
  console.log("sorted:" + randomAry);
}