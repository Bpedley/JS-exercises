"use strict";
/* 
Translate the provided string to pig latin.
Pig Latin takes the first consonant (or consonant cluster) of an English word,
moves it to the end of the word and suffixes an "ay".
If a word begins with a vowel you just add "way" to the end.
Input strings are guaranteed to be English words in all lowercase.
*/


function translatePigLatin(str) {
  let firstVowel = str.match(/[aeiou]/);
  
  if (firstVowel) {
    let vowelIndex = firstVowel.index;

    if (vowelIndex == 0) {
      return str + "way";
    } else {
      return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";
    }

  }

  return str + "ay";
}

console.log(translatePigLatin("california")); // aliforniacay
console.log(translatePigLatin("glove"));      // oveglay
console.log(translatePigLatin("algorithm"));  // algorithmway
