class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        const board = Array.from({length: n}, () => Array(n).fill("."));

        const res = [];

        const backtrack = (row) => {
            if(row >= n) {
                res.push([...board.map(b => b.join(""))]);
                return;
            }

            for(let col = 0; col < n; ++col) {
                if(canPlace(row, col)) {
                    board[row][col] = "Q";
                    backtrack(row + 1);
                    board[row][col] = ".";
                }
            }
        }

        const canPlace = (row, col) => {
            for(let i = row - 1; i >= 0; --i) {
                if(board[i][col] === "Q") return false;
            }

            for(let i = row - 1, j = col + 1; i >= 0 && j < n; --i, ++j) {
                if(board[i][j] === "Q") return false;
            }

            for(let i = row - 1, j = col - 1; i >= 0 && j >= 0; --i, --j) {
                if(board[i][j] === "Q") return false;
            }

            return true;
        }

        backtrack(0); 
        
        return res;
    }
}
