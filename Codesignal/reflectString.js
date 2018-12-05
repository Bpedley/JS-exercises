"use strict";

/*
Define an alphabet reflection as follows: a turns into z, b turns into y,
c turns into x, ..., n turns into m, m turns into n, ..., z turns into a.
Define a string reflection as the result of applying the alphabet reflection
to each of its characters. Reflect the given string.
Example:
For inputString = "name", the output should be
reflectString(inputString) = "mznv".
*/

function reflectString(inputString) {
  return inputString.split("").map(char => char = String.fromCharCode(122 - char.charCodeAt(0) + 97)).join("");
} 


console.log(reflectString("abyz"));       //"zyba"
console.log(reflectString("nnnnn"));      //"mmmmm"
console.log(reflectString("pqr"));        //"kji"
console.log(reflectString("codesignal")); //"xlwvhrtmzo"
