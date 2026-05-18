class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const count = {};

        let max = 0;
        let res = 0;
        
        let l = 0;
        for(let r = 0; r < s.length; ++r) {
            const ch = s[r];
            count[ch] = 1 + (count[ch] ?? 0);

            max = Math.max(max, count[ch]);

            if(r - l + 1 - max <= k) res = Math.max(res, r - l + 1);
            else {
                count[s[l]] = (count[s[l]] ?? 0) - 1;
                ++l;
            }
        }

        return res;
    }
}
