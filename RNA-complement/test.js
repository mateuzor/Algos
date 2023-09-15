const Solution = require("./Solution");
const solution = new Solution();

test("test should return RN complement of given DNA sequence", () => {
  const dnaSequence = "GCTA";
  const rnaSequence = solution.transcribeToRNA(dnaSequence);
  expect(rnaSequence).toEqual("CGAU");
});
