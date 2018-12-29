"use strict";

/*
Check if the given string is a correct time representation of the 24-hour clock.
Example:
For time = "13:58", the output should be
validTime(time) = true;
For time = "25:51", the output should be
validTime(time) = false;
For time = "02:76", the output should be
validTime(time) = false.
*/

function validTime(time) {
  time = time.split(":");
  return time[0] < 24 && time[1] < 60 ? true : false;
}


console.log(validTime("24:00")); // false
console.log(validTime("02:61")); // false
console.log(validTime("27:00")); // false
console.log(validTime("19:66")); // false
console.log(validTime("12:31")); // true
console.log(validTime("09:56")); // true
