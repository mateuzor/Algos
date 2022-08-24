const Solution = require("./Solution");
const solution = new Solution();

test("check array have duplicate values", () => {
  const array = [1, 2, 3, 1];
  const result = solution.containsDuplicate(array);
  expect(result).toEqual(true);
});

test("check array doesn't have duplicate values", () => {
  const array = [1, 2, 3, 4];
  const result = solution.containsDuplicate(array);
  expect(result).toEqual(false);
});
