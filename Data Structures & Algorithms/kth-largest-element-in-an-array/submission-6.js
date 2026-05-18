class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const len = nums.length;

        const partition = (l, r) => {
            const pivot = nums[r];

            let i = l;
            for(let j = i; j < r; ++j) {
                if(nums[j] < pivot) {
                    [nums[i], nums[j]] = [nums[j], nums[i]];
                    ++i;
                }
            }

            [nums[i], nums[r]] = [nums[r], nums[i]];

            return i;
        }

        const quickSelect = (l, r) => {
            if(l >= r) return;

            const i = partition(l, r);

            if(i === len - k) return;
            else if(i < len - k) quickSelect(i + 1, r);
            else quickSelect(l, i - 1);
        }

        quickSelect(0, len - 1);

        return nums[len - k];
    }
}
