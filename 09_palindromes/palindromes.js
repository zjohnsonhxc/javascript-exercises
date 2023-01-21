const palindromes = function (str) {
  // make string lowercase, strip away any punctuation
  let lowercase = str.toLowerCase();
  console.log(lowercase);
  let punctuationless = lowercase.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  console.log(punctuationless);
  let finalString = punctuationless.replace(/\s{1,}/g, "");
  console.log(finalString);

  //create a variable with the reverse of the finalstring
  let reverseString = finalString.split("").reverse().join("");
  console.log(reverseString);

  // test if the two strings are the same
  if (finalString === reverseString) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
