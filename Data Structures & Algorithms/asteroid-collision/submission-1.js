class Solution {
    asteroidCollision(asteroids) {
        const stack = [];

        for (const asteroid of asteroids) {
            let destroyed = false;

            while (
                stack.length &&
                stack.at(-1) > 0 &&
                asteroid < 0
            ) {
                const top = stack.at(-1);

                if (top < Math.abs(asteroid)) {
                    stack.pop();
                    continue;
                }

                if (top === Math.abs(asteroid)) {
                    stack.pop();
                }

                destroyed = true;
                break;
            }

            if (!destroyed) {
                stack.push(asteroid);
            }
        }

        return stack;
    }
}