const Solution = require("./Solution");
const solution = new Solution();

test("should make one move to be a zig zag", () => {
  const array = [8, 9, 9];
  const result = solution.minMovesToZigzag(array);
  expect(result).toEqual(1);
});

test("should make zero moves for an already zigzag array", () => {
  const array = [5, 10, 8, 12, 6, 9, 8];
  const result = solution.minMovesToZigzag(array);
  expect(result).toEqual(0);
});
