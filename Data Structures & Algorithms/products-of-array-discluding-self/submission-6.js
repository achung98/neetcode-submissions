class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const LEN = nums.length;
        const res = Array(LEN).fill(1);

        let prod = 1;
        for(let i = 0; i < LEN; ++i) {
            res[i] *= prod;
            prod *= nums[i];
        }

        prod = nums[LEN - 1];
        for(let i = LEN - 2; i >= 0; --i) {
            res[i] *= prod;
            prod *= nums[i];
        }

        return res;
    }
}
