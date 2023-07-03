class Solution {
  minMovesToZigzag(arr) {
    let moves = 0;
    const n = arr.length;

    // If the array has less than 3 elements, it is already a zigzag array
    // and no moves are required.
    if (n < 3) {
      return 0;
    }

    // Check if the first element violates the zigzag condition.
    if (arr[0] >= arr[1]) {
      // If so, calculate the move required and update the element.
      moves += arr[0] - arr[1] + 1;
      arr[0] = arr[1] - 1;
    }

    // Iterate through the array from index 1 to n-2.
    for (let i = 1; i < n - 1; i++) {
      // Check if the current element violates the zigzag condition based on its index.
      if (
        (i % 2 === 1 && arr[i] <= arr[i - 1] && arr[i] <= arr[i + 1]) ||
        (i % 2 === 0 && arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1])
      ) {
        // If so, calculate the move required and update the element.
        moves += Math.abs(arr[i] - Math.min(arr[i - 1], arr[i + 1])) + 1;
        arr[i] = Math.min(arr[i - 1], arr[i + 1]) - 1;
      }
    }

    // Check if the last element violates the zigzag condition.
    if (arr[n - 1] >= arr[n - 2]) {
      // If so, calculate the move required and update the element.
      moves += arr[n - 1] - arr[n - 2] + 1;
      arr[n - 1] = arr[n - 2] - 1;
    }

    return moves;
  }
}

module.exports = Solution;
