class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        let maxArea = 0;
        const visited = Array.from({length: ROWS}, () => Array(COLS).fill(false));

        const dfs = (i, j) => {
            if(i < 0 || j < 0 || i >= ROWS || j >= COLS || grid[i][j] === 0 || visited[i][j]) return 0;

            visited[i][j] = true;
            
            const bottom = dfs(i + 1, j);
            const top = dfs(i - 1, j);
            const right = dfs(i, j + 1);
            const left = dfs(i, j - 1);

            return 1 + bottom + top + right + left;
        }

        for(let i = 0; i < ROWS; ++i) {
            for(let j = 0; j < COLS; ++j) {
                if(grid[i][j] === 1 && !visited[i][j]) {
                    const count = dfs(i, j);
                    maxArea = Math.max(maxArea, count);
                }
            }
        }

        return maxArea;
    }
}
