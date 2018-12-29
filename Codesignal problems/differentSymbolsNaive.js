"use strict";

/*
Given a string, find the number of different characters in it.
Example:
For s = "cabca", the output should be
differentSymbolsNaive(s) = 3.
There are 3 different characters a, b and c.
*/

function differentSymbolsNaive(s) {
  return new Set(s).si;
}


console.log(differentSymbolsNaive("aba"));          // 2
console.log(differentSymbolsNaive("ccccccccccc"));  // 1
console.log(differentSymbolsNaive("bcaba"));        // 3
console.log(differentSymbolsNaive("codesignal"));   // 10
