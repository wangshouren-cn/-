"use strict";
exports.__esModule = true;
var swap_1 = require("./../utils/swap");
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
function print(str) {
    walk(Array.from(str), 0);
}
function walk(chs, i) {
    if (chs.length - 1 === i)
        return console.log(chs.join(''));
    for (var j = i; j < chs.length; j++) {
        swap_1["default"](chs, j, i);
        walk(chs, i + 1);
    }
}
print('abcd');
