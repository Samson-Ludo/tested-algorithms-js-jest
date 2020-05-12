// Question here:
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace

//My solution

//helper validator function
const { isString } = require("../util/validators");

//check if initial is capital
const initialIsCapital = (word) => {
  return word[0] !== word[0].toLowerCase();
};

//capitalize initial
const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

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
