/*
The goal of this exercise is to convert a string to a new string where 
each character in the new string is "(" if that character appears only once 
in the original string, or ")" if that character appears more than once in the 
original string. Ignore capitalization when determining if a character is a duplicate.

Examples:

"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
*/

function duplicateEncode(word) {
  const myObjt = {};
  word = word.split("").map((char) => {
    return char.toLowerCase();
  });

  for (let char of word) {
    if (myObjt[char]) {
      myObjt[char] += 1;
    } else {
      myObjt[char] = 1;
    }
  }

  return word.reduce((acc, char) => {
    if (myObjt[char] > 1) {
      return acc + ")";
    } else {
      return acc + "(";
    }
  }, "");
}

function duplicateEncode2(word) {
  return word
    .toLowerCase()
    .split("")
    .map(function (char, index, word) {
      return word.indexOf(char) == word.lastIndexOf(char) ? "(" : ")";
    })
    .join("");
}
