class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const res = Array(temperatures.length).fill(0);
        const stack = []; // [index, temp]

        for(const i in temperatures) {
            const temp = temperatures[i];

            while(stack.length > 0 && stack[stack.length - 1][1] < temp) {
                const prevTemp = stack.pop();
                res[prevTemp[0]] = i - prevTemp[0];
            }

            stack.push([i, temp]);
        }

        return res;
    }
}
