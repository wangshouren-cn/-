/*
未排序数组中累加和为给定值的最长字数组系列问题
*/
function getMaxLen(arr, k) {
    var map = new Map();
    map.set(0, -1);
    var len = 0, sum = 0;
    for (var i = 0; i < arr.length; i++) {
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
