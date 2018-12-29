"use strict";

/*
Help Ratiorg by writing a function that returns the sum of numbers that appear
in the given inputString.
Example:
For inputString = "2 apples, 12 oranges", the output should be
sumUpNumbers(inputString) = 14.
*/

function sumUpNumbers(inputString) {
  let numbers = inputString.match(/\d+/g);
  if (numbers == null) {
    return 0;
  } else {
    return numbers.reduce((a, b) => +a + +b, 0);
  }
}


console.log(sumUpNumbers("123450"));                                                  // 123450
console.log(sumUpNumbers("Your payment method is invalid"));                          // 0
console.log(sumUpNumbers("no digits at all"));                                        // 0
console.log(sumUpNumbers("there are some (12) digits 5566 in this 770 string 239"));  // 6587
