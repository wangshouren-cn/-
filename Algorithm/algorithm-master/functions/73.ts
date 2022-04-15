import swap from './../utils/swap'
/* 
打印一个字符串的全排列
*/
/* 

abc
acb
bac
bca
cab
cba
*/
function print(str: string) {
  walk(Array.from(str), 0)
}
function walk(chs: string[], i: number) {
  if (chs.length - 1 === i) return console.log(chs.join(''))
  for (let j = i; j < chs.length; j++) {
    swap(chs, j, i)
    walk(chs, i + 1)
  }
}
print('abcd')
