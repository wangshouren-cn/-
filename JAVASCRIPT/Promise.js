class MyPromise{
    constructor(callback){
        setTimeout(() => {
            callback();
        }, 0);
    }
    then(callback){
        return new MyPromise()
    }
}

new MyPromise((resolve,reject)=>{
    setTimeout(()=>{
        console.log(1000);
    },1000)
}).then((res,err)=>{

})