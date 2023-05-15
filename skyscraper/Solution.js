class Solution {
  getTallestBuilding(buildings) {
    let tallest = 0;
    for (let i = 0; i < buildings[0].length; i++) {
      let columnMax = 0;
      for (let j = 0; j < buildings.length; j++) {
        if (buildings[j][i] > columnMax) {
          columnMax = buildings[j][i];
        }
      }
      tallest += columnMax;
    }
    return tallest;
  }
}

module.exports = Solution;
