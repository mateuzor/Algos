class Solution {
  strComp(string) {
    var currentChar = "";
    var counter = "";
    var maxCounterer = 1;
    var compressed = "";
    for (var i = 0; i < string.length; i++) {
      if (currentChar !== string[i]) {
        console.log(currentChar, string[i], i);
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
