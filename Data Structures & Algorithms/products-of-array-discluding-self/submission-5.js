class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const LEN = nums.length;
        const res = Array(LEN).fill(1);
        
        let prev = 1;
        for(let i = 0; i < LEN; ++i) {
            res[i] *= prev;
            prev *= nums[i];
            console.log(prev)
        }

        prev = nums[LEN - 1];
        for(let i = LEN - 2; i >= 0; --i) {
            res[i] *= prev;
            prev *= nums[i];
        }

        return res;
    }
}
