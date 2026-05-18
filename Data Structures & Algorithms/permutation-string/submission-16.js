class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) {
            return false;
        }
        
        const M = 26;

        const s1Count = Array(26).fill(0);
        const s2Count = Array(26).fill(0);
        
        const s1Len = s1.length;

        // Initial count creation
        for(let i = 0; i < s1Len; ++i) {
            ++s1Count[s1[i].charCodeAt(0) - 'a'.charCodeAt(0)]; 
            ++s2Count[s2[i].charCodeAt(0) - 'a'.charCodeAt(0)];
        }

        // Checking matches
        let matches = 0;
        for(let i = 0; i < M; ++i) {
            matches += s1Count[i] === s2Count[i] ? 1 : 0;
        }

        // Iterating through fixed sized window
        let l = 0;
        for (let r = s1.length; r < s2.length; r++) {
            if (matches === 26) {
                return true;
            }

            let index = s2.charCodeAt(r) - 97;
            s2Count[index]++;
            if (s1Count[index] === s2Count[index]) {
                matches++;
            } else if (s1Count[index] + 1 === s2Count[index]) {
                matches--;
            }

            index = s2.charCodeAt(l) - 97;
            s2Count[index]--;
            if (s1Count[index] === s2Count[index]) {
                matches++;
            } else if (s1Count[index] - 1 === s2Count[index]) {
                matches--;
            }
            l++;
        }
        return matches === 26;
    }
}
