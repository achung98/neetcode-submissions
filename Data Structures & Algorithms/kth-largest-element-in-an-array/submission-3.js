class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const len = nums.length;
        const target = len - k; // Convert to kth smallest

        const partition = (l, r) => {
            const pivot = nums[r];
            let i = l;
            for (let j = l; j < r; ++j) {
                if (nums[j] < pivot) {
                    [nums[i], nums[j]] = [nums[j], nums[i]];
                    ++i;
                }
            }
            [nums[i], nums[r]] = [nums[r], nums[i]];
            return i;
        };

        const quickSelect = (l, r) => {
            if (l >= r) return;
            const i = partition(l, r);
            if (i === target) return;
            else if (i < target) quickSelect(i + 1, r);
            else quickSelect(l, i - 1); // Fix here
        };

        quickSelect(0, len - 1);
        return nums[target];
    }
}

