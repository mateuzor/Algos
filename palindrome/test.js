const Solution = require("./Solution");
const solution = new Solution();

test("string is palindrome", () => {
  const result = solution.palindrome("arara");
  expect(result).toEqual(true);
});
