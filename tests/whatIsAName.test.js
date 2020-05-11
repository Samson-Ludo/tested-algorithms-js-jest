const whatIsInAName = require("../functions/whatIsAName");

test("sumAll function exists", () => {
  expect(typeof whatIsInAName).toEqual("function");
});

test('Postive testing: whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) should return [{ first: "Tybalt", last: "Capulet" }]', () => {
  const collection = [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" },
  ];
  const source = { last: "Capulet" };
  expect(whatIsInAName(collection, source)).toEqual([
    { first: "Tybalt", last: "Capulet" },
  ]);
});

test("Negative testing: collection and source must be an array and object respectively", () => {
  const collection = {
    num1: { first: "Romeo", last: "Montague" },
    num2: { first: "Mercutio", last: null },
    num3: { first: "Tybalt", last: "Capulet" },
  };
  const source = ["last", "Capulet"];
  expect(whatIsInAName(collection, source)).toEqual(
    "collection and source must be an array and an object respectively"
  );
});
