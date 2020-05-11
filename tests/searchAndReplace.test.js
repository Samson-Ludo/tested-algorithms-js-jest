const myReplace = require("../functions/searchAndReplace");

test("sumAll function exists", () => {
  expect(typeof myReplace).toEqual("function");
});

test('Postive testing: myReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall"', () => {
  const str = "Let us go to the store";
  const before = "store";
  const after = "mall";
  expect(myReplace(str, before, after)).toEqual("Let us go to the mall");
});

test('Postive testing: myReplace("His name is Tom", "Tom", "john") should return "His name is John"', () => {
  const str = "His name is Tom";
  const before = "Tom";
  const after = "john";
  expect(myReplace(str, before, after)).toEqual("His name is John");
});

test("Negative testing: All Inputs must be strings", () => {
  const str = ["His name is Tom"];
  const before = ["Tom"];
  const after = ["john"];
  expect(myReplace(str, before, after)).toEqual("All Inputs must be strings");
});
