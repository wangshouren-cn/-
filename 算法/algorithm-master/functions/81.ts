/*
Manacher算法
【题目】
给定一个字符串str，返回str中最长回文子串的长度。
【举例】
str="123"，其中的最长回文子串为"1"、"2"或者"3"，所以返回1。
str="abc1234321ab"，其中的最长回文子串为"1234321"，所以返回7。
【进阶题目】 给定一个字符串str，想通过添加字符的方式使得str整体都变成回文字符串，但要求只能在str的末尾添加字符，请返回在str后面添加的最短字符串。 
【举例】
str="12"。在末尾添加"1"之后，str变为"121"，是回文串。在末尾添加"21"之 后，str变为"1221"，也是回文串。但"1"是所有添加方案中最短的，所以返 回"1"。
【要求】 如果str的长度为N，解决原问题和进阶问题的时间复杂度都达到O(N)。 
【难度】
将 ★★★★ 
*/
function getMaxLen(str: string) {
  const rArr = [];
  let max = 0,
    R = -1,
    M = -1,
    i = 0;

  let dStr = "";
  for (let i = 0; i < str.length; i++) {
    dStr += "#" + str[i];
  }
  dStr += "#";
  while (R < dStr.length - 1) {
    let r;
    if (i > R) {
      r = find(dStr, i - 1, i + 1);
      R += r + 1;
      M = i;
    } else {
      const li = 2 * M - i;
      const lr = rArr[li];
      const L = M - rArr[M];
      if (li - lr < L) {
        r = R - i;
      } else if (li - lr === L) {
        const er = find(dStr, 2 * i - R - 1, R + 1);
        r = R - i + er;
        R += er;
        M = er > 0 ? i : M;
      } else {
        r = lr;
      }
    }
    rArr[i] = r;
    i++;
    max = r * 2 + 1 > max ? r * 2 + 1 : max;
  }
  //   console.log(dStr);
  //   console.log(rArr);
  return Math.floor(max / 2);
}
//暴力查找
function find(s, l, r) {
  let c = 0;
  while (s[l] === s[r] && r < s.length) {
    c++;
    l--;
    r++;
  }
  return c;
}

//进阶问题
function getStr(str: string) {
  const rArr = [];
  let R = -1,
    M = -1,
    i = 0;

  let dStr = "";
  for (let i = 0; i < str.length; i++) {
    dStr += "#" + str[i];
  }
  dStr += "#";
  while (R < dStr.length - 1) {
    let r;
    if (i > R) {
      r = find(dStr, i - 1, i + 1);
      R += r + 1;
      M = i;
    } else {
      const li = 2 * M - i;
      const lr = rArr[li];
      const L = M - rArr[M];
      if (li - lr < L) {
        r = R - i;
      } else if (li - lr === L) {
        const er = find(dStr, 2 * i - R - 1, R + 1);
        r = R - i + er;
        R += er;
        M = er > 0 ? i : M;
      } else {
        r = lr;
      }
    }
    rArr[i] = r;
    i++;
  }
  let res = "",
    m = M - rArr[M];
  for (let j = m - 1; j >= 0; j -= 2) {
    res += dStr[j];
  }

  //   console.log(dStr);
  //   console.log(rArr);
  return res;
}

console.log(getMaxLen("a"));
console.log(getStr("aab"));
export {};
//abcbbcba
