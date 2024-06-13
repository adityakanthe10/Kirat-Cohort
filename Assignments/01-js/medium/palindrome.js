/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

// nan
// [n,a,n]

function isPalindrome(str) {
  let compstr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let isPal = compstr.toLowerCase().split("").reverse().join("");
  // console.log(isPal);
  return isPal === compstr;
}

console.log(isPalindrome("@"));
console.log(isPalindrome("A man a plan a canal Panama"));
console.log(isPalindrome("Able, was I ere I saw Elba!"));
console.log(isPalindrome("level"));

module.exports = isPalindrome;
