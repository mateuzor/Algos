class Solution {
  minMovesToZigzagArray(arr) {
    const n = arr.length;
    let moves = 0;

    for (let i = 1; i < n; i++) {
      if (i % 2 === 0) {
        if (arr[i] <= arr[i - 1]) {
          const diff = arr[i - 1] - arr[i];
          moves += diff + 1;
          arr[i] = arr[i - 1] + 1;
        }
      } else {
        if (arr[i] >= arr[i - 1]) {
          const diff = arr[i] - arr[i - 1];
          moves += diff + 1;
          arr[i] = arr[i - 1] - 1;
        }
      }
    }

    return moves;
  }
}

module.exports = Solution;
