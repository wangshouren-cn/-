/**
 * @description: 二进制加法
 * @param {string} s1
 * @param {string} s2
 * @return {*}
 */
export default function binaryAdd(s1: string, s2: string) {
  let i = s1.length - 1;
  let j = s2.length - 1;
  let carry /* 进位 */ = 0;
  let result = '';

  while (i >= 0 || j >= 0) {
    const v1 = i >= 0 ? Number(s1[i--]) : 0;
    const v2 = j >= 0 ? Number(s2[j--]) : 0;

    let value = v1 + v2 + carry;

    // 设置进位
    if (value >= 2) {
      value -= 2;
      carry = 1;
    } else {
      carry = 0;
    }

    result = value.toString() + result;
  }

  // 遍历完以后如果还有进位就在前面加个1
  if (carry > 0) {
    result = '1' + result;
  }

  return result;
}

// console.log((0b01 + 0b001).toString(2));
// console.log(binaryAdd("1", "11111"))
