//不稳定n**2
function selectionSort(ary) {
    if (ary.length < 2) return;
    for (let last = ary.length - 1; last >= 1; last--) {
        let maxIdx = last
        for (let j = 0; j < last; j++) {
            if (ary[maxIdx] < ary[j]) maxIdx = j
        }
        swap(ary, maxIdx, last);

    }
}
const swap = (array, l, r) => void ([array[l], array[r]] = [array[r], array[l]])

for (let i = 0; i < 10; i++) {
    let randomAry = (new Array(10)).fill(1).map(x => Math.ceil(Math.random() * 10))
    console.log("source:" + randomAry);
    selectionSort(randomAry);
    console.log("sorted:" + randomAry);
}