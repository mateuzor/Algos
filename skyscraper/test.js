const Solution = require("./Solution");
const solution = new Solution();

test("should return the tallest skyscraper", () => {
  const skyscrapers = [
    [0, 0, 0, 0, 1],
    [0, 1, 0, 0, 1],
  ];
  const result = solution.getTallestBuilding(skyscrapers);
  expect(result).toEqual(2);
});

test("should return the tallest skyscraper having skyscrapers with the same height", () => {
  const skyscrapers = [
    [0, 1, 0, 0, 1],
    [0, 1, 1, 0, 1],
    [0, 1, 1, 0, 1],
  ];
  const result = solution.getTallestBuilding(skyscrapers);
  expect(result).toEqual(3);
});
