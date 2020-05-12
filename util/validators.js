exports.isArray = (arr) => {
  return Array.isArray(arr);
};

exports.isString = (value) => {
  return typeof value === "string" || value instanceof String;
};

exports.isInteger = (value) => {
  return Number.isInteger(value);
};

exports.isObject = (val) => {
  if (val === null) {
    return false;
  }
  return Object.prototype.toString.call(val) === "[object Object]";
};
