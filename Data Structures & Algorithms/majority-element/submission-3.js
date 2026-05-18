class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let candidate = -1;
        let count = 0;

        for(const num of nums) {
            if(count === 0) {
                ++count;
                candidate = num;
            } else if(candidate === num) {
                ++count;
            } else {
                --count;
            }
        }

        return candidate;
    }
}
