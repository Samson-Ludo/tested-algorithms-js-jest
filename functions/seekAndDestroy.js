// Question here:
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy

// My solution
const { isArray } = require("../util/validators");

const destroyer = (arr, ...valsToRemove) => {
  if (!isArray(arr, ...valsToRemove)) {
    return "Input must be an array";
  }
  return arr.filter((item) => !valsToRemove.includes(item));
};

module.exports = destroyer;
