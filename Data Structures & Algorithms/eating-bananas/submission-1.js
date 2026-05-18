class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1;
        let r = Math.max(...piles);

        const rate = (mid) => {
            let hTaken = 0;
            for(const pile of piles) hTaken += Math.ceil(pile/mid);

            return hTaken <= h;
        }

        while(l < r) {
            const mid = Math.floor(l + (r - l) / 2);

            if(rate(mid)) r = mid;
            else l = mid + 1;
        }

        return l;
    }
}
