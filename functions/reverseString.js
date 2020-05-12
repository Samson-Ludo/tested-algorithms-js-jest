const { isString } = require("../util/validators");

const reverseString = (str) => {
  if (!isString(str)) {
    return "Input must be a string";
  }
  return str.split("").reverse().join("");
};

module.exports = reverseString;
