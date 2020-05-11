const spinalCase = require("../functions/spinalCase");

test("sumAll function exists", () => {
  expect(typeof spinalCase).toEqual("function");
});

test('Postive testing: spinalCase("thisIsSpinalTap") must equals "this-is-spinal-tap"', () => {
  const str = "thisIsSpinalTap";

  expect(spinalCase(str)).toEqual("this-is-spinal-tap");
});

test('Negative testing: spinalCase(["thisIsSpinalTap"]) must return "input must be a string"', () => {
  const str = ["thisIsSpinalTap"];

  expect(spinalCase(str)).toEqual("input must be a string");
});
