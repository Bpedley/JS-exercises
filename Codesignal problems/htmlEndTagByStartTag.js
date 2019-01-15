"use strict";

/*
You are implementing your own HTML editor. To make it more comfortable for
developers you would like to add an auto-completion feature to it.
Given the starting HTML tag, find the appropriate end tag which your editor
should propose.
Example
For startTag = "<button type='button' disabled>", the output should be
htmlEndTagByStartTag(startTag) = "</button>";
For startTag = "<i>", the output should be
htmlEndTagByStartTag(startTag) = "</i>". 
*/


function htmlEndTagByStartTag(startTag) {
  let match = startTag.match(/^<\w+/)[0].slice(1);
  return `</${match}>`;
}


console.log(htmlEndTagByStartTag("<button type='button' disabled>")); // </button>
console.log(htmlEndTagByStartTag("<i>"));                             // </i>
console.log(htmlEndTagByStartTag("<html>"));                          // </html>
console.log(htmlEndTagByStartTag("<li class='test'>"));               // </li>
