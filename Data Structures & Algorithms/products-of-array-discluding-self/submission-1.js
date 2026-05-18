class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const len = nums.length
        const res = new Array(len).fill(1);

        // Calculating all left multiplications
        let left = nums[0];
        for(let i = 1; i < len; i++) {
            res[i] *= left;
            left *= nums[i];
        }

        console.log(res)

        let right = nums[len - 1];
        for(let i = len - 2; i >= 0; i--) {
            res[i] *= right;
            right *= nums[i];
        }

        return res;
    }
}
