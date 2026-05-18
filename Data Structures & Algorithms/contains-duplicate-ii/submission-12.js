class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        const seen = new Set();

        let l = 0;
        for(let r = 0; r < nums.length; ++r) {
            if(r - l > k) {
                seen.delete(nums[l]);
                ++l;
            }

            if(r - l <= k && seen.has(nums[r])) return true;

            seen.add(nums[r]);
        }

        return false;
    }
}
