class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const temps = []; // [temp, index];
        const res = Array(temperatures.length).fill(0);

        for(const i in temperatures) {
            const temp = temperatures[+i];
            while(temps.length !== 0 && temps[temps.length - 1][0] < temp) {
                const [t, day] = temps.pop();
                res[day] = i - day;
            }

            temps.push([temp, i]);
        }

        return res;
    }
}
