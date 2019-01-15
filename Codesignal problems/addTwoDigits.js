"use strict";

/* 
You are given a two-digit integer n. Return the sum of its digits.
Example
For n = 29, the output should be
addTwoDigits(n) = 11.
*/


function addTwoDigits(n) {
  return String(n).split("").reduce((a, b) => +a + +b);
}


console.log(addTwoDigits(29)); // 11
console.log(addTwoDigits(48)); // 12
console.log(addTwoDigits(10)); // 1
console.log(addTwoDigits(25)); // 7
