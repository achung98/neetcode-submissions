class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let l = Math.max(...weights);
        let r = weights.reduce((acc, curr) => acc + curr, 0)

        const canShip = (cap) => {
            let expectedDays = 1;
            let load = 0;

            for(let i = 0; i < weights.length; ++i) {
                load += weights[i];

                if(load > cap) {
                    load = weights[i];
                    ++expectedDays;
                }
            }

            return expectedDays <= days;
        }

        while(l < r) {
            const mid = Math.floor((r + l) / 2);

            if(canShip(mid)) {
                r = mid;
            } else {
                l = mid + 1;
            }
        }

        return l;
    }
}
