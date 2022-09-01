const Solution = require("./Solution");
const solution = new Solution();

test("test", () => {
  const array = [5, 1, 22, 25, 6, -1, 8, 10];
  const sequence = [1, 6, -1, 10];
  const result = solution.validateSubsequence(array, sequence);
  expect(result).toEqual(true);
});
