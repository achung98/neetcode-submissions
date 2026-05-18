class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let res = "";

        let one = 0;
        let two = 0;

        while(one < word1.length && two < word2.length) {
            res += word1[one] + word2[two];
            ++one;
            ++two;
        }

        if(one < word1.length) res += word1.slice(one);
        if(two < word2.length) res += word2.slice(two);

        return res;
    }
}
