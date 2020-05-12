// Question here:
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy

// My solution
const { isArray, isObject } = require("../util/validators");

const whatIsInAName = (collection, source) => {
  if (!isArray(collection) && !isObject(source)) {
    return "collection and source must be an array and an object respectively";
  } else {
    let srcKeys = Object.keys(source);
    return collection.filter((obj) => {
      return srcKeys.every((key) => {
        return obj.hasOwnProperty(key) && obj[key] === source[key];
      });
    });
  }
};

module.exports = whatIsInAName;
