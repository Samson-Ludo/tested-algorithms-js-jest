function sym(args) {
  const diffInFirst2Arr = diffInArr(arguments[0], arguments[1]);

  let result = diffInFirst2Arr;

  if (arguments.length === 2) {
    return [...new Set(result)];
  } else {
    for (let i = 1; i + 1 < arguments.length; i++) {
      result = diffInArr(result, arguments[i + 1])
    }
    return [...new Set(result)]
  }
}

function diffInArr(arr1, arr2) {
  const x = arr1.filter(x => !arr2.includes(x));
  const y = arr2.filter(x => !arr1.includes(x));

  return x.concat(y);
}


// sym([1, 2, 3], [5, 2, 1, 4]);
// sym([1, 2, 5], [2, 3, 5], [3, 4, 5])
// sym([1, 2, 5], [2, 3, 5], [3, 4, 5])
