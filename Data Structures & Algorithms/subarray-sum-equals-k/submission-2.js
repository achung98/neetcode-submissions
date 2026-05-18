class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        const counter = {0: 1};

        let prefixSum = 0;
        let res = 0;

        for(const num of nums) {
            prefixSum += num;
            let complement = prefixSum - k;
            res += counter[complement] ?? 0;
            counter[prefixSum] = 1 + (counter[prefixSum] ?? 0);
        }

        return res;
    }
}
