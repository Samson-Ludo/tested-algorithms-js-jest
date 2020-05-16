const { isString } = require("../util/validators");

const pairElement = (str) => {
  if (!isString(str)) {
    return "Input must be a string";
  }
  const arr = [];

  str.split("").map((item) => arr.push([item]));
  arr.map((item) => {
    return item[0] === "G"
      ? item.push("C")
      : item[0] === "C"
      ? item.push("G")
      : item[0] === "A"
      ? item.push("T")
      : item[0] === "T"
      ? item.push("A")
      : null;
  });

  return arr;
};

console.log(pairElement("GCG"));
