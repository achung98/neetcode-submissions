class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        // The range must be between 1...n + 1 because if 1...n exists, answer is n+1
        // Otherwise, the missing number is between 1...n

        // Cylic sort to put the numbers in it's correct position
        // Ignore negatives and zeroes. If swapping number is already in it's position, ignore as well
        // Iterate from 1 to n+1, first number missing is the answer

        const n = nums.length

        for(let i = 0; i < n; ++i) {
            while(nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
                [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
            }
        }

        for(let i = 0; i < n; ++i) {
            if(nums[i] !== i + 1) return i + 1;
        }

        return n + 1;
    }
}
