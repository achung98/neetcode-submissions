class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        const aCode = "a".charCodeAt(0);

        const first = Array(26).fill(0);
        const second = Array(26).fill(0);

        for (let i = 0; i < s1.length; ++i) {
            ++first[s1[i].charCodeAt(0) - aCode];
            ++second[s2[i].charCodeAt(0) - aCode];
        }

        let matches = 0;
        for (let i = 0; i < 26; ++i) {
            if (first[i] === second[i]) ++matches;
        }

        let l = 0;
        for (let r = s1.length; r < s2.length; ++r) {
            if (matches === 26) return true;

            let index = s2.charCodeAt(r) - aCode;

            ++second[index];
            if (first[index] === second[index]) {
                ++matches;
            } else if (first[index] + 1 === second[index]) {
                --matches;
            }

            index = s2.charCodeAt(l) - aCode;
            --second[index];
            if (first[index] === second[index]) {
                ++matches;
            } else if (first[index] - 1 === second[index]) {
                --matches;
            }
            l++;
        }

        return matches === 26;
    }
}
