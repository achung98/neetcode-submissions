class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     * 
     * The key insight is that we can capture every upward price movement. 
     * If the price goes up from day i to day i+1, we can always "buy" on day i and "sell" on day i+1 to capture that profit. 
     * We do not need to track actual transactions because consecutive gains are equivalent to holding through multiple days. 
     * For example, buying at 1, holding through 3, 5, and selling at 6 gives the same profit as buying at 1, selling at 3, 
     * buying at 3, selling at 5, buying at 5, and selling at 6.
     */
    maxProfit(prices) {
        let profit = 0;

        for(let i = 1; i < prices.length; ++i) {
            if(prices[i] > prices[i - 1]) {
                profit += prices[i] - prices[i - 1];
            }
        }

        return profit;
    }
}
