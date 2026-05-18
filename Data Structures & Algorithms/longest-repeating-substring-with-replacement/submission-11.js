class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const counter = {};

        let maxCount = 0;
        let res = 0;

        let l = 0;
        for(let r = 0; r < s.length; ++r) {
            const ch = s[r];
            counter[ch] = 1 + (counter[ch] ?? 0);
            maxCount = Math.max(maxCount, counter[ch]);

            if(r - l + 1 - maxCount <= k) res = Math.max(res, r - l + 1);

            while(r - l + 1 - maxCount > k) {
                --counter[s[l]];
                ++l;
            }
        }

        return res;
    }
}
