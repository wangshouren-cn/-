//不稳定 n**1.3
function shellSort(ary) {
    for (let gap = Math.floor(ary.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let start = 0; start < gap; start++) {
            for (let r = start + gap; r > 0 && r < ary.length; r += gap) {
                let cur = ary[r], preIdx = r;
                while (preIdx - gap >= 0 && ary[preIdx - gap] > cur) {
                    ary[preIdx] = ary[preIdx - gap]
                    preIdx -= gap
                }
                ary[preIdx] = cur
            }
        }
    }
}


for (let i = 0; i < 10; i++) {
    let randomAry = (new Array(10)).fill(1).map(x => Math.ceil(Math.random() * 10))
    console.log("source:" + randomAry);
    shellSort(randomAry);
    console.log("sorted:" + randomAry);
}
