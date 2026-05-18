class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const tlen = temperatures.length
        const res = Array(tlen).fill(0);

        for(let i = tlen - 2; i >= 0; i--) {
            if(temperatures[i] < temperatures[i + 1]) {
                res[i] = 1;
                continue;
            }


            let step = i + res[i + 1] + 1;
            while(step < tlen && temperatures[step] <= temperatures[i]) {
                if(res[step] === 0) {
                    step = tlen; ;
                } else {
                    step += res[step];
                }
            }

            res[i] = step < tlen ? step - i : 0;
        }

        return res;
    }
}
