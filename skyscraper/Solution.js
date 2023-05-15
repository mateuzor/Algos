class Solution {
  getTallestBuilding(skyscrapers) {
    let tallest = 0;
    for (let i = 0; i < skyscrapers[0].length; i++) {
      let columnMax = 0;
      for (let j = 0; j < skyscrapers.length; j++) {
        if (skyscrapers[j][i] > columnMax) {
          columnMax = skyscrapers[j][i];
        }
      }
      tallest += columnMax;
    }
    return tallest;
  }
}

module.exports = Solution;
