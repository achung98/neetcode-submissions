class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
      const s1_count = {};
      for(let c of s1) {
        s1_count[c] = 1 + (s1_count[c] || 0);
      }


      let l = 0;
      const s2_count = {};
      for(let r = 0; r < s2.length; r++) {
        s2_count[s2[r]] = 1 + (s2_count[s2[r]] || 0);

        if(r - l + 1 > s1.length) {
            const newCount = (s2_count[s2[l]] || 0) - 1;
            
            if(newCount !== 0) s2_count[s2[l]] = newCount;
            else delete s2_count[s2[l]];

            ++l;
        }

        if(this.isPermutation(s1_count, s2_count)) return true;
      }

        return false;
    }

    isPermutation(s1_count, s2_count) {
        for(let key in s1_count) {
            if(!s2_count[key] || s2_count[key] !== s1_count[key]) return false;
        }

        return true;
    }
}
