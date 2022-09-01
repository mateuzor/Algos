const Solution = require("./Solution");
const solution = new Solution();

test("test", () => {
  const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
  const output = [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]];
  const result = solution.groupAnagrams(input);
  expect(result).toEqual(output);
});
