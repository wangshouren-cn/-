//稳定 n**2
module.exports=function insertionSort(ary) {
    if(ary.length<2)return
    for (let len = ary.length, i = 1; i < len; i++) {
        const target = ary[i];
        let j = i - 1;
        for (; j >= 0; j--) {
            if (target < ary[j]) ary[j+1] = ary[j] ;
            else { break;j--;}
        }
        ary[j+1] = target
    }
}
for (let i = 0; i < 10; i++) {
    let randomAry = (new Array(10)).fill(1).map(x => Math.ceil(Math.random() * 10))
    console.log("source:" + randomAry);
    insertionSort(randomAry);
    console.log("sorted:" + randomAry);
}

