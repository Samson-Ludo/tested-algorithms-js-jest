const { isString } = require("../util/validators");

const pairElement = (str) => {
  if (!isString(str)) {
    return "Input must be a string";
  }
};
const converTotHTML = (str) => {
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };
  return str.replace(/[&<>"\']/g, (match) => htmlEntities[match]);
};

console.log(convertHTML("Dolce & Gabbana"));
