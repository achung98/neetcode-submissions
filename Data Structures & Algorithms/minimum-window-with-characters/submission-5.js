class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const tCount = {}
        for(const c of t) {
            tCount[c] = (tCount[c] ?? 0) + 1;
        }
        
        let toMatch = Object.keys(tCount).length;
        let matched = 0;
        let shortest = "";

        let l = 0;
        for(let r = 0; r < s.length; ++r) {
            const ch = s[r];
            if(ch in tCount) --tCount[ch];

            if(tCount[ch] === 0) {
                ++matched;
            }

            while(matched === toMatch) {
                const potShortest = s.substring(l, r + 1);
                console.log(potShortest)
                shortest = shortest === "" || potShortest.length < shortest.length ? potShortest : shortest;
                const toDelete = s[l];
                if(toDelete in tCount) {
                    // Substring no longer contains to delete, increase the count
                    if(tCount[toDelete] === 0) --matched;
                    ++tCount[toDelete];
                }
                ++l; 
            }
        }

        return shortest;
    }
}
