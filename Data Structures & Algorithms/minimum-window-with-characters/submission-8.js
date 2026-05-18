class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const tCount = {};
        for (let ch of t) {
            tCount[ch] = 1 + (tCount[ch] ?? 0);
        }
        const LEN = Object.keys(tCount).length;

        let matches = 0;
        let l = 0;
        let res = "";
        for (let r = 0; r < s.length; ++r) {
            if (s[r] in tCount) {
                --tCount[s[r]];

                if (tCount[s[r]] === 0) ++matches;
            }

            while (matches === LEN) {
                const newMatch = s.slice(l, r + 1);
                res = res === "" ? newMatch : res.length < newMatch.length ? res : newMatch;

                if (s[l] in tCount) {
                    if (tCount[s[l]] === 0) --matches;
                    ++tCount[s[l]];
                }

                ++l;
            }
        }

        return res;
    }
}
