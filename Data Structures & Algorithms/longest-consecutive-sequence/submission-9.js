class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const seen = new Set(nums);

        let res = 0;
        for(let num of nums) {
            if(!seen.has(num - 1)) {
                let n = num;
                let temp = 1;
                while(seen.has(++n)) ++temp;

                res = Math.max(res, temp);
            }
        }

        return res;
    }
}
