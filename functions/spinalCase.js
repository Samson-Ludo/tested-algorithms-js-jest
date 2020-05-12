// Question here:
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case

//My solution
const { isString } = require("../util/validators");

const spinalCase = (str) => {
  //validate input
  if (!isString(str)) {
    return "input must be a string";
  }

  //change low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

  //change space and underscore to dahs
  return str.toLowerCase().replace(/\s+|_+/g, "-");
};

module.exports = spinalCase;
