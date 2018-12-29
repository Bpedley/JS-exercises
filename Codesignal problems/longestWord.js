"use strict";

/*
Define a word as a sequence of consecutive English letters. Find the longest
word from the given string.
Example:
For text = "Ready, steady, go!", the output should be
longestWord(text) = "steady".
*/

function longestWord(text) {
  return text.match(/[a-z]+/gi).sort((a, b) => b.length - a.length)[0];
}


console.log(longestWord("Ready[[[, steady, go!"));                          // "steady"
console.log(longestWord("ABCd"));                                           // "ABCd"
console.log(longestWord("To be or not to be"));                             // "not"
console.log(longestWord("You are the best!!!!!!!!!!!! CodeFighter ever!")); // "CodeFighter"
