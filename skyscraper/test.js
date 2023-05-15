const Solution = require("./Solution");
const solution = new Solution();

test("should return the tallest skyscraper", () => {
  const buildings = [
    [0, 0, 0, 0, 1],
    [0, 1, 0, 0, 1],
  ];
  const result = solution.getTallestBuilding(buildings);
  expect(result).toEqual(2);
});
