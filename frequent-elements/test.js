const Solution = require("./Solution");
const solution = new Solution();

test("check if it returns the top 2 more frequent elements", () => {
  const nums = [1, 1, 1, 2, 2, 3];
  const k = 2;
  const result = solution.frequentElements(nums, k);
  expect(result).toEqual([1, 2]);
});
