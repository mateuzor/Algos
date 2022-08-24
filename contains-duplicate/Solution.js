class Solution {
  containsDuplicate(array) {
    const arrayUniqueValues = [...new Set(array)];
    return array.length !== arrayUniqueValues.length;
  }
}
module.exports = Solution;
