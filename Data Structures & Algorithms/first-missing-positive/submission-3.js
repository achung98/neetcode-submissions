class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        const LEN = nums.length
        for(let i = 0; i < LEN; ++i) {
            while(nums[i] > 0 && nums[i] < LEN && nums[nums[i] - 1] !== nums[i]) {
                [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
            }
        }

        for(let i = 0; i < LEN; ++i) {
            if(i + 1 !== nums[i]) return i + 1;
        }

        return LEN + 1;
    }
}
