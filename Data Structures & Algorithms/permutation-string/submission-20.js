class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false;

        const LEN = s1.length;

        const first = Array(26).fill(0);
        const second = Array(26).fill(0);

        const aCode = 'a'.charCodeAt(0);

        for(let i = 0; i < LEN; ++i) {
            ++first[s1[i].charCodeAt(0) - aCode];
            ++second[s2[i].charCodeAt(0) - aCode];
        }

        let matches = 0;
        
        for(let i = 0; i < 26; ++i) {
            if(first[i] === second[i]) ++matches;
        }

        let l = 0;
        for(let r = LEN; r < s2.length; ++r) {
            if(matches === 26) return true;

            const rightIndex = s2[r].charCodeAt(0) - aCode;
            ++second[rightIndex];

            if(second[rightIndex] == first[rightIndex]) ++matches;
            else if(second[rightIndex] - 1 === first[rightIndex]) --matches;

            const leftIndex = s2[l].charCodeAt(0) - aCode;
            --second[leftIndex];

            if(second[leftIndex] === first[leftIndex]) ++matches;
            else if(second[leftIndex] + 1 === first[leftIndex]) --matches;

            ++l;
        }

        return matches === 26;
    }
}
