//稳定n+k
function bucketSort(array, bucketSize = 10) {
    let min = Math.min(...array),max = Math.max(...array);
    const map = {}

    for (let index = 0,len = Math.floor((max-min)/bucketSize) ; index <= len; index++) {
        map[index] = []
    }
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        let key = Math.floor((element-min)/bucketSize)
        map[key] .push(element)
    }
    for (let index = 0,len = Math.floor((max-min)/bucketSize) ; index <= len; index++) {
        const _array = map[index]||[];
        insertionSort(_array)
    }
    for (let index = 0,len = Math.floor((max-min)/bucketSize) ,i=0; index <= len; index++) {
        const _array = map[index];
        while(_array.length>0){
            array[i++] = _array.shift();
        }
    }
}

for (let i = 0; i < 10; i++) {
    let randomAry = (new Array(20)).fill(1).map(x => Math.ceil(Math.random() * 100))
    console.log("source:" + randomAry);
    bucketSort(randomAry);
    console.log("sorted:" + randomAry);
}

function insertionSort(ary) {
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