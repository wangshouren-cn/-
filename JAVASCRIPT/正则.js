// let reg = /\P{Decimal_Number}/u;
// console.log(String("0xff").match(reg))

// let reg = /a+/
// console.log("aaab".match(reg))

// let reg = /(?<quote>['"])[^'"]*\k<quote>/
// console.log(`'sdadas'`.match(reg));

// let str = `javascript`
// console.log(str.match(/^javascript$/));

// let str = "abccabcabc"
// console.log(str.match(/abc/g));

console.time("start")
let str = "abc danjk sdas dsada ojija sadnask dasda".repeat(10)
iter = str.matchAll(/\s/gu);
console.log(str.substring(0,iter.next().value.index),str.split(" ")[0]);

for(let i=1000000;i>0;i--){
    let iter = str.matchAll(/\s/gu);
    let abc = str.substring(0,iter.next().value.index)
}
for(let i=1000000;i>0;i--){
    let abc = str.split(" ")[0];
}
console.timeEnd("start")

