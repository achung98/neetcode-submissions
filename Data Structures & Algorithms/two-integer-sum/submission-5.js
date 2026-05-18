class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const indexes = new Map();

        for(let i in nums) {
            const diff = target - nums[i];

            if(indexes.has(diff)) return [indexes.get(diff), Number(i)];

            indexes.set(nums[i], Number(i));
        }

        throw new Error("Unexpected behaviour");
    }
}
