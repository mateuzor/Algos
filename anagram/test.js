const Solution = require("./Solution");
const solution = new Solution();

test("check if its not an anagram", () => {
  const result = solution.anagram("anagram", "nagaramy");
  expect(result).toEqual(false);
});

test("check if its an anagram", () => {
  const result = solution.anagram("anagram", "nagaram");
  expect(result).toEqual(true);
});
