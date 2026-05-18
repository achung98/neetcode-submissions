class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const res = [];

        const backtrack = (temp, picked) => {
            if(temp.length === nums.length) {
                res.push([...temp]);
                return;
            }
            
            for(let s = 0; s < nums.length; ++s) {
                if(!picked[s]) {
                    temp.push(nums[s]);
                    picked[s] = true;
                    backtrack(temp, picked);
                    temp.pop();
                    picked[s] = false;
                }
            }
        }

        backtrack([], []);

        return res;
    }
}
