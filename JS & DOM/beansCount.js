"use strict";
/*
Напишите функцию countBs, которая принимает строку в качестве аргумента, и
возвращает количество символов “B”, содержащихся в строке.
Затем напишите функцию countChar, которая работает примерно как countBs,
только принимает второй параметр — символ, который мы будем искать в строке
(вместо того, чтобы просто считать количество символов “B”). Для этого
переделайте функцию countBs.
*/

function countBs(string) {
  let count = 0;
  
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i).toLowerCase() == "b") {
      count++;
    }
  }
  return count;
}

function countChar(string, char) {
  let count = 0;
  
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i).toLowerCase() == char.toLowerCase()) {
      count++;
    }
  }
  return count;
}


var var1 = document.createElement("p");
var1.textContent = "Count how many b's in a string: ";
var1.textContent += countBs("Curabitur orci ipsum, sagittis euismob vulputate imperdiet.");

var var2 = document.createElement("p");
var2.textContent = "Count how many times char appeared in a string: ";
var2.textContent += countChar("Curabitur orci ipsum, sagittis euismob vulputate imperdiet.", "i");

document.body.appendChild(var1);
document.body.appendChild(var2);
