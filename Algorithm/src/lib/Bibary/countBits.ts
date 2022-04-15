/*
 * @Author: 王首人
 * @Date: 2022-04-13 20:19:45
 * @LastEditors: 王首人
 * @LastEditTime: 2022-04-13 22:18:51
 * @FilePath: \Algorithm\src\lib\Bibary\countBits.ts
 * @Description:
 * 前n个数字二进制形式中1的个数，题目：输入一个非负数n，
 * 请计算0到n之间每个数字的二进制形式中1的个数，
 * 并输出一个数组。例如，输入的n为4，由于0、1、2、3、4的二进制形式中1的个数分别为0、1、1、2、1，
 * 因此输出数组[0，1，1，2，1]。
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

// 方法一：使用 n & (n-1)  原理：因为(n-1)的结果是将n最右边的1置0，并且这个1的位置的右边部分全变1，左边部分保持不变，

// 因此 n & (n-1) 的结果就是让n的1的个数减一的结果

/**
 * @description: 前n个数字二进制形式中1的个数
 * @param {number} num
 * @return {*}
 */
function countBits1(num: number) {
  // 如果num是4 则要计算0,1,2,3,4共5个数
  const result = Array.from({length: num + 1}).fill(0) as number[];

  // 可以从1开始利用n & (n-1)原理往后依次计算出结果
  for (let i = 1; i <= num; i++) {
    result[i] = result[i & (i - 1)] + 1;
  }

  return result;
}


// 方法二：n的1的个数是n/2的1的个数再加上n%2，这里i>>1就是i/2，i&1就是i%2
/**
 * @description: 前n个数字二进制形式中1的个数
 * @param {number} num
 * @return {*}
 */
function countBits2(num: number) {
  // 如果num是4 则要计算0,1,2,3,4共5个数
  const result = Array.from({length: num + 1}).fill(0) as number[];

  // 可以从1开始往后依次计算出结果
  for (let i = 1; i <= num; i++) {
    result[i] = result[i >> 1] + (i & 1);
  }

  return result;
}

console.log(countBits1(4));
console.log(countBits2(0b100)); // 一样的
