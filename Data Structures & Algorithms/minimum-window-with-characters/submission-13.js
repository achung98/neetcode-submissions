class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const tMap = {};

        for(let c of t) {
            tMap[c] = 1 + (tMap[c] ?? 0);
        }

        const toMatch = Object.keys(tMap).length;
        let currMatch = 0;

        let res = "";

        let l = 0;
        for(let r = 0; r < s.length; ++r) {
            const char = s[r];
            if(!(char in tMap)) continue;

            --tMap[char];

            if(tMap[char] === 0) ++currMatch;

            while(toMatch === currMatch) {
                const tempRes = s.substring(l, r + 1);
                res = res === "" ? tempRes : res.length < tempRes.length ? res : tempRes;

                const lChar = s[l];

                if(lChar in tMap) {
                    if(tMap[lChar] === 0) --currMatch;
                    ++tMap[lChar];
                }

                ++l;
            }
        }

        return res;
    }
}
