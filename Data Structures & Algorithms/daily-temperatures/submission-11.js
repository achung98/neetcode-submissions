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

            let step = i + res[i + 1] + 1;
            let notFound = false;

            while(step < len && temperatures[i] >= temperatures[step]) {
                if(res[step] === 0) {
                    notFound = true;
                    break;
                }
                step += res[step];
            }

            res[i] = notFound ? 0 : step - i;

            notFound = false;
        }

        return res;
    }
}
