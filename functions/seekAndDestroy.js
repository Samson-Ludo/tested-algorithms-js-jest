// Question here:
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy

// My solution

const destroyer = (arr, ...valsToRemove) => {
  if (!Array.isArray(arr, ...valsToRemove)) {
    return "Input must be an array";
  }
  return arr.filter((item) => !valsToRemove.includes(item));
};

// console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));

module.exports = destroyer;
