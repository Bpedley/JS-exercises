"use strict";

/*
Compare two arrays and return a new array with any items only found in one of
the two given arrays, but not both. In other words, return the symmetric
difference of the two arrays.
*/


function diffArray(arr1, arr2) {
  var newArr = [];

  function checkArr(arr1, arr2) {
    arr1.filter((el) => arr2.includes(el) ? null : newArr.push(el));
  }

  checkArr(arr1, arr2);
  checkArr(arr2, arr1);

  return newArr;
}


console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); // 4
