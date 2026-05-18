class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const seen = new Set();

        let l = 0;
        let maxLen = 0;

        for(let r = 0; r < s.length; ++r) {
            const c = s[r];
            while(seen.has(c)) {
                seen.delete(s[l]);
                ++l;
            }
            seen.add(c);
            maxLen = Math.max(maxLen, r - l + 1);
        }

        return maxLen;
    }
}
