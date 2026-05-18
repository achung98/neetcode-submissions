class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        const res = [];

        nums.sort((a, b) => a - b);

        const bt = (i, temp) => {
            res.push([...temp])

            for(let j = i; j < nums.length; ++j) {
                if(j > i && nums[j] === nums[j - 1]) continue;

                temp.push(nums[j]);
                bt(j + 1, temp);
                temp.pop();
            }
        }

        bt(0, []);

        return res;
    }
}
