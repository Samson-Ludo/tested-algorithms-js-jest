function palindrome(str) {
  //  ignoring punctuation, case, and spacing
  str = str
    .replace(/[^A-Za-z0-9]/g, "")
    .replace(/\s/g, "")
    .toLowerCase();

  let reverseStr = str.split("").reverse().join("");

  if (str === reverseStr) {
    return true;
  }
  return false;
}

console.log(palindrome("never odd or even"));
