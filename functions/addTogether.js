function addTogether(first, second) {
  if (typeof first !== "number") { //if first val is not number, undefined
    return undefined;
  }
  
  //create a function that returns sum of first and 
  const sum = (second) => {
    return typeof second === "number" ? first + second : undefined 
  }


  return typeof second === "undefined" ? (second) => sum(second) : sum(second);
}

console.log(addTogether(5)(7))
