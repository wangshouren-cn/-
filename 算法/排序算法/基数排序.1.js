//稳定 n+k
function radixSort(array, maxPosition) {
    let map = {};
    for (let i = 0; i < 10; i++) map[i] = []
    for (let pos = 1; pos <= maxPosition; pos++) {
        for (let i = 0; i < array.length; i++) {
            const num = array[i];
            map[getPosNumber(num,pos)].push(num)
        }
        let i = 0;
        for (let j = 0; j < 10; j++) {
            const _array = map[j];
            while(_array.length>0) array[i++] =_array.shift() 
        }
        
    }

}
function getPosNumber(num, pos) {
    let mod = 10**pos,dev = 10**(pos-1)
    return Math.floor((num%mod)/dev)

}
for (let i = 0; i < 10; i++) {
    let randomAry = (new Array(10)).fill(1).map(x => Math.ceil(Math.random() * 1000))
    console.log("source:" + randomAry);
    radixSort(randomAry, 4);
    console.log("sorted:" + randomAry);
}
