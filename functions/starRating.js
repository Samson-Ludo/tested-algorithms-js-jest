function StarRating(str) {
  let num = parseFloat(str);
  // levels = {0: 'empty', 0.5: 'half', 1.0: 'full'}
  let starAry = ["empty", "empty", "empty", "empty", "empty"];
  // keep track of starIndex
  let starIdx = 0;

  // if greater than 1
  while (num > 1) {
    starAry[starIdx] = "full";
    num -= 1;
    starIdx += 1;
  }

  if (num > 0.24) {
    // check if num rounds to half
    if (num <= 0.75) {
      starAry[starIdx] = "half";
      starIdx += 1;
    } else {
      // else rounds to full
      starAry[starIdx] = "full";
    }
  }
  return starAry.join(" ");
}

console.log(StarRating("4.2"));

//or

function StarRating(str) {
  let num = parseFloat(str);
  // levels = {0: 'empty', 0.5: 'half', 1.0: 'full'}
  let starAry = ["empty", "empty", "empty", "empty", "empty"];
  // keep track of starIndex
  let starIdx = 0;

  // if greater than 1
  while (num > 1) {
    starAry[starIdx] = "full";
    num -= 1;
    starIdx += 1;
  }

  if (num > 0.24 && num <= 0.75) {
    starAry[starIdx] = "half";
    starIdx += 1;
  }

  if (num >= 0.75) {
    starAry[starIdx] = "full";
    starIdx += 1;
  }
  return starAry.join(" ");
}

console.log(StarRating("4.2"));
