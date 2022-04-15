//https://www.bilibili.com/video/av47196993?from=search&seid=1923835684865477804&spm_id_from=333.337.0.0
//不稳定 nlgn
function buildMaxHeap(array, n = array.length) {
    let father = Math.floor((n - 2) / 2)
    for (; father >= 0; father--) {
        heapify(array, n, father)
    }
}

function heapify(array, n, i) {

    if (i >= n) return;
    let c1 = 2 * i + 1, c2 = 2 * i + 2, max = i;
    if (c1 < n && array[c1] > array[max]) max = c1
    if (c2 < n && array[c2] > array[max]) max = c2
    if (max != i) {
        swap(array, max, i)
        heapify(array, n, max)
    }

}

function heapSort(array){
    buildMaxHeap(array)
    for (let i = array.length-1; i >=0; i--) {
        swap(array,0,i)
        heapify(array,i,0)
    }
}
const swap = (array, l, r) => void ([array[l], array[r]] = [array[r], array[l]])

for (let i = 0; i < 10; i++) {
    let randomAry = (new Array(10)).fill(1).map(x => Math.ceil(Math.random() * 10))
    console.log("source:" + randomAry);
    heapSort(randomAry);
    console.log("sorted:" + randomAry);
}