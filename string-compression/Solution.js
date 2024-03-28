class Solution {
  strComp(string) {
    if (string.length === 0) {
      return "";
    }

    var currentChar = string[0];
    var counter = 1;
    var maxCounter = 1;
    var compressed = "";

    for (var i = 1; i < string.length; i++) {
      if (currentChar !== string[i]) {
        compressed = compressed + currentChar + counter;
        maxCounter = Math.max(maxCounter, counter);
        currentChar = string[i];
        counter = 1;
      } else {
        counter++;
      }
    }

    compressed = compressed + currentChar + counter;
    maxCounter = Math.max(maxCounter, counter);

    return maxCounter === 1 ? string : compressed;
  }
}

module.exports = Solution;
