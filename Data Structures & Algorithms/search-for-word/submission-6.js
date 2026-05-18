class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const visited = Array.from({length: board.length}, () => Array(board[0].length).fill(false));
        
        const dfs = (i, j, wi, temp) => {
            if(temp === word) return true;

            if(i < 0 || j >= board[0].length || i >= board.length || j < 0 || visited[i][j] || board[i][j] !== word[wi]) return false;
            
            visited[i][j] = true;
            const up = dfs(i - 1, j, wi + 1, temp + word[wi]);
            const down = dfs(i + 1, j, wi + 1, temp + word[wi]);
            const left = dfs(i, j - 1, wi + 1, temp + word[wi]);
            const right = dfs(i, j + 1, wi + 1, temp + word[wi]);

            const res = up || down || left || right;

            visited[i][j] = false;

            return res;
        }

        for(let i = 0; i < board.length; ++i) {
            for(let j = 0; j < board[0].length; ++j) {
                if(word[0] === board[i][j] && dfs(i, j, 0, "")) return true;
            }
        }

        return false;
    }
}
