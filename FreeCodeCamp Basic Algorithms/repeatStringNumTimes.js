"use strict";

/*
Repeat a given string str (first argument) for num times (second argument).
Return an empty string if num is not a positive number.
*/


function repeatStringNumTimes(str, num) {
  // return num > 0 ? str.repeat(num) : "";
  return num < 0 ? "" : num == 1 ? str : str + repeatStringNumTimes(str, num - 1);
}


repeatStringNumTimes("abc", 3); // abcabcabc
