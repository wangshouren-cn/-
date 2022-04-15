"use strict";
/*
打印字符串的子序列
*/
function walk(chars, i, str) {
    if (i == chars.length)
        return console.log(str);
    walk(chars, i + 1, str + chars[i]);
    walk(chars, i + 1, str);
}
function print(str) {
    walk(Array.from(str), 0, '');
}
print('abc');
