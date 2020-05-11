const diffArray = require("../functions/diffArray");

test("sumAll function exists", () => {
  expect(typeof diffArray).toEqual("function");
});

test("Postive testing: diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5] must equals [4]", () => {
  const arr1 = [1, 2, 3, 5];
  const arr2 = [1, 2, 3, 4, 5];
  expect(diffArray(arr1, arr2)).toEqual([4]);
});

test("Negative testing: arr1 and arr2 must both be arrays", () => {
  const arr1 = { 1: "one", 2: "two", 3: "three", 5: "five" };
  const arr2 = { 1: "one", 2: "two", 3: "three", 4: "four", 5: "five" };
  expect(diffArray(arr1, arr2)).toEqual("arr1 and arr2 must both be arrays");
});
