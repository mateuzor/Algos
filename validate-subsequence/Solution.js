class Solution {
  validateSubsequence(array, sequence) {
    const count = sequence.reduce((acc, num) => {
      if (array.includes(num)) {
        acc++;
      }
      return acc;
    }, 0);
    return count === sequence.length ? true : false;
  }
}

module.exports = Solution;
