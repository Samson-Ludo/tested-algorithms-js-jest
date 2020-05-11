// Question here:
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy

// My solution

const whatIsInAName = (collection, source) => {
  if (!Array.isArray(collection) && !isObject(source)) {
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

//helper function
const isObject = (val) => {
  if (val === null) {
    return false;
  }
  return Object.prototype.toString.call(val) === "[object Object]";
};

module.exports = whatIsInAName;
