//稳定n+k
function countingSort(array){

    let max = Math.max(...array);
    const map = Object.create(null)
    for (let index = 0; index < array.length; index++) {
        const ele = array[index]
        count = map[ele]||0
        map[ele] = count+1
    }
    for (let index = 0,i=0; index <= max; index++) {
        let count = map[index];
        while(count!==undefined&&count!=0){
            array[i++] = index
            count--;
        }
        
    }
    
}

for (let i = 0; i < 10; i++) {
    let randomAry = (new Array(10)).fill(1).map(x => Math.ceil(Math.random() * 10))
    console.log("source:" + randomAry);
    countingSort(randomAry);
    console.log("sorted:" + randomAry);
}