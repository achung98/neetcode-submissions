class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        const res = [];
        
        const map = {
            0: ['+'],
            1: [''],
            2: ['a', 'b', 'c'],
            3: ['d', 'e', 'f'],
            4: ['g', 'h', 'i'],
            5: ['j', 'k', 'l'],
            6: ['m', 'n', 'o'],
            7: ['p', 'q', 'r', 's'],
            8: ['t', 'u', 'v'],
            9: ['w', 'x', 'y', 'z'],
        }

        const dfs = (d, c, temp) => {
            if(digits.length === 0) return;

            if(d === digits.length) {
                res.push(temp.join(''));
                return;
            }

            if(digits[c] in map) {
                for(let j = c; j < map[digits[d]].length; ++j) {
                    temp.push(map[digits[d]][j]);
                    dfs(d + 1, c, temp);
                    temp.pop();    
                }   
            }
        }

        dfs(0, 0, []);

        return res;
    }
}
