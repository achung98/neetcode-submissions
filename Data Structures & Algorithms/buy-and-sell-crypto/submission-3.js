class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0;

        let profit = 0;

        for(let r = 1; r < prices.length; ++r) {
            if(prices[l] < prices[r]) {
                const total = prices[r] - prices[l];
                profit = Math.max(profit, total);
            } else {
                l = r;
            }
        }

        return profit;
    }
}