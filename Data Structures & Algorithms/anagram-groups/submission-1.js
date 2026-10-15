class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        for(let i=0; i<strs.length; i++){
            const key = strs[i].split('').sort().join('');
            if(!map.has(key)){
                map.set(key, []);
            }
            map.get(key).push(strs[i]);
        }
        return Array.from(map.values());
    }
}
