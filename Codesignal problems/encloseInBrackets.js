"use strict";

/* 
Given a string, enclose it in round brackets.
For inputString = "abacaba", the output should be
encloseInBrackets(inputString) = "(abacaba)". 
*/


function encloseInBrackets(inputString) {
  return `(${inputString})`;
}


console.log(encloseInBrackets("abacaba"));  // (abacaba)
console.log(encloseInBrackets("abcdef"));   // (abcdef)
console.log(encloseInBrackets("aaad"));     // (aaad)
console.log(encloseInBrackets("if"));       // (if)
