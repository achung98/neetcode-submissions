class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        const res = [[]];

        nums.sort((a, b) => a - b);

        const backtrack = (i, temp) => {
            if(i >= nums.length) return;

            temp.push(nums[i]);
            res.push([...temp]);
            backtrack(i + 1, temp);
            temp.pop();

            while(i + 1 < nums.length && nums[i] === nums[i + 1]) ++i;

            backtrack(i + 1, temp);
        }

        backtrack(0, []);

        return res;
    }
}
