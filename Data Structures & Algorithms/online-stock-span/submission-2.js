class StockSpanner {
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} price
     * @return {number}
     */
    next(price) {
        let days = 1;

        while(this.stack.length && this.stack.at(-1)[1] <= price) {
            const prevPrice = this.stack.pop();
            days += prevPrice[0];
        }

        this.stack.push([days, price]);

        return days;
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
