"use strict";

/*
Given integers a and b, determine whether the following pseudocode results in
an infinite loop.
Example:
For a = 2 and b = 6, the output should be isInfiniteProcess(a, b) = false;
For a = 2 and b = 3, the output should be isInfiniteProcess(a, b) = true.
*/

function isInfiniteProcess(a, b) {
  if (a == b) {
    return 0;
  } else if (Math.abs(a - b) == 1) {
    return true;
  }
  return a > b ? true : a < b && ((b - a) % 2 == 1) ? true: false;
}


console.log(isInfiniteProcess(2, 3));   // true
console.log(isInfiniteProcess(2, 10));  // false
console.log(isInfiniteProcess(3, 1));   // true
console.log(isInfiniteProcess(5, 10));  // true
