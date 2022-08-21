class Solution {
  anagram(firstText, secondText) {
    if (firstText.length !== secondText.length) return false;
    let str1 = firstText.split("").sort().join("");
    let str2 = secondText.split("").sort().join("");
    console.log(str1, str2);
    if (str1 === str2) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Solution;
