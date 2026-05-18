class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        let b = 0;

        for(let s = 0; s < prices.length; ++s) {
            let potProfit = prices[s] - prices[b];
            if(potProfit < 0) b = s;
            else profit = Math.max(profit, potProfit);
        }

        return profit;
    }
}
