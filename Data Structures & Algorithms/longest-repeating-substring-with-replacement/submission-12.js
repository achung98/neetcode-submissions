class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const counter = {};
        let max = 0;
        let res = 0;

        let l = 0;
        for(let r = 0; r < s.length; ++r) {
            counter[s[r]] = 1 + (counter[s[r]] ?? 0);

            max = Math.max(max, counter[s[r]]);

            if(r - l + 1 - max <= k) res = Math.max(res, r - l + 1);

            while(r - l + 1 - max > k) {
                --counter[s[l]];
                ++l;
            }
        }

        return res;
    }
}
