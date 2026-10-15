class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const freq = new Map();
        for (const num of nums) {
            if (freq.has(num)){
                return true;
            }
            freq.set(num, (freq.get(num) || 0) + 1);
        }
    return false;
    }
    
}
