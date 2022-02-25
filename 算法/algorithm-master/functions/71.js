"use strict";
exports.__esModule = true;
/*

一些项目要占用一个会议室宣讲，会议室不能同时容纳两个项目 的宣讲。 给你每一个项目开始的时间和结束的时间(给你一个数 组，里面 是一个个具体的项目)，你来安排宣讲的日程，要求会 议室进行 的宣讲的场次最多。返回这个最多的宣讲场次。
*/
var PriorityQueue_1 = require("../utils/PriorityQueue");
var Talk = /** @class */ (function () {
    function Talk(s, e) {
        this.s = s;
        this.e = e;
    }
    return Talk;
}());
function getMax(talks) {
    var q = new PriorityQueue_1["default"](function (a, b) { return a.e < b.e; }, talks);
    var s = 0, r = 0;
    while (!q.isEmpty()) {
        var t = q.poll();
        if (t.s >= s) {
            r += 1;
            s = t.e;
        }
    }
    return r;
}
console.log(getMax([
    new Talk(1, 3),
    new Talk(3, 5),
    new Talk(2, 7),
    new Talk(1, 2),
    new Talk(3, 4),
    new Talk(5, 6),
    new Talk(7, 10),
]));
