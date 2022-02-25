/*
给你一个数组arr，和一个整数aim。如果可以任意选择arr中的数字，能不能累加得到aim，返回true或者false。
*/
function isSum(arr, i, aim, sum) {
    if (i === arr.length)
        return sum === aim;
    return isSum(arr, i + 1, aim, sum + arr[i]) || isSum(arr, i + 1, aim, sum);
}
console.log(isSum([1, 2, 7, 3], 0, 9, 0));
console.log(isSum([1, 2, 7, 3], 0, 10, 0));
console.log(isSum([1, 2, 7, 3], 0, 11, 0));
console.log(isSum([1, 2, 7, 3], 0, 12, 0));
console.log(isSum([1, 2, 7, 3], 0, 13, 0));
console.log(isSum([1, 2, 7, 3], 0, 14, 0));
