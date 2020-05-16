//check if initial is capital
exports.initialIsCapital = (word) => {
  return word[0] !== word[0].toLowerCase();
};

//capitalize initial
exports.capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};
