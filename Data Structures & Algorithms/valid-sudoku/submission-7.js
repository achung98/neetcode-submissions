class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = {};
        const cols = {};
        const boxes = {};

        for(let i = 0; i < 9; ++i) {
            for(let j = 0; j < 9; ++j) {
                if(board[i][j] === ".") continue;

                const num = board[i][j];
                const key = `${Math.floor(i/3)},${Math.floor(j/3)}`

                if((i in rows && rows[i].has(num)) || (j in cols && cols[j].has(num)) || (key in boxes && boxes[key].has(num)))
                    return false;

                if(i in rows) rows[i].add(num);
                else rows[i] = new Set(num);

                if(j in cols) cols[j].add(num);
                else cols[j] = new Set(num);

                if(key in boxes) boxes[key].add(num);
                else boxes[key] = new Set(num);
            }
        }

        return true;
    }
}
