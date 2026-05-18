class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const res = [];

        const gen = (curr, nOpen, nClosed) => {
            if(nOpen === n && nClosed === nOpen) res.push(curr);

            if(nOpen < n) gen(curr + "(", nOpen + 1, nClosed);

            if(nClosed < nOpen) gen(curr + ")", nOpen, nClosed + 1);
        }

        gen("", 0, 0);

        return res;
    }
}
