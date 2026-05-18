class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const len = nums.length;
        const res = Array(len).fill(1);

        for(let i = 1; i < len; ++i) {
            res[i] = nums[i - 1] * res[i - 1];
        }
        
        let last = nums[len - 1];
        for(let i = len - 2; i >= 0; --i) {
            res[i] *= last;
            last *= nums[i]
        }

        return res;
    }
}
