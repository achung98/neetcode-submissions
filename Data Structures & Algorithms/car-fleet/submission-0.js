class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const cars = position.map((p, i) => [p, speed[i]])
        cars.sort((a, b) => b[0] - a[0]);

        let fleet = 0;
        let lastTime = 0;

        for(let [p, s] of cars) {
            const time = (target - p) / s;

            if(time > lastTime) {
                ++fleet;
                lastTime = time;
            }
        }

        return fleet;
    }
}
