class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const res = [];

        candidates.sort((a, b) => a - b);

        const bt = (i, temp, currSum) => {
            if(currSum === target) {
                res.push([...temp]);
                return;
            }

            if(currSum > target) return;

            for(let j = i; j < candidates.length; ++j) {
                if (j > i && candidates[j] === candidates[j - 1]) continue;
                temp.push(candidates[j]);
                bt(j + 1, temp, currSum + candidates[j]);
                temp.pop();
            }
        }

        bt(0, [], 0);

        return res;
    }
}
