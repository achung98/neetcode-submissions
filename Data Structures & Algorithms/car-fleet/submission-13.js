class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const times = [];
        const posSpeeds = position.map((pos, i) => [pos, speed[i]]).sort((a, b) => a[0] - b[0]);

        for(let posSpeed of posSpeeds) {
            const time = (target - posSpeed[0])/posSpeed[1];

            while(times.length && times.at(-1) <= time) {
                times.pop();
            }

            times.push(time);
        }

        return times.length;
    }
}
