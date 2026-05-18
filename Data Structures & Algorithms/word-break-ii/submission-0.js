class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {string[]}
     */
    wordBreak(s, wordDict) {
        const res = [];

        const dict = new Set(wordDict);

        const backtrack = (i, temp) => {
            if(i >= s.length) {
                res.push(temp.join(" "));
                return;
            }

            for(let j = i; j < s.length; ++j) {
                const sbs = s.substring(i, j + 1);
                if(dict.has(sbs)) {
                    temp.push(sbs)
                    backtrack(j + 1, temp);
                    temp.pop();
                }
            }
        }

        backtrack(0, []);

        return res;
    }
}
