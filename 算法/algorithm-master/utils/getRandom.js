var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
var obj = {};
var i = 1000000;
while (--i > 0) {
    var x = getRandom(1, 10);
    if (!obj[x]) {
        obj[x] = 1;
    }
    else {
        obj[x]++;
    }
}
console.log(obj);
