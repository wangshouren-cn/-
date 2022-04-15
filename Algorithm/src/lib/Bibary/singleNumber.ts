/*
 * @Author: 王首人
 * @Date: 2022-04-14 16:34:06
 * @LastEditors: 王首人
 * @LastEditTime: 2022-04-14 17:16:24
 * @FilePath: \Algorithm\src\lib\Bibary\singleNumber.ts
 * @Description: 只出现一次的数字
 * 题目：输入一个整数数组，数组中只有一个数字出现了一次，而
 * 其他数字都出现了3次。请找出那个只出现一次的数字。例如，如果
 * 输入的数组为[0，1，0，1，0，1，100]，则只出现一次的数字是100。
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 * 思路：一个整数是由32个0或1组成的。我们可以将数组中所有数字的同
 * 一位置的数位相加。如果将出现3次的数字单独拿出来，那么这些出现
 * 了3次的数字的任意第i个数位之和都能被3整除。因此，如果数组中所
 * 有数字的第i个数位相加之和能被3整除，那么只出现一次的数字的第i
 * 个数位一定是0；如果数组中所有数字的第i个数位相加之和被3除余
 * 1，那么只出现一次的数字的第i个数位一定是1。
 *
 *
 *
 *
 */

/**
 * @description: 找到数组中只出现一次的数字
 * @param {number} nums
 * @return {*}
 */
export default function singleNumber(nums: number[]) {
  let result = 0;

  let maxBit = 0;// nums中的最大位数

  for (const num of nums) {
    while ((num>>maxBit)!==0) {
      maxBit++;
    }
  }

  // 从0~maxBit-1的索引分别存储有每个num的每个位数值之和，如索引1表示所有nums的第2位之和
  const array = new Array(maxBit).fill(0);

  for (const num of nums) {
    for (let i = 0; i < maxBit; i++) {
      if ((num >> i) === 0) break;
      array[i] += (num >> i) & 1;
    }
  }

  for (let i = maxBit-1; i >= 0; i--) {
    // 如果某位的值出现了3次，array[i]必是3的倍数，否则会余1
    result = (result << 1) + (array[i] % 3);
  }

  return result;
}

console.log(singleNumber([0, 1, 0, 1, 0, 1, 100]));
