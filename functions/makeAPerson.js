var Person = function (firstAndLast) {
  // Complete the method below and implement the others similarly

  this.setFirstName = (first) => {
    firstAndLast.split(" ")[0] = first;
    this.first = first;
  };
  this.setLastName = (last) => {
    firstAndLast.split(" ")[1] = last;
    this.last = last;
  };
  this.setFullName = (firstAndLastName) => {
    firstAndLast = firstAndLastName;
    this.firstAndLastName = firstAndLastName;
  };

  this.getFullName = () => {
    return this.getFirstName() + " " + this.getLastName();
  };
  this.getFirstName = () => {
    if (typeof this.first != "undefined") {
      return this.first;
    }
    return firstAndLast.split(" ")[0];
  };
  this.getLastName = () => {
    if (typeof this.last != "undefined") {
      return this.last;
    }
    return firstAndLast.split(" ")[1];
  };

  return firstAndLast;
};

var bob = new Person("Bob Ross");
