class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const seen = new Set(nums);

        let res = 0;
        for(const num of nums) {
            if(!seen.has(num - 1)) {
                let runner = num;
                let temp = 1;
                while(seen.has(runner + 1)) {
                    ++temp;
                    ++runner;
                }

                res = Math.max(res, temp);
            }
        }

        return res;
    }
}
