import swap from './swap';
/**优先级队列***/
export default class PriorityQueue {
    constructor(compator, initialValues) {
        this.compator = compator;
        this.stack = [];
        if (Array.isArray(initialValues)) {
            for (let i = 0; i < initialValues.length; i++) {
                this.add(initialValues[i]);
            }
        }
    }
    size() {
        return this.stack.length;
    }
    add(x) {
        const { stack, compator } = this;
        stack.push(x);
        let currentIndex = stack.length - 1;
        let fatherIndex = Math.floor((currentIndex - 1) / 2);
        while (fatherIndex >= 0) {
            if (compator(stack[currentIndex], stack[fatherIndex])) {
                swap(stack, fatherIndex, currentIndex);
                currentIndex = fatherIndex;
                fatherIndex = Math.floor((currentIndex - 1) / 2);
            }
            else {
                break;
            }
        }
        return this;
    }
    peek() {
        return this.stack[0];
    }
    poll() {
        if (!this.isEmpty()) {
            const { stack, compator } = this;
            swap(stack, 0, stack.length - 1);
            let currentIndex = 0;
            let leftIndex = currentIndex * 2 + 1;
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
                swap(stack, leftIndex, currentIndex);
                currentIndex = leftIndex;
                leftIndex = currentIndex * 2 + 1;
            }
            return stack.pop();
        }
    }
    isEmpty() {
        return this.stack.length === 0;
    }
}
const queue = new PriorityQueue((a, b) => a < b, [
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
