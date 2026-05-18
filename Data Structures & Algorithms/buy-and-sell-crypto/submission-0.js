class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0;
        let len = prices.length;

        let profit = 0;
        for(let r = 1; r < len; r++) {
            if(prices[r] < prices[l]) l = r;
            else {
                profit = Math.max(profit, prices[r] - prices[l]);
            }
        }

        return profit;
    }
}
