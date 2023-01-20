const removeFromArray = function(arr) {

    // First for loop runs for as many extra arguments given as parameters
    for (let i = 1; i < arguments.length; i++) {
        // 'j' for loop runs for the length of array, iterating over each
        // item in array and checking if it is equal to that extra argument
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === arguments[i]) {
                // if they are equal, arr.splice gets rid of that element
                arr.splice(j, 1);
            }
            }
        }
    return arr;
    };

// Do not edit below this line
module.exports = removeFromArray;
