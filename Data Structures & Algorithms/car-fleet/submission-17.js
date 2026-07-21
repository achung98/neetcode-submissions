class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const times = [];
        const posSpeeds = position.map((pos, i) => [pos, speed[i]]).sort((a, b) => b[0] - a[0]);

        for (let posSpeed of posSpeeds) {
            const time = (target - posSpeed[0]) / posSpeed[1];

            if (times.length === 0 || time > times.at(-1)) {
                times.push(time);
            }
        }

        return times.length;
    }
}
