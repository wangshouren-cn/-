//不稳定 n**1.3
function shellSort(ary, gap = Math.floor(ary.length / 2)) {
    if (ary.length < 2) return;
    for (; gap >= 1; gap--) {
        for (let i = gap; i < ary.length; i += gap) {
            let cur = i
            while (cur - gap >= 0 && ary[cur - gap] > ary[cur]) {
                swap(ary, cur, cur - gap)
                cur -= gap
            }

        }

    }
}
const swap = (array, l, r) => void ([array[l], array[r]] = [array[r], array[l]])


for (let i = 0; i < 10; i++) {
    let randomAry = (new Array(20)).fill(1).map(x => Math.ceil(Math.random() * 10))
    console.log("source:" + randomAry);
    shellSort(randomAry);
    console.log("sorted:" + randomAry);
}
