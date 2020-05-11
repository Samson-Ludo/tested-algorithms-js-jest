const destroyer = require("../functions/seekAndDestroy");

test("sumAll function exists", () => {
  expect(typeof destroyer).toEqual("function");
});

test("Postive testing: destroyer([3, 5, 1, 2, 2], 2, 3, 5) must equals [1]", () => {
  expect(destroyer([3, 5, 1, 2, 2], 2, 3, 5)).toEqual([1]);
});

test("Negative testing: input must be an array", () => {
  expect(destroyer("something", "something to be destroyed")).toEqual(
    "Input must be an array"
  );
});
