class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;

        while (l <= r) {
            const mid = Math.floor((l + r) / 2);

            if (nums[mid] === target) {
                return mid;
            }

            // Right half is sorted
            if (nums[mid] <= nums[r]) {
                if (nums[mid] < target && target <= nums[r]) {
                    l = mid + 1;
                } else {
                    r = mid - 1;
                }
            }
            // Left half is sorted
            else {
                if (nums[l] <= target && target < nums[mid]) {
                    r = mid - 1;
                } else {
                    l = mid + 1;
                }
            }
        }

        return -1;
    }
}