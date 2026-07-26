class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        const res = [];

        for(const ast of asteroids) {
            if(ast > 0) {
                res.push(ast);
                continue;
            }

            let toPush = true;
            while(res.length && ast < 0 && res.at(-1) > 0) {
                const head = res.at(-1);
                const abs = Math.abs(ast);

                if(abs === head) {
                    res.pop();
                    toPush = false;
                    break;
                } else if(abs > head) {
                    res.pop();
                } else if(abs < head) {
                    toPush = false;
                    break;
                }
            }

            if(toPush) res.push(ast);
        }

        return res;
    }
}
