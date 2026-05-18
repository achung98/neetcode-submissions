class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numPos = {};

        for(let i = 0; i < nums.length; ++i) {
            const diff = target - nums[i];

            if(diff in numPos) return [numPos[diff], i];

            numPos[nums[i]] = i;

        }

        throw new Error("This should not happen");
    }
}
