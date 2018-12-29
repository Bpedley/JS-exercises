"use strict";

/*
An array is called smooth if its first and its last elements are equal to one
another and to the middle. Given an array arr, determine if it is smooth or not.
Example
For arr = [7, 2, 2, 5, 10, 7], the output should be
isSmooth(arr) = true.
The first and the last elements of arr are equal to 7, and its middle also
equals 2 + 5 = 7. Thus, the array is smooth and the output is true.
*/

function isSmooth(arr) {
  if (arr.length % 2) {
    return arr[parseInt(arr.length / 2)] == arr[0] &&
           arr[parseInt(arr.length / 2)] == arr.slice(-1);
  } else {
    return arr[arr.length / 2] + arr[arr.length / 2 - 1] == arr[0] && 
           arr[arr.length / 2] + arr[arr.length / 2 - 1] == arr.slice(-1);
  }
}


console.log(isSmooth([-5, -5, 10]));                          // false
console.log(isSmooth([4, 2]));                                // false
console.log(isSmooth([-12, 34, 40, -5, -12, 4, 0, 0, -12]));  // true
