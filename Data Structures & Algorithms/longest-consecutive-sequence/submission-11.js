class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const seen = new Set(nums);

        let res = 0;

        for(let num of nums) {
            let curr = num;
            let temp = 1;
            while(seen.has(curr - 1)) {
                ++temp;
                --curr;
            }

            res = Math.max(res, temp);
        }

        return res;
    }
}
