class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permuteUnique(nums) {
        const res = [];

        nums.sort((a, b) => a - b);

        const bt = (temp, visited) => {
            if(temp.length === nums.length) {
                res.push([...temp]);
                return;
            }

            for(let j = 0; j < nums.length; ++j) {
                if(visited[j] || !visited[j - 1] && nums[j] === nums[j - 1]) continue;

                temp.push(nums[j]);
                visited[j] = true;
                bt(temp, visited);
                temp.pop();
                visited[j] = false;
            }
        }

        bt([], []);

        return res;
    }
}
