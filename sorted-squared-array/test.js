const Solution = require("./Solution");
const solution = new Solution();

test("check array numbers are squared", () => {
  const array = [1, 2, 3, 4, 5, 6, 8, 9];
  const output = [1, 4, 9, 16, 25, 36, 64, 81];
  const result = solution.sortedSquaredArray(array);
  expect(result).toEqual(output);
});

test("check is array is not empty", () => {
  const array = [];
  const result = solution.sortedSquaredArray(array);
  expect(result).toEqual([]);
});
