"use strict";

/*
Given a string, replace each its character by the next one in the
English alphabet (z would be replaced by a).
Example:
For inputString = "crazy", the output should be
alphabeticShift(inputString) = "dsbaz".
*/

function alphabeticShift(inputString) {
  let arr = inputString.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "z") {
      arr[i] = "a";
    } else {
      arr[i] = String.fromCharCode(arr[i].charCodeAt(0) + 1);
    }
  }
  return arr.join("");
}


console.log(alphabeticShift("aaaabbbccd")); // "bbbbcccdde"
console.log(alphabeticShift("fuzzy"));      // "gvaaz"
console.log(alphabeticShift("codesignal")); // "dpeftjhobm"
console.log(alphabeticShift("z"));          // "a"
