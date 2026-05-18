class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const LEN = temperatures.length;
        const res = Array(LEN).fill(0);

        for(let i = LEN - 2; i >= 0; --i) {
            if(temperatures[i] < temperatures[i + 1]) {
                res[i] = 1;
                continue;
            }
            
            let nextDay = i + res[i + 1] + 1;
            while(nextDay < LEN && temperatures[i] >= temperatures[nextDay]) {
                if(res[nextDay] === 0) {
                    nextDay = LEN;
                } else {
                    nextDay += res[nextDay];
                }
            }

            res[i] = nextDay === LEN ? 0 : nextDay - i;
        }

        return res;
    }
}
