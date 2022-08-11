const Solution = require("./Solution");
const solution = new Solution();

test("no birthdate", () => {
  const birthday = "1992/02/26";
  const result = solution.email(birthday);

  expect(result).toEqual([]);
});

test("has birthdate", () => {
  const birthday = "2000/01/01";
  const greeting = [`Happy birthday, dear Armstrong!`];
  const result = solution.email(birthday);

  expect(result).toEqual(greeting);
});

test("invalid date", () => {
  const birthday = "";
  const result = solution.email(birthday);

  expect(result).toEqual([]);
});
