const Solution = require("./Solution");
const solution = new Solution();

test("test should check number is a happy number being true", () => {
  const result = solution.isHappyNumber(19);
  expect(result).toEqual(true);
});
