"use strict";

/*
Given array arr, your task is to find its middle, and, if it consists of two
elements, replace those elements with the value of middle. Return the resulting
array as the answer.
Example
For arr = [7, 2, 2, 5, 10, 7], the output should be
replaceMiddle(arr) = [7, 2, 7, 10, 7].
The middle consists of two elements, 2 and 5. These two elements should be
replaced with their sum, i.e. 7.
*/

function replaceMiddle(arr) {
  if (arr.length % 2) {
    return arr;
  } else {
    let even = arr.splice(arr.length/2-1, 2).reduce((a, b) => a + b);
    arr.splice(arr.length/2, 0, even);
    return arr;
  }
}


console.log(replaceMiddle([-5, -5, 10]));   // [-5, -5, 10]
console.log(replaceMiddle([2, 8]));         // [10]
console.log(replaceMiddle([9, 0, 15, 9]));  // [9, 15, 9]
