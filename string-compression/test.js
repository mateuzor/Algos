const Solution = require("./Solution");
const solution = new Solution();

test("check string is compressed", () => {
  const result = solution.strComp("aa");
  expect(result).toEqual("a2");
});

test("check string is compressed is different characters", () => {
  const result = solution.strComp("aabbcccd");
  expect(result).toEqual("a2b2c3d1");
});
