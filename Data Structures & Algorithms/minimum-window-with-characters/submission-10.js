class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const count = {};
        for(const ch of t) {
            count[ch] = 1 + (count[ch] ?? 0);
        }

        const expectedMatches = Object.keys(count).length;

        let res = "";

        let matches = 0;

        let l = 0;
        for(let r = 0; r < s.length; ++r) {
            if(s[r] in count) {
                --count[s[r]];

                if(count[s[r]] === 0) ++matches;
            }

            while(matches === expectedMatches) {
                const newRes = s.substring(l, r + 1);
                res = res === "" || newRes.length < res.length ? newRes : res;

                if(s[l] in count) {
                    if(count[s[l]] === 0) --matches;
                    
                    ++count[s[l]];
                }

                ++l;
            }
        }

        return res;
    }
}
