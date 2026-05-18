class MyQueue {
    constructor() {
        this.s1 = [];
        this.s2 = [];
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.s1.push(x);
    }

    /**
     * @return {number}
     */
    pop() {
        if (this.s2.length === 0) {
            while (this.s1.length > 0) {
                this.s2.push(this.s1.pop());
            }
        }
        return this.s2.pop();
    }

    /**
     * @return {number}
     */
    peek() {
        if (this.s2.length === 0) {
            while (this.s1.length > 0) {
                this.s2.push(this.s1.pop());
            }
        }
        return this.s2[this.s2.length - 1];
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.s1.length === 0 && this.s2.length === 0;
    }
}