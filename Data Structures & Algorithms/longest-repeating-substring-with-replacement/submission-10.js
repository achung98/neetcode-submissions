class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const counter = {};

        let l = 0;
        let currentMax = 0;
        let res = 0;

        for(let r = 0; r < s.length; ++r) {
            counter[s[r]] = 1 + (counter[s[r]] ?? 0);

            currentMax = Math.max(currentMax, counter[s[r]]);

            if(r - l + 1 - currentMax <= k)  res = Math.max(res, r - l + 1);

            while(r - l + 1 - currentMax > k) {
                counter[s[l]] = (counter[s[l]] ?? 0) - 1;
                ++l;
            }
        }

        return res;
    }
}
