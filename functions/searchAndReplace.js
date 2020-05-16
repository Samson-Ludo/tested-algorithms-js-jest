// Question here:
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace

//My solution

//helper validator function
const { isString } = require("../util/validators");
//import helperFunctions
const { initialIsCapital, capitalize } = require("../util/helperFunctions");

//Main funciton
const myReplace = (str, before, after) => {
  if (!isString(str) && !isString(before) && !isString(after)) {
    return "All Inputs must be strings";
  } else if (initialIsCapital(before)) {
    return str.replace(before, capitalize(after));
  }
  return str.replace(before, after);
};

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

module.exports = myReplace;
