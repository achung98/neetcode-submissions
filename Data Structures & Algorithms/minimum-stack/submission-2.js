class MinStack {
    constructor() {
        this.min = [];
        this.stack = [];
        this.len = 0;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        if(this.len === 0 || this.min[this.len - 1] > val) this.min.push(val);
        else this.min.push(this.min[this.len - 1]);

        ++this.len;
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.min.pop();

        --this.len;
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.len - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min[this.len - 1];
    }
}
