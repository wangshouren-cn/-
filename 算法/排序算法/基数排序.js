//稳定 n+k
function radixSort(array, maxPosition) {
    const map = {}
    for (let index = 0; index < 10; index++) {
        map[index] = []
    }
    for (let position = 1; position <= maxPosition; position++ ) {
        for (let idx = 0; idx < array.length; idx++) {
            const num = array[idx];
            map[getPosNumber(num,position)].push(num)
        }
        let j = 0
        for (let i = 0; i < 10; i++) {
            const ary = map[i];
           
            while (ary.length > 0) array[j++] = ary.shift()
        }
        
    }

}
function getPosNumber(num, pos) {

    let mod = 10 ** pos, dev =   10**(pos - 1) || 1
    return Math.floor((num % mod) / dev);
}
for (let i = 0; i < 10; i++) {
    let randomAry = (new Array(10)).fill(1).map(x => Math.ceil(Math.random() * 1000))
    console.log("source:" + randomAry);
    radixSort(randomAry, 3);
    console.log("sorted:" + randomAry);
}
