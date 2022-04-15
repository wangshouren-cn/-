"use strict";
/*
未排序数组中累加和为给定值的最长字数组系列问题
★★☆☆
*/
function getMaxLen(arr, k) {
    const map = new Map();
    map.set(0, -1);
    let len = 0, sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (map.has(sum - k)) {
            len = Math.max(len, i - map.get(sum - k));
        }
        else {
            map.set(sum, i);
        }
    }
    return len;
}
console.log(getMaxLen([1, 2, 3, 3, 3], 3));
