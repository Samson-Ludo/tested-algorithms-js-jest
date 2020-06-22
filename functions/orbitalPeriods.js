const { isArray } = require("../util/validators");

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const PI = 3.1415926535;
  const getPeriod = (avgAlt) => {
    let T = 2 * PI * Math.sqrt(Math.pow(avgAlt + earthRadius, 3) / GM);
    return Math.round(T);
  };

  if (!isArray(arr)) {
    return "input must be an array";
  }

  let newArr = [];
  arr.map((element) => {
    let name = element["name"];
    let avgAlt = element["avgAlt"];

    let newElem = { name, orbitalPeriod: getPeriod(avgAlt) };
    newArr.push(newElem);
  });

  console.log(newArr);
  return newArr;
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
orbitalPeriod([
  { name: "iss", avgAlt: 413.6 },
  { name: "hubble", avgAlt: 556.7 },
  { name: "moon", avgAlt: 378632.553 },
]);
