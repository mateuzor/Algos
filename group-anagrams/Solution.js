class Solution {
  groupAnagrams(strs) {
    let hash = {};
    for (let i = 0; i < strs.length; i++) {
      let word = strs[i].split("").sort().join("");
      hash[word] = hash[word] || [];
      hash[word].push(strs[i]);
    }
    return Object.values(hash);
  }
}

module.exports = Solution;
