/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let Array1 = str1.toLowerCase().split("").sort().join("");
  let Array2 = str2.toLowerCase().split("").sort().join("");
  if (Array1 === Array2) {
    return true;
  } else {
    return false;
  }
}

// console.log(isAnagram("listen", "silent"));
module.exports = isAnagram;
