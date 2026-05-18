class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = [];

        // It's good practice to sort nums if you want unique combinations
        // and to potentially optimize by pruning branches earlier,
        // though for basic correctness of this problem, it's not strictly needed
        // if your logic correctly handles choices.
        // nums.sort((a, b) => a - b);

        const backtrack = (startIndex, currentSum, currentCombination) => {
            // console.log(startIndex, currentSum, currentCombination);

            // 1. Base Case: Successful combination
            if (currentSum === target) {
                res.push([...currentCombination]); // Add a copy
                return;
            }

            // 2. Base Case: Pruning invalid paths
            if (currentSum > target || startIndex >= nums.length) {
                return;
            }

            // --- Decision Point for nums[startIndex] ---

            // Choice 1: Include nums[startIndex]
            // (Only if it doesn't immediately make the sum exceed the target -
            //  though the base case currentSum > target will also catch this later)
            if (currentSum + nums[startIndex] <= target) { // Check if we can add it
                currentCombination.push(nums[startIndex]);
                // IMPORTANT: For Combination Sum I, we can reuse the same number,
                // so the next call is still from `startIndex`.
                backtrack(startIndex, currentSum + nums[startIndex], currentCombination);
                currentCombination.pop(); // Backtrack: remove nums[startIndex] for the next choice
            }

            // Choice 2: Exclude nums[startIndex] (move to the next distinct number)
            // This call explores combinations that DO NOT use nums[startIndex] from this point onwards.
            backtrack(startIndex + 1, currentSum, currentCombination);
        };

        backtrack(0, 0, []);
        return res;
    }
}
