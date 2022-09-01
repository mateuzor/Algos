const Solution = require("./Solution");
const solution = new Solution();

test("test", () => {
  const array = [100, 4, 200, 1, 3, 2];
  const result = solution.longestConsecutive(array);
  expect(result).toEqual(4);
});

test("check array is empty", () => {
  const array = [];
  const result = solution.longestConsecutive(array);
  expect(result).toEqual(0);
});
