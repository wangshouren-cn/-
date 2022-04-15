// let buffer1 = Buffer.alloc(5);
// console.log(buffer1[0]); // 像数组（但是和数组有区别），数组可以扩展，buffer不能扩展，可以用索引取值,取出来的内容是10进制

// // 此方法用的非常少，我们不会直接填16进制
// let buffer2 = Buffer.from([0x25, 0x26, 300]); // 超过255 会取余
// console.log(buffer2[0]);

// let buffer3 = Buffer.from("前端"); //6个字节
// console.log(buffer3);

// const r = Buffer.from("前"); // 可以调用toString转化成指定的编码
// console.log(r.toString(2)); //<Buffer e5 89 8d>

// // base64 的来源就是将每个字节多转化成 小于64的值
// console.log((0xe5).toString(2)); //11100101
// console.log((0x89).toString(2)); //10001001
// console.log((0x8d).toString(2)); //10001101

// // 11100101 10001001 10001101  3 x 8 =>  6 * 4
// // 111001  011000 100110  001101
// console.log(parseInt("111001", 2)); //57
// console.log(parseInt("011000", 2)); //24
// console.log(parseInt("100110", 2)); //38
// console.log(parseInt("001101", 2)); //13

// // 0-63 取值范围是 64
// let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// str += str.toLocaleLowerCase();
// str += "0123456789+/";
// // 57 56  62 32
// console.log(r.toString("base64")); //5YmN

// console.log(str[57] + str[24] + str[38] + str[13]); // 5YmN 没有加密功能

// console.log(toBase64("前"));

// function toBase64(chineseChar) {
//   const r = Buffer.from(chineseChar);
//   let binary = "";
//   for (let i = 0; i < 3; i++) {
//     binary += r[i].toString(2);
//   }

//   console.log("binary", binary);

//   const base64Binary = [];
//   for (let i = 0; i < 4; i++) {
//     //3 x 8 =>  6 * 4
//     base64Binary[i] = binary.slice(i * 6, i * 6 + 6);
//   }

//   console.log("base64Binary", base64Binary);

//   const base64TableIndexArray = base64Binary.map((b) => parseInt(b, 2));

//   // 0-63 取值范围是 64
//   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   str += str.toLocaleLowerCase();
//   str += "0123456789+/";

//   let base64 = "";
//   for (let i = 0; i < 4; i++) {
//     base64 += str[base64TableIndexArray[i]];
//   }
//   return base64;
// }

// let buffer4 = Buffer.from([1,2,3,4,5]); // 内部存的是引用地址
// let sliceBuffer = buffer4.slice(0,1);
// sliceBuffer[0] = 100;
// console.log(buffer4)

// const buf1 = Buffer.from("前");
// const buf2 = Buffer.from("端");
// const bigBuf = Buffer.alloc(6);
// buf1.copy(bigBuf, 0, 0, 3);
// buf2.copy(bigBuf, 3, 0, 3);
// console.log(bigBuf.toString()); //前端

// console.log(buf1, buf2, bigBuf); //<Buffer e5 89 8d> <Buffer e7 ab af> <Buffer e5 89 8d e7 ab af>
// bigBuf[0] = 100;
// console.log(buf1); //<Buffer e5 89 8d>

const buf1 = Buffer.from("前");
const buf2 = Buffer.from("端");
const bigBuf = Buffer.concat([buf1, buf2], 100);
bigBuf[0] = 100;
console.log(buf1);//concat是深拷贝
