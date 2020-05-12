const reverseString = require("../functions/reverseString");

test("sumAll function exists", () => {
  expect(typeof reverseString).toEqual("function");
});

test('Postive testing: reverseString("hello") must equals "olleh"', () => {
  const str = "hello";
  expect(reverseString(str)).toEqual("olleh");
});

test("Negative testing: Input must be a string", () => {
  const str = ["hello"];
  expect(reverseString(str)).toEqual("Input must be a string");
});
