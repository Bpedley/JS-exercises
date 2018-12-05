"use strict";

/*
Given a string, find out if it satisfies the IPv4 address naming rules.
Example:
For inputString = "172.16.254.1", the output should be
isIPv4Address(inputString) = true;
For inputString = "172.316.254.1", the output should be
isIPv4Address(inputString) = false.
*/

function isIPv4Address(inputString) {
  let regex = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
  if (regex.test(inputString)) {
    inputString = inputString.split(".");
    for (let i = 0; i < inputString.length; i++) {
      if ((inputString[i] < 0 || inputString[i] > 255)) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}


console.log(isIPv4Address("172.316.254.1"));    // false
console.log(isIPv4Address(".254.255.0"));       // false
console.log(isIPv4Address("1.1.1.1a"));         // false
console.log(isIPv4Address("0.254.255.0"));      // true
