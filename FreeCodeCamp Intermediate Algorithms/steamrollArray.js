"use strict";

// Flatten a nested array. You must account for varying levels of nesting.


function steamrollArray(arr) {
  let arrNew = [].concat(...arr);
  return arrNew.some(Array.isArray) ? steamrollArray(arrNew) : arrNew;
}

steamrollArray([1, [2], [3, [[4]]]]); // [1, 2, 3, 4]
