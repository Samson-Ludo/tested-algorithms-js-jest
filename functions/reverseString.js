const { isString } = require("../util/validators");

const reverseString = (str) => {
  if (!isString(str)) {
    return "Input must be a string";
  }
  return str.split("").reverse().join("");
};
console.log(reverseString("hello"));

module.exports = reverseString;
