"use strict";
exports.__esModule = true;
var swap_1 = require("./swap");
/**优先级队列***/
var PriorityQueue = /** @class */ (function () {
    function PriorityQueue(compator, initialValues) {
        this.compator = compator;
        this.stack = [];
        if (Array.isArray(initialValues)) {
            for (var i = 0; i < initialValues.length; i++) {
                this.add(initialValues[i]);
            }
        }
    }
    PriorityQueue.prototype.size = function () {
        return this.stack.length;
    };
    PriorityQueue.prototype.add = function (x) {
        var _a = this, stack = _a.stack, compator = _a.compator;
        stack.push(x);
        var currentIndex = stack.length - 1;
        var fatherIndex = Math.floor((currentIndex - 1) / 2);
        while (fatherIndex >= 0) {
            if (compator(stack[currentIndex], stack[fatherIndex])) {
                swap_1["default"](stack, fatherIndex, currentIndex);
                currentIndex = fatherIndex;
                fatherIndex = Math.floor((currentIndex - 1) / 2);
            }
            else {
                break;
            }
        }
        return this;
    };
    PriorityQueue.prototype.peek = function () {
        return this.stack[0];
    };
    PriorityQueue.prototype.poll = function () {
        if (!this.isEmpty()) {
            var _a = this, stack = _a.stack, compator = _a.compator;
            swap_1["default"](stack, 0, stack.length - 1);
            var currentIndex = 0;
            var leftIndex = currentIndex * 2 + 1;
            while (leftIndex < stack.length - 1) {
                leftIndex =
                    leftIndex + 1 < stack.length - 1 &&
                        compator(stack[leftIndex + 1], stack[leftIndex])
                        ? leftIndex + 1
                        : leftIndex;
                leftIndex = compator(stack[leftIndex], stack[currentIndex])
                    ? leftIndex
                    : currentIndex;
                if (leftIndex == currentIndex)
                    break;
                swap_1["default"](stack, leftIndex, currentIndex);
                currentIndex = leftIndex;
                leftIndex = currentIndex * 2 + 1;
            }
            return stack.pop();
        }
    };
    PriorityQueue.prototype.isEmpty = function () {
        return this.stack.length === 0;
    };
    return PriorityQueue;
}());
exports["default"] = PriorityQueue;
var queue = new PriorityQueue(function (a, b) { return a < b; }, [
    10,
    20,
    6,
    5,
    1,
    8,
    7,
]); /*
queue.add(0)
console.log(queue.stack)
console.log(queue.poll())
console.log(queue.stack)
console.log(queue.poll())
console.log(queue.stack)
console.log(queue.poll())
console.log(queue.stack)
console.log(queue.poll())
console.log(queue.stack)
console.log(queue.poll())
console.log(queue.stack)
console.log(queue.poll())
 */
