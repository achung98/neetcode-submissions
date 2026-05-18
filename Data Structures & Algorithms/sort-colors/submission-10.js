class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let red = 0;
        let white = 0;
        let blue = nums.length - 1;

        while(white <= blue) {
            if(nums[white] === 2) {
                [nums[white], nums[blue]] = [nums[blue], nums[white]];
                --blue;
            } else if(nums[white] === 0) {
                [nums[white], nums[red]] = [nums[red], nums[white]];
                ++red;
                ++white;
            } else {
                ++white;
            }
        }

        return nums;
    }
}
