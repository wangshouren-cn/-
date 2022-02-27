// let next = 1, last = 10;
// let obj = {
//     [Symbol.iterator]() {
//         return {
//             next:() => next <= last ? { value: next++ } : { done: true },
//             return(){
//                 console.log("called return");

//                 return {done:true}
//             }
//         }
//     }
// }
// let iter = obj;

// for(let value of iter) {
//     console.log(value)
//     break;
// }

// let next = 1, last = 10;
// let obj = {
//     next:() => next <= last ? { value: next++ } : { done: true },
//     return(){
//         console.log("called return");

//         return {done:true}
//     },
//     [Symbol.iterator](){return this}
// }
// let iter = obj;

// for(let value of iter) {
//     console.log(value)
//     break;
// }

// let config;
// let props = { ...config };
// console.log(props);
