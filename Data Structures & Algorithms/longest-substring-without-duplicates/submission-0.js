class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const seen = new Set();
        let l = 0;
        
        let max = 0;
        for(let r = 0; r < s.length; r++) {
            const ch = s.charAt(r)
            if(!seen.has(ch)) {
                seen.add(ch);
                max = Math.max(max, r - l + 1);
            } else {
                while(seen.has(ch)) {
                    seen.delete(s.charAt(l));
                    ++l;
                }
                seen.add(ch);
            }
        }
        return max;
    }
}
