"use strict";

/*
Given an integer n, return the largest number that contains exactly n digits.
Example
For n = 2, the output should be
largestNumber(n) = 99.
*/


function largestNumber(n) {
  return Number("9".repeat(n));
}


console.log(largestNumber(2)); // 99
console.log(largestNumber(1)); // 9
console.log(largestNumber(7)); // 9999999
console.log(largestNumber(4)); // 9999
