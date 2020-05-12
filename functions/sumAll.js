//Question here: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range

// My solution:
const { isArray, isInteger } = require("../util/validators");

const sumAll = (arr) => {
  if (!isArray(arr) && !isInteger(arr[0]) && !isInteger(arr[1])) {
    return `${arr}  must be an array and ${arr[0]} and ${arr[1]} must be numbers`;
  } else {
    const startNum = arr[0];
    const endNum = arr[1];

    const numCount = Math.abs(startNum - endNum) + 1;
    const sum = ((startNum + endNum) * numCount) / 2;

    return sum;
  }
};

module.exports = sumAll;
