const Solution = require("./Solution");
const solution = new Solution();

test("test sum of two values match target", () => {
  const nums = [2, 7, 11, 15];
  const output = [1, 0];
  const target = 9;
  const result = solution.sumTwo(nums, target);
  expect(result).toEqual(output);
});
