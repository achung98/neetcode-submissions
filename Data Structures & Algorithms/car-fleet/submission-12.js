class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        // v = d/t

        const posSpeed = [];
        for (const i in position) {
            const iInt = Number(i);
            posSpeed[iInt] = [position[iInt], speed[iInt]];
        }

        posSpeed.sort((a, b) => b[0] - a[0]);

        const stack = [];
        for (let i = 0; i < posSpeed.length; ++i) {
            const t = (target - posSpeed[i][0]) / posSpeed[i][1];

            if (!stack.length || t > stack.at(-1)) {
                stack.push(t);
            }
        }

        return stack.length;
    }
}
