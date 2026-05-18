class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let longest = 0;
        let maxF = 0;
        let l = 0;
        const counts = {};

        for(let r = 0; r < s.length; ++r) {
            const rightChar = s[r];
            counts[rightChar] = (counts[rightChar] || 0) + 1;
            maxF = Math.max(maxF, counts[rightChar]);

            while(r - l + 1 - maxF > k) {
                const leftChar = s[l];
                counts[leftChar]--;
                l++;
            }

            longest = Math.max(longest, r - l + 1);
        }

        return longest;
    }
}
