class Solution {
    /**
     * @param {string[]} words
     * @param {string} order
     * @return {boolean}
     */
    isAlienSorted(words, order) {
        const orderMap = {};

        for(let i = 0; i < order.length; ++i) {
            orderMap[order[i]] = i;
        }

        for (let i = 0; i < words.length - 1; i++) {
            let w1 = words[i], w2 = words[i + 1];
            
            for (let j = 0; j < w1.length; j++) {
                if (j === w2.length) return false; // Letters are the same but first letter is longer than the second one
                
                if (w1[j] !== w2[j]) {
                    if (orderMap[w1[j]] > orderMap[w2[j]]) // Not lexicographically ordered
                        return false;
                    break;
                }
            }
        }
        
        return true;
    }
}
