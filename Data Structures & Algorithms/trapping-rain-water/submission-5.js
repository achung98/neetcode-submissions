class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        // const maxL = [];
        // const maxR = [];
        // const minLR = [];
        // const len = height.length
        
        // // Max left at each position
        // let max = 0;
        // for(let i = 0; i < len; i++) {
        //     if(height[i - 1] === undefined) {
        //         maxL.push(0);
        //         max = height[i];
        //         continue;
        //     }
        //     maxL.push(max);
        //     max = Math.max(max, height[i]);
        // }

        // // Max right at each position
        // max = 0;
        // for(let i = len - 1; i >= 0; i--) {
        //     if(height[i + 1] === undefined) {
        //         maxL.push(0);
        //         max = height[i];
        //         continue;
        //     }
        //     maxR.unshift(max);
        //     max = Math.max(max, height[i]);
        // }

        // // Min between r and l
        // // [0, 0, 2, 2, 3, 3, 3, 3, 3, 3]
        // // [3, 3, 3, 3, 3, 3, 3, 2, 1, 0]
        // for(let i in height) {
        //     minLR.push(Math.min(maxL[i], maxR[i]));
        // }

        // // Compute heights
        // // [0, 0, 2, 2, 3, 3, 3, 2, 1, 0]
        // let res = 0;
        // for(let i in height) {
        //     if(height[i] < minLR[i]) res += minLR[i] - height[i];
        // }

        // return res;


        if (!height || height.length === 0) {
            return 0;
        }

        let l = 0;
        let r = height.length - 1;
        let leftMax = height[l];
        let rightMax = height[r];
        let res = 0;
        while (l < r) {
            if (leftMax < rightMax) {
                l++;
                leftMax = Math.max(leftMax, height[l]);
                res += leftMax - height[l];
            } else {
                r--;
                rightMax = Math.max(rightMax, height[r]);
                res += rightMax - height[r];
            }
        }
        return res;
    }
}
