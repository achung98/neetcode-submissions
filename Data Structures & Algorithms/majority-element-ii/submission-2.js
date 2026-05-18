class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let a = 0;
        let countA = 0;

        let b = 0;
        let countB = 0;

        for(const num of nums) {
            if(num === a) ++countA;
            else if(num === b) ++countB;
            else if(countA === 0) {
                a = num;
                ++countA;
            }
            else if(countB === 0) {
                b = num;
                ++countB;
            }
            else {
                --countA;
                --countB;
            }
        }

        const res = [];

        countA = 0;
        countB = 0;
        for(const num of nums) {
            if(num === a) ++countA;
            if(num === b) ++countB;
        }

        const N = Math.floor(nums.length/3)
        if(countA > N) res.push(a);
        if(countB > N) res.push(b);

        return res;
    }
}
