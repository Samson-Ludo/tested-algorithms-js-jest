// Question here:
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin

//My solution

const translatePigLatin = (str) => {
  const consonantRegex = /^[^aeiou]+/;

  if (!isString(str)) {
    //input validator
    return "Input must be a string";
  } else if (consonantRegex.test(str)) {
    //if  str begins with a consonant/cluster
    const myConsonants = str.match(consonantRegex);

    return str.replace(consonantRegex, "").concat(myConsonants) + "ay";
  }

  return str + "way"; //if  str begins with a vowel
};

//helper validator function
const isString = (value) => {
  return typeof value === "string" || value instanceof String;
};

module.exports = translatePigLatin;
