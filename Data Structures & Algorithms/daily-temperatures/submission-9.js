class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const len = temperatures.length;
        const res = Array(len).fill(0);

        for(let i = len - 2; i >= 0; --i) {
            if(temperatures[i] < temperatures[i + 1]) {
                res[i] = 1;
                continue;
            }

            let step = res[i + 1] + i + 1;
            while(step < len && temperatures[step] <= temperatures[i]) {
                if(res[step] === 0) step = len;
                else step += res[step];
            }

            res[i] = step === len ? 0 : step - i;
        }

        return res;
    }
}
