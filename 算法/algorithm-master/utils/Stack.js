"use strict";
exports.__esModule = true;
var Stack = /** @class */ (function () {
    function Stack() {
        this.stack = [];
    }
    Stack.prototype.pop = function () {
        return this.stack.pop();
    };
    Stack.prototype.push = function (x) {
        this.stack.push(x);
        return this;
    };
    Stack.prototype.isEmpty = function () {
        return this.stack.length < 1;
    };
    Stack.prototype.peek = function () {
        return this.stack[this.stack.length - 1];
    };
    Stack.prototype.size = function () {
        return this.stack.length;
    };
    return Stack;
}());
exports["default"] = Stack;
