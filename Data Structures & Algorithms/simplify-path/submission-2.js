class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {
        const stack = [];

        const parsedPath = path.split("/").filter(p => p !== "");

        for(const p of parsedPath) {
            if(p === ".") continue;
            else if(p === "..") stack.pop();
            else stack.push(p);
        }

        return "/" + stack.join("/");
    }
}
