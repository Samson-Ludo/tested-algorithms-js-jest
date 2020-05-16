const { isString } = require("../util/validators");

const fearNotLetter = (str) => {
  if (!isString(str)) {
    return "Input must be a string";
  }
  var compare = str.charCodeAt(0);
  var missing;

  str.split("").map((char, idx) => {
    if (str.charCodeAt(idx) == compare) {
      ++compare;
    } else {
      missing = String.fromCharCode(compare);
    }
  });
  return missing;
};

console.log(fearNotLetter("abce"));
