"use strict";

/*
Ticket numbers usually consist of an even number of digits. A ticket number is
considered lucky if the sum of the first half of the digits is equal to the sum
of the second half.
Given a ticket number n, determine if it's lucky or not.
Example:
For n = 1230, the output should be isLucky(n) = true;
*/

function isLucky(n) {
  n = String(n).split("");
  if (n.length % 2 != 0) return false;
  let n1 = n.slice(0, n.length / 2).reduce((a, b) => +a + +b);
  let n2 = n.slice(n.length / 2).reduce((a, b) => +a + +b);
  return n1 == n2;
}


console.log(isLucky(239017)); // false
console.log(isLucky(134008)); // true
console.log(isLucky(261534)); // false
