//https://www.bilibili.com/video/av62759440?from=search&seid=15544984917251537250&spm_id_from=333.337.0.0
//稳定 nlgn
function mergeSort(array) {

    if (array.length < 2) return array;
    let middle = Math.floor(array.length / 2);
    return merge(mergeSort(array.slice(0, middle)), mergeSort(array.slice(middle)))
}
function merge(left, right) {
    let result = [];
    while (left.length > 0 && right.length > 0) {
        if (left[0] <= right[0]) result.push(left.shift())
        else result.push(right.shift())
    }
    while(left.length>0) result.push(left.shift())
    while(right.length>0) result.push(right.shift())
    return result;
}

for (let i = 0; i < 10; i++) {
    let randomAry = (new Array(10)).fill(1).map(x => Math.ceil(Math.random() * 10))
    console.log("source:" + randomAry);
    console.log("sorted:"+mergeSort(randomAry));
}


