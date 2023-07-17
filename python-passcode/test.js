const Solution = require("./Solution");
const solution = new Solution();

test("test with one code", () => {
  const pincode = "0";
  const result = solution.passCode(pincode);
  expect(result).toEqual(["0", "8"]);
});

test("test with two code", () => {
  const pincode = "00";
  const result = solution.passCode(pincode);
  console.log(result);
  expect(result).toEqual(["00", "08", "80", "88"]);
});

test("test with three code", () => {
  const pincode = "007";
  const result = solution.passCode(pincode);
  expect(result).toEqual([
    "004",
    "007",
    "008",
    "084",
    "087",
    "088",
    "804",
    "807",
    "808",
    "884",
    "887",
    "888",
  ]);
});
