class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let operands = [];

        for(const token of tokens) {
            const parsedToken = +token;
            if(parsedToken || parsedToken === 0) {
                operands.push(parsedToken);
            } else {
                const r = operands.pop();
                const l = operands.pop();

                if(token === "+") operands.push(l + r);
                else if(token === "-") operands.push(l - r);
                else if(token === "*") operands.push(l * r);
                else operands.push(Math.trunc(l / r));
            }
        }

        return operands.pop();
    }
}
