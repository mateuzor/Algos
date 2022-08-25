class Solution {
  anagram(first, second) {
    if (first.length !== second.length) return false;
    const firstOrdered = first.split("").sort().join("");
    const secondOrdered = first.split("").sort().join("");
    if (firstOrdered === secondOrdered) return true;
  }
}

module.exports = Solution;
