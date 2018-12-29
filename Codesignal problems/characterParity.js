"use strict";

/*
Given a character, check if it represents an odd digit, an even digit or not a
digit at all.
Example:
For symbol = '5', the output should be characterParity(symbol) = "odd";
For symbol = '8', the output should be characterParity(symbol) = "even";
For symbol = 'q', the output should be characterParity(symbol) = "not a digit".
*/

function characterParity(symbol) {
  return isNaN(+symbol) ? "not a digit" : +symbol % 2 ? "odd" : "even";
}


console.log(characterParity("1")); // "odd"
console.log(characterParity("2")); // "even"
console.log(characterParity("7")); // "odd"
console.log(characterParity("9")); // "odd"
