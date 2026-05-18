class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let r = 0;
        let w = 0;
        let b = nums.length - 1;

        while(w <= b) {
            if(nums[w] === 2) {
                [nums[b], nums[w]] = [nums[w], nums[b]];
                --b;
            } else if(nums[w] === 0) {
                [nums[r], nums[w]] = [nums[w], nums[r]];
                ++r;
                ++w;
            } else {
                ++w;
            }
        }
    }
}
