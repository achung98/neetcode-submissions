class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const ROWS = board.length;
        const COLS = board[0].length;
        const visited = Array.from({ length: ROWS }, () => Array(COLS).fill(false));

        const backtrack = (i, j, track, temp) => {
            if(temp === word) return true;

            if(i >= board.length || j >= board[0].length || i < 0 || j < 0) return false;

            if(board[i][j] !== word[track] || visited[i][j]) return false;

            visited[i][j] = true
            const bottom = backtrack(i + 1, j, track + 1, temp + word[track]);
            const right = backtrack(i, j + 1, track + 1, temp + word[track]);
            const top = backtrack(i -1, j, track + 1, temp + word[track]);
            const left = backtrack(i, j - 1, track + 1, temp + word[track]);

            const res = left || right || top || bottom;
            visited[i][j] = false;

            return res;
        }

        for(let i = 0; i < ROWS; ++i) {
            for(let j = 0; j < COLS; ++j) {
                const res = backtrack(i, j, 0, "");

                if(res) return res;
            }
        }

        return false;
    }
}
