"use strict";

/*
Check if all digits of the given integer are even.
Example:
For n = 248622, the output should be
evenDigitsOnly(n) = true;
For n = 642386, the output should be
evenDigitsOnly(n) = false.
*/

function evenDigitsOnly(n) {
  return String(n).split("").every(digit => digit % 2 == 0);
}


console.log(evenDigitsOnly(248842));  // true
console.log(evenDigitsOnly(1));       // false
console.log(evenDigitsOnly(8));       // true
console.log(evenDigitsOnly(2462487)); // false
