"use strict";

/*
Given an array arr, swap its first and last elements and return the resulting array.
Example:
For arr = [1, 2, 3, 4, 5], the output should be
firstReverseTry(arr) = [5, 2, 3, 4, 1].
*/

function firstReverseTry(arr) {
  if (arr.length > 1) {
    let first = arr.shift();
    return arr.splice(-1, 1).concat(arr.slice(), first);
  } else {
    return arr;
  }
}


console.log(firstReverseTry([]));
// []
console.log(firstReverseTry([239]));
// [239]
console.log(firstReverseTry([23, 54, 12, 3, 4, 56, 23, 12, 5, 324]));
// [324, 54, 12, 3, 4, 56, 23, 12, 5, 23]
