"use strict";

/* 
Let's call product(x) the product of x's digits. Given an array of integers a,
calculate product(x) for each x in a, and return the number of distinct results
you get.

For a = [2, 8, 121, 42, 222, 23], the output should be
uniqueDigitProducts(a) = 3.

Here are the products of the array's elements:
2: product(2) = 2;
8: product(8) = 8;
121: product(121) = 1 * 2 * 1 = 2;
42: product(42) = 4 * 2 = 8;
222: product(222) = 2 * 2 * 2 = 8;
23: product(23) = 2 * 3 = 6.
As you can see, there are only 3 different products: 2, 6 and 8.
*/


function uniqueDigitProducts(a) {
  let unique = new Set();
  
  for (let i = 0; i < a.length; i++) {
    if (String(a[i]).length == 1) {
      unique.add(a[i]);
    } else {
      unique.add(Number(String(a[i]).split("").reduce((a, b) => a * b)));
    }
  }
  
  return unique.size;
}


console.log(uniqueDigitProducts([2, 8, 121, 42, 222, 23]));                               // 3
console.log(uniqueDigitProducts([239]));                                                  // 1
console.log(uniqueDigitProducts([100, 101, 111]));                                        // 2
console.log(uniqueDigitProducts([100, 23, 42, 239, 22339, 9999999, 456, 78, 228, 1488])); // 10
