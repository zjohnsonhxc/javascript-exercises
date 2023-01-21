const sumAll = function(num1, num2) {
if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "ERROR";
  }

  if (num1 < 0 || num2 < 0) {
    return "ERROR";
  }

  let largeInteger = Math.max(num1, num2);
  let smallInteger = Math.min(num1, num2);
  let sum = 0;

  do {
    sum += smallInteger;
    smallInteger++;
  } while (smallInteger <= largeInteger);

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
