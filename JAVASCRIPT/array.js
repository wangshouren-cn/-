const arr=[1,2,3,4]
// console.log(arr.splice(2,1))
// console.log(arr);
console.log(arr.fill(0)==arr);

let obj=Object.create(Array.prototype)
console.log(Array.isArray(obj));

// let i=0;
// console.log((++i)==i);

let str =  "java";
console.log(Array.prototype.push.call(str,"1"));
