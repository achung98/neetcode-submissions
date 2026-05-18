class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        const stack = [];

        for(const ast of asteroids) {
            let destroyed = false;

            while(stack.length && stack.at(-1) > 0 && ast < 0) {
                const astAbs = Math.abs(ast);
                const top = stack.at(-1);

                if(astAbs > top) {
                    stack.pop();
                    continue;
                }

                if(astAbs === top) {
                    stack.pop();
                    destroyed = true;
                    break;
                }

                if(astAbs < top) {
                    destroyed = true;
                    break;
                }
            }

            if(!destroyed) stack.push(ast);
        }

        return stack;
    }
}
