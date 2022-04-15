//稳定n+k
function bucketSort(array, bucketSize = 10) {

  //找出最大最小值
    let min = Number.POSITIVE_INFINITY, max = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element > max) max = element;
        if (element < min) min = element;
  }
  
  //
    let map = {}, bucketNum = Math.floor((max - min) / bucketSize);
    for (let i = bucketNum; i >= 0; i--) map[i] = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        map[Math.floor((element - min) / bucketSize)].push(element)
    }
    let j = 0;
    for (let i = 0; i < bucketNum; i++) {
        const arr = map[i];
        insertionSort(arr);
        while (arr.length > 0) array[j++]=arr.shift();
    }
}

for (let i = 0; i < 10; i++) {
    let randomAry = (new Array(20)).fill(1).map(x => Math.ceil(Math.random() * 100))
    console.log("source:" + randomAry);
    bucketSort(randomAry);
    console.log("sorted:" + randomAry);
}

function insertionSort(ary) {
    if (ary.length < 2) return
    for (let len = ary.length, i = 1; i < len; i++) {
        const target = ary[i];
        let j = i - 1;
        for (; j >= 0; j--) {
            if (target < ary[j]) ary[j + 1] = ary[j];
            else { break; j--; }
        }
        ary[j + 1] = target
    }
}