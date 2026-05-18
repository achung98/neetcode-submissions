class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    totalNQueens(n) {
        let sols = 0;
        const board = Array.from({length: n}, () => Array(n).fill("."));

        const backtrack = (q) => {
            if(q === n) {
                ++sols;
                return;
            }

            for(let c = 0; c < n; ++c) {
                if(canPlace(q, c)) {
                    board[q][c] = "Q";
                    backtrack(q + 1);
                    board[q][c] = ".";
                }
            }
        }

        const canPlace = (r, c) => {
            // Checking on top of me
            for(let i = r - 1; i >= 0; --i) {
                if(board[i][c] === "Q") return false;
            }
            // Checking top left diagonal
            for(let i = r - 1, j = c - 1; i >= 0 && j >= 0; --i, --j) {
                if(board[i][j] === "Q") return false;
            }
            //Checking top right diagonal
            for(let i = r - 1, j = c + 1; i >=0 && j < n; --i, ++j) {
                if(board[i][j] === "Q") return false;
            }
            return true;
        }

        backtrack(0);

        return sols;
    }
}
