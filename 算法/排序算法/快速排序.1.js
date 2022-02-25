//https://www.bilibili.com/video/av62621532?from=search&seid=18078115607164089076&spm_id_from=333.337.0.0
//不稳定nlgn
function quickSort(array, l = 0, r = array.length - 1) {
    
    
    if (l >= r) return;
    let selectedNum = array[l], i = r, _l = l, _r = r;
    while (l != r) {
        if (array[i] >= selectedNum) {//**这里是>= */
            array[r--] = array[i]
            i = r
        }else {
            array[l++] = array[i]
            i = l
        }
    }
    array[i] = selectedNum//*****别忘了加这里 */
    console.log(_l,_r,i,array);
    quickSort(array, _l, i)
    quickSort(array, i + 1, _r)

}

for (let i = 0; i < 10; i++) {
    let randomAry = (new Array(10)).fill(1).map(x => Math.ceil(Math.random() * 10))
    console.log("source:" + randomAry);
    quickSort(randomAry);
    console.log("sorted:" + randomAry);
}


