class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const res = [];

        const helper = (cur, open, closed) => {
            if(open === n && open === closed) {
                res.push(cur);
                return;
            }

            if(open < n) helper(cur + "(", open + 1, closed);
            
            if(closed < open) helper(cur + ")", open, closed + 1);
        }

        helper("", 0, 0);

        return res;
    }
}
