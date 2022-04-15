/* 
KMP算法
【题目】
给定两个字符串str和match，长度分别为N和M。实现一个算法，如果字符串str中 含有子串match，则返回match在str中的开始位置，不含有则返回-1。
【举例】 str="acbc"，match="bc"，返回2。 str="acbc"，match="bcc"，返回-1。
【要求】
如果match的长度大于str的长度(M>N)，str必然不会含有match，可直接返 回-1。但如果N≥M，要求算法复杂度为O(N)。
【难度】 将 ★★★★
*/
function match(str: string, match: string) {
  const nextArr = getNextArr(match);
  let i1 = 0,
    i2 = 0;
  while (i1 < str.length && i2 < match.length) {
    if (str[i1] === match[i2]) {
      i1++;
      i2++;
    } else {
      if (nextArr[i2] === -1) {
        i1++;
      } else {
        i2 = nextArr[i2];
      }
    }
  }
  return i2 === match.length ? i1 - i2 : -1;
}

function getNextArr(match: string) {
  if (match.length === 1) return [-1];
  const nextArr = [-1, 0];
  let cm = 0,
    i = 2;
  while (i < match.length) {
    if (match[cm] === match[i - 1]) {
      nextArr[i++] = ++cm;
    } else if (nextArr[cm] > 0) {
      cm = nextArr[cm];
    } else {
      nextArr[i++] = 0;
    }
  }
  return nextArr;
}
console.log(match("ciodjcioan", "ioa"));
export {};
