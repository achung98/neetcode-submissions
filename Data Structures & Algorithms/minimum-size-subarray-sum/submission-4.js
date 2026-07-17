class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let res = Infinity;

        let i = 0;
        let sum = 0;
        for(let j = 0; j < nums.length; ++j) {
            sum += nums[j];

            while(sum >= target) {
                res = Math.min(res, j - i + 1);
                sum -= nums[i];
                ++i;
            }
        }

        return res === Infinity ? 0 : res;
    }
}
