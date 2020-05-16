function sumPrimes(num) {
  if (num <= 0) return 0;

  const numArr = [1];
  let nextNum = 0;

  while ((nextNum = numArr[0] + 1) <= num) {
    numArr.unshift(nextNum);
  }
  const isPrime = (num) => {
    for (let i = 2; i < num; i++) if (num % i === 0) return false;
    return num > 1;
  };

  return numArr.filter((x) => isPrime(x)).reduce((a, b) => a + b);
}

console.log(sumPrimes(10));
