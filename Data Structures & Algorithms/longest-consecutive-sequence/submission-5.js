class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const seen = new Set(nums);
        let longest = 0;

        for(const num of nums) {
            //Check if I'm the minimum
            if(!seen.has(num - 1)) {
                let temp = 1;
                while(seen.has(num + temp)) {
                    ++temp;
                }
                longest = Math.max(longest, temp);
            }
        }

        return longest;
    }
}
