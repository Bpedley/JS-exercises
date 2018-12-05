"use strict";

/*
Given a rectangular matrix of characters, add a border of asterisks(*) to it.
Example:  For picture = ["abc",
                         "ded"]
the output should be  addBorder(picture) = ["*****",
                                            "*abc*",
                                            "*ded*",
                                            "*****"]
*/

function addBorder(picture) {
  let arr = [];
  arr.push("*".repeat(picture[0].length + 2));
  for (let i = 0; i < picture.length; i++) {
    arr.push(`*${picture[i]}*`);
  }
  arr.push("*".repeat(picture[0].length + 2));
  return arr;
}


console.log(addBorder(["a"]));
// ["***", 
//  "*a*", 
//  "***"]
console.log(addBorder(["aa", "**", "zz"]));
// ["****",
//  "*aa*",
//  "****",
//  "*zz*",
//  "****"]
