class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        const partition = (l, r) => {
            const pivot = nums[r];

            let i = l;

            for(let runner = l; runner < r; ++runner) {
                if(pivot > nums[runner]) {
                    [nums[runner], nums[i]] = [nums[i], nums[runner]];
                    ++i;
                }
            }

            [nums[r], nums[i]] = [nums[i], nums[r]];

            return i;
        }

        const quickSort = (l, r) => {
            if(l >= r) return;

            let i = partition(l, r);

            quickSort(i + 1, r);
            quickSort(l, i - 1);
        }

        quickSort(0, nums.length - 1);

        return nums;
    }
}
