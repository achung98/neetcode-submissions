class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const len = nums.length;
        const res = Array(len).fill(1);

        for(let i = 1; i < len; ++i) {
            res[i] = res[i - 1] * nums[i - 1];
        }

        let prod = nums[len - 1];
        for(let j = len - 2; j >= 0; --j) {
            res[j] *= prod;
            prod *= nums[j];
        }

        return res;
    }
}
