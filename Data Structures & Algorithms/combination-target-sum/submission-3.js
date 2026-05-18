class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = [];

        nums.sort((a, b) => a - b);

        const bt = (i, temp, tempTot) => {
            if(tempTot === target) {
                res.push([...temp]);
                return;
            }

            for(let j = i; j < nums.length; ++j) {
                if(tempTot + nums[j] > target) return;

                temp.push(nums[j]);
                bt(j, temp, tempTot + nums[j]);
                temp.pop();
            }
        }

        bt(0, [], 0);

        return res;
    }
}
