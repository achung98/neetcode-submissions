class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const existing = new Set(nums);

        let longest = 0
        for(let num of nums) {
            let curr = 1
            while(existing.has(num + curr)) {
                ++curr;
            }
            longest = Math.max(longest, curr);
        }

        return longest;
    }
}
