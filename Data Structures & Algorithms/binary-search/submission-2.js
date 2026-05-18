class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length;

        while(l < r) {
            const mid = Math.floor(l + (r - l) / 2);

            if(nums[mid] > target) r = mid;
            else l = mid + 1;
        }

        return nums[l - 1] === target ? l - 1 : -1;
    }
}
