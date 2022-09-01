class Solution {
  groupAnagrams(strs) {
    let hash = {};
    for (let i = 0; i < strs.length; i++) {
      console.log(hash);
      let word = strs[i].split("").sort().join("");
      hash[word] = hash[word] || [];
      hash[word].push(strs[i]);
      console.log(hash);
    }
    return Object.values(hash);
  }
}

module.exports = Solution;
