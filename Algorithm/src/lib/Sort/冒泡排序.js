//稳定n**2
function bubbleSort(ary) {
    if (ary.length < 2) return;
    for (let len = ary.length, i = len - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (ary[j] > ary[j + 1])[ary[j], ary[j + 1]] = [ary[j + 1], ary[j]]
        }

    }
}
for (let i = 0; i < 10; i++) {
    let randomAry = (new Array(10)).fill(1).map(x => Math.ceil(Math.random() * 10))
    console.log("source:" + randomAry);
    bubbleSort(randomAry);
    console.log("sorted:" + randomAry);
}