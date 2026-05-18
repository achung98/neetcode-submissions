class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permuteUnique(nums) {
        const res = [];
        const visit = new Array(nums.length).fill(false);
        const perm = [];
        nums.sort((a, b) => a - b);

        const dfs = () => {
            if (perm.length === nums.length) {
                res.push([...perm]);
                return;
            }

            for (let i = 0; i < nums.length; i++) {
                if (visit[i] || (i > 0 && nums[i] === nums[i - 1] && !visit[i - 1]))
                    continue;
                
                visit[i] = true;
                perm.push(nums[i]);
                dfs();
                visit[i] = false;
                perm.pop();
            }
        };

        dfs();
        return res;
    }
}