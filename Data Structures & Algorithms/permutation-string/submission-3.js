class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
      const s1_count = {};
      
      for(let c of s1) {
        s1_count[c] = (s1_count[c] || 0) + 1;
      }

      for(let i = 0; i <= s2.length - s1.length; i++) {
        const s2_count = {};
        for(let j = i; j < i + s1.length; j++) {
            s2_count[s2[j]] = (s2_count[s2[j]] || 0) + 1;
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
