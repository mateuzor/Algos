class Solution {
  passCode(pin) {
    const keypad = {
      1: ["1", "2", "4"],
      2: ["1", "2", "3", "5"],
      3: ["2", "3", "6"],
      4: ["1", "4", "5", "7"],
      5: ["2", "4", "5", "6", "8"],
      6: ["3", "5", "6", "9"],
      7: ["4", "7", "8"],
      8: ["5", "7", "8", "9", "0"],
      9: ["6", "8", "9"],
      0: ["0", "8"],
    };

    const combinations = [""];

    for (let i = 0; i < pin.length; i++) {
      const digit = pin[i];
      const neighbors = keypad[digit];

      const newCombinations = [];

      for (let combination of combinations) {
        for (let neighbor of neighbors) {
          newCombinations.push(combination + neighbor);
        }
      }

      combinations.length = 0;
      combinations.push(...newCombinations);
    }

    return combinations;
  }
}

module.exports = Solution;
