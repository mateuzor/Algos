const Solution = require("./Solution");
const solution = new Solution();

test("test", () => {
  const array = [1, 2, 3, 4];
  const result = solution.arrayExpectSelf(array);
  expect(result).toEqual([24, 12, 8, 6]);
});
