const Solution = require("./Solution");
const solution = new Solution();

test("Check is number", () => {
  const result = solution.fizzBuzz(1);
  expect(result).toEqual(1);
});

test("Check is fizz", () => {
  const result = solution.fizzBuzz(3);
  expect(result).toEqual("fizz");
});

test("Check is buzz", () => {
  const result = solution.fizzBuzz(5);
  expect(result).toEqual("buzz");
});

test("Check is fizzbuzz", () => {
  const result = solution.fizzBuzz(15);
  expect(result).toEqual("fizzbuzz");
});
