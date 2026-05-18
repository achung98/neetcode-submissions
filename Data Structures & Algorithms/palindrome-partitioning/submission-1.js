class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const isPalindrome = (word) => {
            let i = 0;
            let j = word.length - 1;

            while(i < j) {
                if(word[i++] !== word[j--]) return false;
            }

            return true;
        }

        const res = [];

        const backtrack = (i, temp) => {
            if(i >= s.length) {
                res.push([...temp]);
                return;
            }

            for(let j = i; j < s.length; ++j) {
                const sbs = s.substring(i, j + 1);

                if(isPalindrome(sbs)) {
                    temp.push(sbs);
                    backtrack(j + 1, temp);
                    temp.pop();
                }
            }
        }

        backtrack(0, []);

        return res;
    }
}
