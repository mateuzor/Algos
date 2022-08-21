const Solution = require("./Solution");
const solution = new Solution();

test("Check strings don't have the same size", () => {
  const firstString = "anagram";
  const secondString = "nagram";
  const result = solution.anagram(firstString, secondString);
  expect(result).toEqual(false);
});

test("Check if it's an anagram", () => {
  const firstString = "anagram";
  const secondString = "nagaram";
  const result = solution.anagram(firstString, secondString);
  expect(result).toEqual(true);
});
