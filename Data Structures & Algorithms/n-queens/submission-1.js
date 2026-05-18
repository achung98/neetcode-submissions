class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        const solutions = [];
        const board = Array.from({ length: n }, () => Array(n).fill('.'));
    
        function isSafe(row, col) {
            // Check column upwards
            for (let i = 0; i < row; i++) {
                if (board[i][col] === 'Q') return false;
            }
            // Check upper-left diagonal
            for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
                if (board[i][j] === 'Q') return false;
            }
            // Check upper-right diagonal
            for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
                if (board[i][j] === 'Q') return false;
            }
            return true;
        }
    
        function backtrack(row) {
            if (row === n) { // All N queens placed successfully
                solutions.push(board.map(r => r.join("")));
                return;
            }
    
            for (let col = 0; col < n; col++) { // Try placing queen in each col of current row
                if (isSafe(row, col)) {
                    board[row][col] = 'Q';    // Place queen
                    backtrack(row + 1);       // Recurse for the next row
                    board[row][col] = '.';    // Backtrack: remove queen, try next col
                }
            }
        }
    
        backtrack(0); // Start placing from row 0
        return solutions;
    }
}
