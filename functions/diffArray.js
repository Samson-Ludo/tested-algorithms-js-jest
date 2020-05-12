// Question here:
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays

// My solution
const { isArray } = require("../util/validators");

const diffArray = (arr1, arr2) => {
  if (!isArray(arr1) && !isArray(arr2)) {
    return "arr1 and arr2 must both be arrays";
  } else {
    const mergedArray = arr1.concat(...arr2);

    const diff = mergedArray.filter((x) => {
      if (!arr1.includes(x) || !arr2.includes(x)) {
        return x;
      }
    });
    return diff;
  }
};

module.exports = diffArray;
