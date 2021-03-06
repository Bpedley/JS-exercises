"use strict";
/*
Perform a search and replace on the sentence using the arguments provided and
return the new sentence.
First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).
*/


function myReplace(str, before, after) {
  if (before[0] == before[0].toUpperCase()) {
    after = after[0].toUpperCase() + after.slice(1);
  }

  let regex = new RegExp(before,'g');
  return str.replace(regex, after);
}

// A quick brown fox leaped over the lazy dog
console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
