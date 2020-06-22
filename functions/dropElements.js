const dropElements = (arr, func) => {
  return arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func) : arr.length);
};

console.log(
  dropElements([0, 1, 0, 1], function (n) {
    return n === 1;
  })
);
console.log(
  dropElements([1, 2, 3, 9, 2], function (n) {
    return n > 2;
  })
);
