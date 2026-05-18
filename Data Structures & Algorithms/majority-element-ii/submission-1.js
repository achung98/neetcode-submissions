class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let a = -1;
        let b = -1;

        let countA = 0;
        let countB = 0;

        for(const num of nums) {
            if(a === num) ++countA;
            else if(b === num) ++countB;
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

        countA = countB = 0;
        for (const num of nums) {
            if (num === a) ++countA;
            else if (num === b) ++countB;
        }

        const res = [];
        if (countA > Math.floor(nums.length / 3)) res.push(a);
        if (countB > Math.floor(nums.length / 3)) res.push(b);

        return res;
    }
}
