export default class Stack {
    constructor() {
        this.stack = [];
    }
    pop() {
        return this.stack.pop();
    }
    push(x) {
        this.stack.push(x);
        return this;
    }
    isEmpty() {
        return this.stack.length < 1;
    }
    peek() {
        return this.stack[this.stack.length - 1];
    }
    size() {
        return this.stack.length;
    }
}
