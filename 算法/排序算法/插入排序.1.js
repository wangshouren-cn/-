//稳定 n**2
function insertionSort(array) {
    if(array.length<2)return
    for (let i = 1; i < array.length; i++) {
        let cur = i
        while(cur-1>=0 && array[cur-1]>array[cur]){
            swap(array,cur,cur-1)
            cur-=1;
        }
        
    }
}
const swap = (array, l, r) => void ([array[l], array[r]] = [array[r], array[l]])

for (let i = 0; i < 10; i++) {
    let randomAry = (new Array(10)).fill(1).map(x => Math.ceil(Math.random() * 10))
    console.log("source:" + randomAry);
    insertionSort(randomAry);
    console.log("sorted:" + randomAry);
}

