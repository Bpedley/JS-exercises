"use strict";

/*
Fill in the object constructor with the following methods below:
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method.
The methods that take an argument must accept only one argument and it has to
be a string.
These methods must be the only available means of interacting with the object.
*/


let Person = function(firstAndLast) {
  let fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };
  
  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function(name) {
    fullName = name;
  };

};

var bob = new Person('Bob Ross');
bob.getFirstName();                 // Bob
bob.getLastName();                  // Ross
bob.getFullName();                  // Bob Ross
bob.setFirstName("Haskell");
bob.getFullName();                  // Haskell Ross
bob.setLastName("Curry");
bob.getFullName();                  // Haskell Curry
bob.setFullName("Haskell Curry");
bob.getFullName();                  // Haskell Curry
bob.setFullName("Haskell Curry");
bob.getFirstName();                 // Haskell
bob.setFullName("Haskell Curry");
bob.getLastName();                  // Curry
