class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const res = [];

        const isPalindrome = (word) => {
            let i = 0;
            let j = word.length - 1;

            while(i < j) {
                if(word[i++] !== word[j--]) return false;
            }

            return true;
        }

        const backtrack = (i, part) => {
            if(i === s.length) {
                res.push([...part]);
                return;
            }

            for(let j = i; j < s.length; ++j) {
                const subs = s.substring(i, j + 1);

                if(isPalindrome(subs)) {
                    part.push(subs);
                    backtrack(j + 1, part);
                    part.pop();
                }
            }
        }

        backtrack(0, []);

        return res;
    }
}
