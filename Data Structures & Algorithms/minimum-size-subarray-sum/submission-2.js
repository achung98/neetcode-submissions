class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let res = Infinity;
        let count = 0;

        let l = 0;
        for(let r = 0; r < nums.length; ++r) {
            count += nums[r];
            
            while(count >= target) {
                res = Math.min(res, r - l + 1);
                count -= nums[l];
                ++l;
            }
        }

        return res === Infinity ? 0 : res;
    }
}
