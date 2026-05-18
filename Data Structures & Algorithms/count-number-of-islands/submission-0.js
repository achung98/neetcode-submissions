class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const visited = Array.from({length: grid.length}, () => Array(grid[0].length).fill(false));

        const dfs = (i, j) => {
            if(i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === "0" || visited[i][j]) return;

            visited[i][j] = true;

            dfs(i + 1, j) // down;
            dfs(i - 1, j) // up;
            dfs(i, j + 1) // right;
            dfs(i, j - 1) // left;
        }

        let islands = 0;
        for(let i = 0; i < grid.length; ++i) {
            for(let j = 0; j < grid[0].length; ++j) {
                if(grid[i][j] === "1" && !visited[i][j]) {
                    dfs(i, j);
                    ++islands;
                }
            }
        }

        return islands;
    }
}
