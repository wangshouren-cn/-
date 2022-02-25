"use strict";
exports.__esModule = true;
var Queue = /** @class */ (function () {
    function Queue() {
        this.stack = [];
    }
    //返回队列头元素并删除
    Queue.prototype.poll = function () {
        return this.stack.shift();
    };
    //入队列
    Queue.prototype.add = function (x) {
        this.stack.push(x);
        return this;
    };
    Queue.prototype.addFirst = function (x) {
        this.stack.unshift(x);
        return this;
    };
    //返回队列头元素
    Queue.prototype.peek = function () {
        return this.stack[0];
    };
    Queue.prototype.size = function () {
        return this.stack.length;
    };
    Queue.prototype.isEmpty = function () {
        return this.stack.length < 1;
    };
    Queue.prototype.peekLast = function () {
        return this.stack[this.stack.length - 1];
    };
    Queue.prototype.pollLast = function () {
        return this.stack.pop();
    };
    return Queue;
}());
exports["default"] = Queue;
