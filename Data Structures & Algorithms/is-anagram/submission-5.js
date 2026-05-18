class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const counter = {};

        for(let sC of s) {
            counter[sC] = (counter[sC] || 0) + 1;
        }

        for(let tC of t) {
            counter[tC] = (counter[tC] || 0) - 1;
        }

        return Object.values(counter).every(c => c === 0);
    }
}
