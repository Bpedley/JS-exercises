"use strict";
/*
Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both forward and
backward, ignoring punctuation, case, and spacing.
*/

function palindrome(str) {
  let regex = /[a-z0-9]+/ig;
  let matches = str.match(regex).map(i => i.toLowerCase());
  return matches.join("") == matches.map(word => word.split("").reverse().join("")).reverse().join("");
}


console.log(palindrome("eye"));                            // true
console.log(palindrome("_eye"));                            // true
console.log(palindrome("race car"));                        // true
console.log(palindrome("not a palindrome"));                // false
console.log(palindrome("A man, a plan, a canal. Panama"));  // true
console.log(palindrome("never odd or even"));               // true
console.log(palindrome("nope"));                            // false
console.log(palindrome("almostomla"));                      // false
console.log(palindrome("My age is 0, 0 si ega ym."));       // true
console.log(palindrome("1 eye for of 1 eye."));             // false
console.log(palindrome("0_0 (: /-\ :) 0-0"));               // true
console.log(palindrome("five|\_/|four"));                   // false
