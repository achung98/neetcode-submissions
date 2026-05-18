class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let res = Infinity;
        let runningSum = 0;


        let l = 0;
        for(let r = 0; r < nums.length; ++r) {
            runningSum += nums[r];

            while(runningSum >= target) {
                res = Math.min(res, r - l + 1);
                runningSum -= nums[l];
                ++l;
            }
        }

        return res === Infinity ? 0 : res;
    }
}
