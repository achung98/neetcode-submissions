class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        const res = [];

        const bt = (i, temp) => {
            if(temp.length === k) {
                res.push([...temp]);
                return;
            }

            if(i > n) return;

            temp.push(i);
            bt(i + 1, temp);
            temp.pop();

            bt(i + 1, temp)
        }

        bt(1, []);

        return res;
    }
}
