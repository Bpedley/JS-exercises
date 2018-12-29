"use strict";

/*
Given a valid email address, find its domain part.
Example:
For address = "prettyandsimple@example.com", the output should be
findEmailDomain(address) = "example.com";
For address = "<>[]:,;@"!#$%&*+-/=?^_{}| ~.a"@example.org",
the output should be findEmailDomain(address) = "example.org".
*/

function findEmailDomain(address) {
  // return address.match(/\@\w+\.?\w+$/)[0].slice(1);
  return address.split("@").slice(-1)[0];
}


console.log(findEmailDomain("someaddress@yandex.ru"));  // "yandex.ru"
console.log(findEmailDomain("\" \"@xample.org"));       // "xample.org"
