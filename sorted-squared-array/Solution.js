class Solution {
  sortedSquaredArray(array) {
    if (array.length === 0) return [];
    return array.map((number) => number * number);
  }
}

module.exports = Solution;
