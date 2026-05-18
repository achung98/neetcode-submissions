class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        const prefixes = {0: 1};
        let prefixSum = 0;
        let res = 0;

        // Sum(l, r) = prefix[r] - prefix[l]
        // I want so find [how many prefixes[l] do I have contiguos before me, those are the subarrays that I can use to sum up to k
        // prefix[l] = prefix[r] - Sum(l, r) -> K
        for(let r = 0; r < nums.length; ++r) {
            prefixSum += nums[r];
            const l = prefixSum - k;
            res += prefixes[l] ?? 0;
            prefixes[prefixSum] = 1 + (prefixes[prefixSum] ?? 0);
        }
        console.log(prefixes)
        return res;
    }
}