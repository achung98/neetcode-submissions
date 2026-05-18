class Solution {
    decodeString(s) {
        const stack = [];

        for (const ch of s) {
            if (ch !== ']') {
                stack.push(ch);
                continue;
            }

            // build encoded string
            let str = "";

            while (stack.length && stack.at(-1) !== '[') {
                str = stack.pop() + str;
            }

            stack.pop(); // remove '['

            // build number
            let num = "";

            while (
                stack.length &&
                !isNaN(stack.at(-1))
            ) {
                num = stack.pop() + num;
            }

            stack.push(str.repeat(Number(num)));
        }

        return stack.join('');
    }
}