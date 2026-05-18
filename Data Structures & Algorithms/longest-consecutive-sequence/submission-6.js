class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let res = 0;
        const seen = new Set(nums);

        for(const num of nums) {
            if(!seen.has(num - 1)) {
                let n = num;
                let temp = 0
                while(seen.has(n++)) ++temp;

                res = Math.max(res, temp);
            }
        }
        return res;
    }
}
