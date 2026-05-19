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
                return true;
            }

            if (nums[l] === nums[mid] && nums[mid] === nums[r]) {
                ++l;
                --r;
                continue;
            }

            // Right half is sorted
            if (nums[mid] <= nums[r]) {
                // Is the target inside the right half sorted ? Meaning if it's in between mid and r
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

        return false;
    }
}
