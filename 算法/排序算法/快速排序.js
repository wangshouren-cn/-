//https://www.bilibili.com/video/av62621532?from=search&seid=18078115607164089076&spm_id_from=333.337.0.0
//不稳定nlgn
function quickSort(array, l = 0, r = array.length - 1) {

    if (l >= r) return;
    let selectedNum = array[l], index = r, _r = r, _l = l
    while (l != r) {
        if (array[index] < selectedNum) {
            array[l++] = array[index]
            index = l
        } else {
            array[r--] = array[index]
            index = r
        }
    }
    array[index] = selectedNum
    // console.log(l,r,index)
    quickSort(array, _l, index);
    quickSort(array, index + 1, _r);
}

for (let i = 0; i < 10; i++) {
    let randomAry = (new Array(10)).fill(1).map(x => Math.ceil(Math.random() * 10))
    console.log("source:" + randomAry);
    quickSort(randomAry);
    console.log("sorted:" + randomAry);
}


