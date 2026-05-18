class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let count = 0;
        let curr = 0;

        for(let num of nums) {
            if(count === 0) curr = num;

            if(curr === num) ++count;
            else --count;
        }

        return curr;
    }
}
