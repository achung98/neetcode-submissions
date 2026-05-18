class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const pairs = position.map((pos, i) => [pos, speed[i]]);
        pairs.sort((a, b) => b[0] - a[0]); // Sort in descending order by position

        const res = [];
        for (const [pos, spd] of pairs) {
            const time = (target - pos) / spd; // Use precise division instead of Math.floor
            
            if (res.length === 0 || res[res.length - 1] < time) {
                res.push(time);
            }
        }

        return res.length;
    }
}
