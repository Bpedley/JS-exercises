"use strict";

/*
Given a string, output its longest prefix which contains only digits.
Example:
For inputString="123aa1", the output should be
longestDigitsPrefix(inputString) = "123".
*/

function longestDigitsPrefix(inputString) {
  let long = inputString.match(/^\d+/);
  return long == null ? "" : long[0];
}


console.log(longestDigitsPrefix("0123456789")); // "0123456789"
console.log(longestDigitsPrefix("12abc34")); // "12"
console.log(longestDigitsPrefix("the output is 42")); // "Empty"
console.log(longestDigitsPrefix("  3) always check for whitespaces")); // "Empty"
