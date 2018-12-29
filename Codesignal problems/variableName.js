"use strict";

/*
Correct variable names consist only of English letters, digits and underscores
and they can't start with a digit.
Check if the given string is a correct variable name.
Example:
For name = "var_1__Int", the output should be
variableName(name) = true;
For name = "qq-q", the output should be
variableName(name) = false;
*/

function variableName(name) {
  let regex = /^[a-z_]+[a-z0-9_]*/i;
  return regex.test(name);
}


console.log(variableName("2w2"));         // false
console.log(variableName(" variable"));   // false
console.log(variableName("va[riable0"));  // false
console.log(variableName("variable0"));   // true
console.log(variableName("_Aas_23"));     // true
