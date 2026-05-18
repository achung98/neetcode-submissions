class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const res = [];
        const len = candidates.length;

        candidates.sort((a, b) => a - b);

        const backtrack = (i, temp, sum) => {
            if(sum === target) {
                res.push([...temp]);
                return;
            }

            if(i >= len || sum > target) return;

            if(sum + candidates[i] <= target) {
                temp.push(candidates[i]);
                backtrack(i + 1, temp, sum + candidates[i]);
                temp.pop();
            }

            while(i + 1 < len && candidates[i] === candidates[i + 1]) ++i;

            backtrack(i + 1, temp, sum);
        }

        backtrack(0, [], 0);

        return res;
    }
}
