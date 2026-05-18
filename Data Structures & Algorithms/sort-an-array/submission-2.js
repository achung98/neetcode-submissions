class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        const partition = (l ,r) => {
            let pivot = nums[r];

            let curr = l - 1;

            for(let runner = l; runner < r; ++runner) {
                if(nums[runner] < pivot) {
                    ++curr;
                    [nums[runner], nums[curr]] = [nums[curr], nums[runner]];
                }
            }

            [nums[curr + 1], nums[r]] = [nums[r], nums[curr + 1]];

            return curr + 1;
        }

        const quickSort = (l, r) => {
            if(l >= r) return;

            let i = partition(l, r);

            quickSort(l, i - 1);
            quickSort(i + 1, r);
        }

        quickSort(0, nums.length - 1);

        return nums;
    }
}
