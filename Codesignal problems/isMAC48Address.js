"use strict";

/*
Your task is to check by given string inputString whether it corresponds to
MAC-48 address or not.
Example:
For inputString = "00-1B-63-84-45-E6", the output should be
isMAC48Address(inputString) = true;
For inputString = "Z1-1B-63-84-45-E6", the output should be
isMAC48Address(inputString) = false;
*/

function isMAC48Address(inputString) {
  let regex = /^([0-9A-F]{2}-){5}[0-9A-F]{2}$/;
  return regex.test(inputString);
}


console.log(isMAC48Address("not a MAC-48 address"));  // false
console.log(isMAC48Address("FF-FF-FF-FF-FF-FF"));     // true
console.log(isMAC48Address("00-00-00-00-00-00"));     // true
console.log(isMAC48Address("G0-00-00-00-00-00"));     // false
