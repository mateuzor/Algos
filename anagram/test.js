const Solution = require("./Solution");
const solution = new Solution();

test("test", () => {
  const result = solution.frequentElements();
  expect(result).toEqual(false);
});
