class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        const seen = {0: 1};
        
        let prefixSum = 0;
        let res = 0;
        for(const num of nums) {
            prefixSum += num;
            const complement = prefixSum - k;
            res += seen[complement] ?? 0;
            seen[prefixSum] = 1 + (seen[prefixSum] ?? 0);
        }

        return res;
    }
}
