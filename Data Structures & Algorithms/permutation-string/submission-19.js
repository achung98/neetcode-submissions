class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false;

        const key1 = Array(26).fill(0);
        const key2 = Array(26).fill(0);

        const aCode = 'a'.charCodeAt(0);

        let matches = 0;

        for(let i = 0; i < s1.length; ++i) {
            ++key1[s1[i].charCodeAt(0) - aCode]
            ++key2[s2[i].charCodeAt(0) - aCode]
        }

        for(let i = 0; i < 26; ++i) {
            if(key1[i] === key2[i]) ++matches;
        }

        let l = 0;
        for(let r = s1.length; r < s2.length; ++r) {
            if(matches === 26) return true;

            const ch2 = s2[r].charCodeAt(0) - aCode;
            ++key2[ch2];

            if(key2[ch2] === key1[ch2]) ++matches;
            else if(key2[ch2] === key1[ch2] + 1) -- matches;

            const ch1 = s2[l].charCodeAt(0) - aCode;
            --key2[ch1];

            if(key2[ch1] == key1[ch1]) ++matches;
            else if(key2[ch1] === key1[ch1] - 1) --matches;

            ++l;
        }

        return matches === 26;
    }
}
