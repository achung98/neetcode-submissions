class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        const res = [];

        const backtrack = (i, temp) => {
            if(temp.length === k) {
                res.push([...temp]);
                return;
            }

            if(i > n) return;

            temp.push(i);
            backtrack(i + 1, temp);
            temp.pop();

            backtrack(i + 1, temp);
        }

        backtrack(1, []);

        return res;
    }
}
