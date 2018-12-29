"use strict";

/*
Find the leftmost digit that occurs in a given string.
Example:
For inputString = "var_1__Int", the output should be
firstDigit(inputString) = '1';
*/

function firstDigit(inputString) {
  return inputString.match(/\d/)[0];
}

console.log(firstDigit("q2q-q"));   // "2"
console.log(firstDigit("0ss"));     // "0"
console.log(firstDigit("_Aas_23")); // "2"
console.log(firstDigit("ok0"));     // "0"
