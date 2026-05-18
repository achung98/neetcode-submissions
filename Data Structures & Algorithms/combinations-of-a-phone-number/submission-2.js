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

        const dfs = (i, temp) => {
            if(digits.length === 0) return res;
            
            if(i >= digits.length) {
                res.push(temp.join(""));
                return;
            }

            for(let j = 0; j < map[digits[i]].length; ++j) {
                temp.push(map[digits[i]][j]);
                dfs(i + 1, temp);
                temp.pop();
            }
        }

        dfs(0, []);

        return res;
    }
}

