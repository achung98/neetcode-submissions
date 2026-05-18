class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        people.sort((a, b) => a - b);

        let l = 0;
        let r = people.length - 1;
        let boats = 0;

        while(l <= r) {
            const sum = people[l] + people[r];

            if(sum > limit) {
                ++boats;
                --r;
            } else {
                ++boats;
                ++l;
                --r;
            }
        }

        return boats;    
    }
}
