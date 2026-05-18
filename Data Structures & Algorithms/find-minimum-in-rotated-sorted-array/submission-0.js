class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0;
        let r = nums.length - 1;

        while(l < r) {
            const mid = Math.floor(l + (r - l) / 2);
            console.log(nums[mid], nums[r])

            if(nums[l] > nums[r]) {
                if(nums[mid] < nums[r]) r = mid;
                else l = mid + 1;
            } else {
                if(nums[mid] < nums[r]) r = mid;
                else l = mid + 1;
            }
        }

        return nums[l];
    }
}
