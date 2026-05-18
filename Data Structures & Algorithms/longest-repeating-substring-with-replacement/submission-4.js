class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let count = new Map();
        let l = 0;

        let res = 0;
        for(let r = 0; r < s.length; r++) {
            count.set(s[r], (count.get(s[r]) || 0) + 1);
            const max = Math.max(...count.values()); // max 26 iterations

            const len = r - l + 1;
            const canReplace = len - max <= k;

            if(canReplace) res = Math.max(res, len);
            else {
                count.set(s[l], (count.get(s[l]) || 0) - 1);
                ++l;
                res = Math.max(res, r - l + 1);
            }
        }

        return res;
    }
}
