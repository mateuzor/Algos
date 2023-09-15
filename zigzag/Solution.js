class Solution {
  minMovesToZigzag(arr) {
    let moves = 0;
    const n = arr.length;

    if (arr[0] >= arr[1]) {
      moves += arr[0] - arr[1] + 1;
      arr[0] = arr[1] - 1;
    }

    for (let i = 1; i < n - 1; i++) {
      if (
        (i % 2 === 1 && arr[i] <= arr[i - 1] && arr[i] <= arr[i + 1]) ||
        (i % 2 === 0 && arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1])
      ) {
        moves += Math.abs(arr[i] - Math.min(arr[i - 1], arr[i + 1])) + 1;
        arr[i] = Math.min(arr[i - 1], arr[i + 1]) - 1;
      }
    }

    if (arr[n - 1] >= arr[n - 2]) {
      moves += arr[n - 1] - arr[n - 2] + 1;
      arr[n - 1] = arr[n - 2] - 1;
    }

    return moves;
  }
}

module.exports = Solution;
