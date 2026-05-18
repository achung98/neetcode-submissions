class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        const partition = (arr, low, high) => {
            let pivot = arr[high];

            let curr = low - 1;

            for (let runner = low; runner < high; ++runner) {
                if (arr[runner] < pivot) {
                    ++curr;
                    [arr[curr], arr[runner]] = [arr[runner], arr[curr]];
                }
            }

            
            [arr[curr + 1], arr[high]] = [arr[high], arr[curr + 1]];

            return curr + 1;
        };

        const quickSort = (arr, low, high) => {
            if (low >= high) return;
            let pi = partition(arr, low, high);

            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        };

        quickSort(nums, 0, nums.length - 1);

        return nums;
    }
}
