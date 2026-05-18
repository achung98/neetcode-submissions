class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const res = [];

        const helper = (par, open, close) => {
            if(open === n && open === close) {
                res.push(par);
                return;
            }

            if(open < n) helper(par + "(", open + 1, close);

            if(close < open) helper(par + ")", open, close + 1);
        }

        helper("", 0, 0);

        return res;
    }
}
