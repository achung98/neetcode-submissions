class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const res = [];

        const bt = (temp, visited) => {
            if(temp.length === nums.length) {
                res.push([...temp]);
                return;
            }

            for(let j = 0; j < nums.length; ++j) {
                if(!visited[j]) {
                    temp.push(nums[j]);
                    visited[j] = true;
                    bt(temp, visited);
                    temp.pop();
                    visited[j] = false;
                }
            }
        }

        bt([], []);

        return res;
    }
}
