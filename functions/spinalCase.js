// Question here:
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case

//My solution

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

//helper function for checking if value is string
const isString = (value) => {
  return typeof value === "string" || value instanceof String;
};

module.exports = spinalCase;
