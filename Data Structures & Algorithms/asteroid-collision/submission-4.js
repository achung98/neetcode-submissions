class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        const stack = [];

        for(const ast of asteroids) {
            let destroyed = false;

            while(stack.length && !destroyed && stack.at(-1) > 0 && ast < 0) {
                const absAst = Math.abs(ast);
                const top = stack.at(-1);

                if(absAst > top) {
                    stack.pop();
                    continue;
                }

                if(absAst === top) {
                    stack.pop();
                    destroyed = true;
                }

                if(absAst < top) {
                    destroyed = true;
                }
            }

            if(!destroyed) stack.push(ast);
        }

        return stack;
    }
}
