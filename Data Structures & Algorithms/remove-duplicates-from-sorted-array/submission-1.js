class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let l = 1;

        for(let runner = 1; runner < nums.length; ++runner) {
            if(nums[runner - 1] !== nums[runner]) {
                nums[l] = nums[runner];
                ++l;
            }
        }

        return l;
    }
}
