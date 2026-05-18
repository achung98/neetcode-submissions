class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let left = 0;
        let right = nums.length - 1;

        while(left <= right) {
            if(nums[left] === val) {
                const temp = nums[right];
                nums[right] = nums[left];
                nums[left] = temp;
                --right;
            } else {
                ++left;
            }
        }

        return left;
    }
}
