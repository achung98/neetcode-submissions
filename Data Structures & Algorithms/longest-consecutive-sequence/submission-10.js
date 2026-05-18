class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const seen = new Set(nums);
        
        let longest = 0;
        for(let i = 0; i < nums.length; ++i) {
            if(!seen.has(nums[i] - 1)) {
                let tempNum = nums[i];
                let tempLongest = 0;
                while(seen.has(tempNum)) {
                    ++tempNum;
                    ++tempLongest;
                }

                longest = Math.max(longest, tempLongest);
            }
        }

        return longest;
    }
}
