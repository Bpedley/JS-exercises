"use strict";

/*
Given some integer, find the maximal number you can obtain by deleting exactly
one digit of the given number.
Example:
For n = 152, the output should be
deleteDigit(n) = 52;
For n = 1001, the output should be
deleteDigit(n) = 101.
*/

function deleteDigit(n) {
  let max = 0;
  let digits = String(n).slice().split("");
  let num = [];
  for (let i = 0; i < digits.length; i++) {
    num = digits.slice();
    num.splice(i, 1);
    if (num.join("") > max) {
      max = +num.join("");
    }
  }
  return max;
}


console.log(deleteDigit(10));       // 1
console.log(deleteDigit(222219));   // 22229
