class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let a = -1;
        let countA = 0;

        let b = -1;
        let countB = 0;

        for(const num of nums) {
            if(num === a) {
                ++countA;
            } else if(num === b) {
                ++countB;
            } else if(countA === 0) {
                a = num;
                ++countA;
            } else if(countB === 0) {
                b = num;
                ++countB;
            } else {
                --countA;
                --countB;
            }
        }

        const res = [];
        const n = Math.floor(nums.length/3);

        countA = 0;
        countB = 0;
        for(const num of nums) {
            if(num === a) ++countA;
            else if(num === b) ++countB;
        }

        if(countA > n) res.push(a);
        if(countB > n) res.push(b);

        return res;
    }
}
