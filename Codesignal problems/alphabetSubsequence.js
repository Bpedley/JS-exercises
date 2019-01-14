"use strict";

// Check whether the given string is a subsequence of the plaintext alphabet.
// For s = "effg" or s = "cdce", the output should be
// alphabetSubsequence(s) = false;
// For s = "ace" or s = "bxz", the output should be
// alphabetSubsequence(s) = true.


function alphabetSubsequence(s) {

  for (let i = 0; i < s.length - 1; i++) {

    if (s[i + 1].charCodeAt(0) <= s[i].charCodeAt(0)) {
      return false;
    }
  }

  return true;
}


console.log(alphabetSubsequence("effg")); // false
console.log(alphabetSubsequence("cdce")); // false
console.log(alphabetSubsequence("ace")); // false
console.log(alphabetSubsequence("bxz")); // false
