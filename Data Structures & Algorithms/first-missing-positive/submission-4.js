class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        const N = nums.length;

        for(let i = 0; i < N; ++i) {
            while(nums[i] > 0 && nums[i] < N && nums[i] !== nums[nums[i] - 1]) {
                [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
            }
        }

        for(let i = 0; i < N; ++i) {
            if(i + 1 !== nums[i]) return i + 1;
        }

        return N + 1;
    }
}
