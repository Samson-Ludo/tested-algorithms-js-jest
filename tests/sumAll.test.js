const sumAll = require("../functions/sumAll");

test("sumAll function exists", () => {
  expect(typeof sumAll).toEqual("function");
});

test("Postive testing: sumAll([1, 4]) must equals 10", () => {
  const arr = [1, 4];
  expect(sumAll(arr)).toEqual(10);
});

test("Negative testing: input must be an array", () => {
  const arr = { 1: "one", 2: "four" };

  expect(sumAll(arr)).toEqual(
    `${arr}  must be an array and ${arr[0]} and ${arr[1]} must be numbers`
  );
});

test("input array must be only numbers", () => {
  const arr = ["one", "four"];

  expect(sumAll(arr)).toEqual(NaN);
});
