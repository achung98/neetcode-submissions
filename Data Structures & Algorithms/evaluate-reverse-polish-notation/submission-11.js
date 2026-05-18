class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];

        for (const token of tokens) {
            switch (token) {
                case "+": {
                    const second = stack.pop();
                    const first = stack.pop();
                    stack.push(first + second);
                    break;
                }
                case "-": {
                    const second = stack.pop();
                    const first = stack.pop();
                    stack.push(first - second);
                    break;
                }
                case "*": {
                    const second = stack.pop();
                    const first = stack.pop();
                    stack.push(first * second);
                    break;
                }
                case "/": {
                    const second = stack.pop();
                    const first = stack.pop();
                    stack.push(Math.trunc(first / second));
                    break;
                }
                default: {
                    stack.push(Number(token));
                    break;
                }
            }
        }

        return stack.at(-1);
    }
}
