class Solution {
    /**
     * @param {number} k
     * @param {number} w
     * @param {number[]} profits
     * @param {number[]} capital
     * @return {number}
     */
    findMaximizedCapital(k, w, profits, capital) {
        const minCapital = new MinPriorityQueue(a => a[0]);
        const maxProfit = new MaxPriorityQueue(b => b[0]);

        for (let i = 0; i < capital.length; i++) {
            minCapital.enqueue([capital[i], i]);
        }

        for (let i = 0; i < k; i++) {
            while (!minCapital.isEmpty() && capital[minCapital.front()[1]] <= w) {
                const index = minCapital.dequeue()[1];
                maxProfit.enqueue([profits[index], index]);
            }
            if (maxProfit.isEmpty()) {
                break;
            }
            w += profits[maxProfit.dequeue()[1]];
        }

        return w;
    }
}
