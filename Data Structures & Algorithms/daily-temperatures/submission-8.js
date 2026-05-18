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

            let step = res[i + 1] + i + 1;
            while(step < LEN && temperatures[step] <= temperatures[i]) {
                if(res[step] === 0) step = LEN;
                else step += res[step];
            }

            res[i] = step === LEN ? 0 : step - i;
        }

        return res;
    }
}
