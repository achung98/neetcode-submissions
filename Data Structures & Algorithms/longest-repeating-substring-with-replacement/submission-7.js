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
        let max = 0
        for(let r = 0; r < s.length; r++) {
            count.set(s[r], (count.get(s[r]) || 0) + 1);
            max = Math.max(max, count.get(s[r]));

            const len = r - l + 1;
            const canReplace = len - max <= k;

            if(canReplace) res = Math.max(res, len);
            else {
                count.set(s[l], (count.get(s[l]) || 0) - 1);
                ++l;
            }
        }

        return res;
    }
}
