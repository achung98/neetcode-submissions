class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const stack = [];

        for(const operation of operations) {
            if(operation === "+") {
                const second = stack.pop();
                const first = stack.pop();
                stack.push(first, second, first + second);
            } else if(operation === "D") {
                stack.push(stack[stack.length - 1] * 2);
            } else if(operation === "C") {
                stack.pop();
            } else {
                stack.push(Number(operation));
            }
        }

        let res = 0;
        for(const score of stack) {
            res += score;
        }

        return res;
    }
}
