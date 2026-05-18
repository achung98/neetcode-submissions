class Solution {
    /**
     * @param {number[]} matchsticks
     * @return {boolean}
     */
    makesquare(matchsticks) {
        const sum = matchsticks.reduce((prev, curr) => prev + curr, 0);

        if(sum % 4 !== 0) return false;

        const min = sum / 4;

        matchsticks.sort((a, b) => b - a);

        const sides = Array(4).fill(0);
        const backtrack = (i) => {
            if(i === matchsticks.length) return true;

            for(let j = 0; j < 4; ++j) {
                if(sides[j] + matchsticks[i] <= min) {
                    sides[j] += matchsticks[i];
                    const res = backtrack(i + 1);
                    if(res) return true;
                    sides[j] -= matchsticks[i];
                }
            }

            return false;
        }

        return backtrack(0);
    }
}
