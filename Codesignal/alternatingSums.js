"use strict";

/*
You are given an array of positive integers - the weights of the people.
Return an array of two integers, where the first element is the total weight
of team 1, and the second element is the total weight of team 2 after the
division is complete.
Example:
For a = [50, 60, 60, 45, 70], the output should be
alternatingSums(a) = [180, 105].
*/

function alternatingSums(a) {
  let weigth1 = 0;
  let weigth2 = 0;
  for (let i = 0; i < a.length; i++) {
    if (i % 2 == 0) {
      weigth1 += a[i];
    } else {
      weigth2 += a[i];
    }
  }
  return [weigth1, weigth2];
}


console.log(alternatingSums([100, 50, 50, 100])); // [150, 150]
console.log(alternatingSums([100, 51, 50, 100])); // [150, 151]
console.log(alternatingSums([80]));               // [80, 0]
