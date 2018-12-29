"use strict";

/*
Given the string, check if it is a palindrome.
Example
For inputString = "aabaa", the output should be
checkPalindrome(inputString) = true;
For inputString = "abac", the output should be
checkPalindrome(inputString) = false;
For inputString = "a", the output should be
checkPalindrome(inputString) = true.
*/

function checkPalindrome(inputString) {
  return inputString === inputString.split("").reverse().join("");
}


console.log(checkPalindrome("aabaa"));          // true
console.log(checkPalindrome("abac"));           // false
console.log(checkPalindrome("abacaba"));        // true
console.log(checkPalindrome("zzzazzazz"));      // false
