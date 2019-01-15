"use strict";

/*
Given an array of integers, find the maximal absolute difference between any
two of its adjacent elements.
Example:
For inputArray = [2, 4, 1, 0], the output should be
arrayMaximalAdjacentDifference(inputArray) = 3.
*/

function arrayMaximalAdjacentDifference(inputArray) {
  let max = 0;
  let current;
  
  for (let i = 0; i < inputArray.length - 1; i++) {
    current = Math.abs(inputArray[i]-inputArray[i+1]);
    if (current > max) max = current;
  }

  return max;
}


console.log(arrayMaximalAdjacentDifference([1, 1, 1, 1]));        // 0
console.log(arrayMaximalAdjacentDifference([-1, 4, 10, 3, -2]));  // 7
console.log(arrayMaximalAdjacentDifference([10, 11, 13]));        // 2
