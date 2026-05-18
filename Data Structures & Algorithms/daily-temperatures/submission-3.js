class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = [];
        const res = Array(temperatures.length).fill(0);

        for(let i = 0; i < temperatures.length; ++i) {
            const curTemp = temperatures[i];

            while(stack.length && stack[stack.length - 1][0] < curTemp) {
                const dayTemp = stack.pop();
                res[dayTemp[1]] = i - dayTemp[1];
            }

            stack.push([curTemp, i]);
        }

        return res;
    }
}
