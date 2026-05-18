class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const len = nums.length;
        const res = Array(len).fill(1);

        let prod = 1;
        for(let i = 0; i < len; ++i) {
            res[i] *= prod;
            prod *= nums[i];
        }

        prod = nums[len - 1];
        for(let i = len - 2; i >= 0; --i) {
            res[i] *= prod;
            prod *= nums[i];
        }

        return res;
    }
}
