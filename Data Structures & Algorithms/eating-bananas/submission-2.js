class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1;
        let r = Math.max(...piles);
        const canEat = (k) => {
            let hours = 0;

            for(let i = 0; i < piles.length; ++i) {
                hours += Math.ceil(piles[i]/k)

                if(hours > h) return false;
            }

            return true;
        }

        while(l < r) {
            const mid = Math.floor((r + l) / 2);

            if(canEat(mid)) {
                r = mid;
            } else {
                l = mid + 1;
            }
        }

        return l;
    }
}
