"use strict";

/*
Call two arms equally strong if the heaviest weights they each are able to
lift are equal.
Call two people equally strong if their strongest arms are equally strong
(the strongest arm can be both the right and the left), and so are their
weakest arms.
Given your and your friend's arms' lifting capabilities find out if you two
are equally strong.
Example:
For yourLeft = 10, yourRight = 15, friendsLeft = 15, and friendsRight = 10,
the output should be
areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = true;
*/

function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  if ((yourLeft == friendsLeft || yourLeft == friendsRight) && 
      (yourRight == friendsRight || yourRight == friendsLeft)) {
    return true;
  }
  return false;
}


console.log(areEquallyStrong(15, 10, 15, 10));  // true
console.log(areEquallyStrong(15, 10, 15, 9));   // false
console.log(areEquallyStrong(10, 5, 5, 10));    // true
console.log(areEquallyStrong(10, 15, 5, 20));   // false
