const uniteUniqueNumbers = (...arr) => {
  //turn multiple arrays into one array of numbers
  const numArray = arr
    .join(",")
    .split(",")
    .map((num) => Number(num));

  //remove duplicate numbers
  return numArray.filter((num, idx) => numArray.indexOf(num) === idx);
};

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
