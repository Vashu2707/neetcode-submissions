
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        const buckets = Array.from(
            { length: nums.length + 1 },
            () => []
        );
        for (let i = 0; i < nums.length; i++) {
            map.set(nums[i], (map.get(nums[i]) || 0) + 1);
        }
        for (const [number, frequency] of map) {
            buckets[frequency].push(number);
        }
        const result = [];
        for (let i = buckets.length - 1; i >= 0; i--) {
            for (const number of buckets[i]) {
                result.push(number);
                if (result.length === k) {
                    return result;
                }
            }
        }
        return result;
    }
}
