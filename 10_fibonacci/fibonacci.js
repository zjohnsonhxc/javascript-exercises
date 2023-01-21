const fibonacci = function(num) {
    num = Number(num);
    // catch weird corner cases that later formula will spit out wrong
    if (num === NaN || num < 0) {
        return "OOPS";
    } else if (num === 1) {
        return 1;
    } else if (num === 0) {
        return 0;
    }

    // fibonacci formula for everything over 1 that is a #
    let num1 = 0;
    let num2 = 1;
    let newNum;
    for (let i = 1; i < num; i++) {
        newNum = num1 + num2;
        num1 = num2;
        num2 = newNum;
    }
    return newNum;
};

// Do not edit below this line
module.exports = fibonacci;
