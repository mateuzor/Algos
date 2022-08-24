class Solution {
  palindrome(stringValue) {
    const result = stringValue.split("").every((letter, index) => {
      return letter === stringValue[stringValue.length - index - 1];
    });
    return result;
  }
}

module.exports = Solution;
