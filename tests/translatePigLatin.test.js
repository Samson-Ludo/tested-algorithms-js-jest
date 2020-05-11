const translatePigLatin = require("../functions/translatePigLatin");

test("sumAll function exists", () => {
  expect(typeof translatePigLatin).toEqual("function");
});

test('Postive testing: translatePigLatin("rhythm") must equals "rhythmay"', () => {
  const str = "rhythm";
  expect(translatePigLatin(str)).toEqual("rhythmay");
});

test('Postive testing: translatePigLatin("algorithm") must equals "algorithmway"', () => {
  const str = "algorithm";
  expect(translatePigLatin(str)).toEqual("algorithmway");
});

test('Postive testing: translatePigLatin("schwartz") must equals "artzschway"', () => {
  const str = "schwartz";
  expect(translatePigLatin(str)).toEqual("artzschway");
});

test("Negative testing: Input must be a string", () => {
  const str = ["schwartz"];
  expect(translatePigLatin(str)).toEqual("Input must be a string");
});
