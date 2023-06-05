const Solution = require("./Solution");
const solution = new Solution();

test("confirm is a zig zag array, by having no moves", () => {
  const array = [5, 10, 8, 12, 6, 9, 8];
  const result = solution.minMovesToZigzagArray(array);
  expect(result).toEqual(0);
});
