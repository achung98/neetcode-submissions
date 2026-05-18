class MinStack {
    stack = [];
    min = [];

    constructor() {}

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        if(this.min.length === 0) this.min.push(val);
        else if(this.min[this.min.length - 1] < val) this.min.push(this.min[this.min.length - 1]);
        else this.min.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.min.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min[this.min.length - 1];
    }
}
