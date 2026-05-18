class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {
        const stack = [];

        const segments = path.split("/");

        for(const segment of segments) {
            if(segment === "" || segment === ".") continue;

            else if(segment === "..") stack.pop();

            else stack.push(segment);
        }

        return "/" + stack.join("/");
    }
}
