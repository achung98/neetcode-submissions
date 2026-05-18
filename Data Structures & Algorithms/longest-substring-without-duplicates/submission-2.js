class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const seen = new Set();
        let t = 0;

        let max = 0;
        for(let l = 0; l < s.length; ++l) {
            while(seen.has(s[l])) seen.delete(s[t++]);
            seen.add(s[l]);
            max = Math.max(max, seen.size);
        }

        return max;
    }
}
