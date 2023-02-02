function findTheOldest(array) {
  const newPeople = array.sort(function (a, b) {
    // if no death, use today's date to find age
    if (!a.yearOfDeath) {
      a.yearOfDeath = new Date().getFullYear();
    }

    if (!b.yearOfDeath) {
      b.yearOfDeath = new Date().getFullYear();
    }

    // sort the oldest to the top of the array
    if (a.yearOfDeath - a.yearOfBirth < b.yearOfDeath - b.yearOfBirth) {
      return 1;
    } else {
      return -1;
    }
  });
  // return the first in the array, which is the oldest
  return newPeople[0];
}

// Do not edit below this line
module.exports = findTheOldest;
