//稳定n**2
function bubbleSort(ary) {
    if (ary.length < 2) return;
    for (let last = ary.length-1,len = ary.length; last>=0; last--) {
        for (let index = 0; index < last; index++) {
            if(ary[index]>ary[index+1]) swap(ary,index,index+1)
        }

    }
}
const swap = (array, l, r) => void ([array[l], array[r]] = [array[r], array[l]])
for (let i = 0; i < 10; i++) {
    let randomAry = (new Array(10)).fill(1).map(x => Math.ceil(Math.random() * 10))
    console.log("source:" + randomAry);
    bubbleSort(randomAry);
    console.log("sorted:" + randomAry);
}