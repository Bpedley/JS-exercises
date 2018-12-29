"use strict";

/*
Given an array of integers, find the pair of adjacent elements that has the
largest product and return that product.
Example:
For inputArray = [3, 6, -2, -5, 7, 3], the output should be
adjacentElementsProduct(inputArray) = 21.
7 and 3 produce the largest product.
*/

function adjacentElementsProduct(inputArray) {
  let biggestSum = inputArray[0] * inputArray[1];
  for (let i = 1; i < inputArray.length - 1; i++) {
    if (inputArray[i] * inputArray[i+1] > biggestSum) {
      biggestSum = inputArray[i] * inputArray[i+1];
    }
  }
  return biggestSum;
}


console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4]));         // 6
console.log(adjacentElementsProduct([1, 2, 3, 0]));               // 6
console.log(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48])); // 50
