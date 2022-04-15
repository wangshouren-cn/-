//稳定 n+k
function radixSort(array, maxPosition) {
  let map = {};

  //初始化map
  for (let i = 0; i < 10; i++) map[i] = []

  //从1到maxPosition遍历
  for (let pos = 1; pos <= maxPosition; pos++) {

    //取出数组中每个元素根据pos获取数字放入map中
    for (let i = 0; i < array.length; i++) {
      const num = array[i];
      map[getPosNumber(num, pos)].push(num)
    }

    let i = 0;
    
    //取出map中的数据放回数组
    for (let j = 0; j < 10; j++) {
      const _array = map[j];
      while (_array.length > 0) array[i++] = _array.shift()
    }

  }

}

/**
 * @description: 获取数中的某一位数字
 * @param {*} num
 * @param {*} pos
 * @return {*}
 */
function getPosNumber(num, pos) {
  let mod = 10 ** pos, dev = 10 ** (pos - 1)
  return Math.floor((num % mod) / dev)

}
for (let i = 0; i < 10; i++) {
  let randomAry = (new Array(10)).fill(1).map(x => Math.ceil(Math.random() * 1000))
  console.log("source:" + randomAry);
  radixSort(randomAry, 4);
  console.log("sorted:" + randomAry);
}
