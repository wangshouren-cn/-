//不稳定n**2
function selectionSort(ary) {
    for (let i = 0, len = ary.length; i < len - 1; i++) {
        let minIndex = i
        for (let j = i + 1; j < len; j++) {
            if (ary[j] < ary[minIndex]) minIndex = j
        }
        [ary[i], ary[minIndex]]= [ary[minIndex], ary[i]]
    }
}
for (let i = 0; i < 10; i++) {
    let randomAry = (new Array(10)).fill(1).map(x => Math.ceil(Math.random() * 10))
    console.log("source:" + randomAry);
    selectionSort(randomAry);
    console.log("sorted:" + randomAry);
}