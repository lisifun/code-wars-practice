/*
You are going to be given a word. Your job is to return the middle 
character of the word. If the word's length is odd, return the middle character. 
If the word's length is even, return the middle 2 characters.

Examples:

"test" ===> "es"
"testing" ===> "t"
"middle" ===> "dd"
"A" ===> "A"
*/

function getMiddle(s) {
  return s.length % 2 === 0
    ? s.slice(s.length / 2 - 1, s.length / 2 + 1)
    : s[Math.floor(s.length / 2)];
}

// Another solution
function getMiddle2(s) {
  return s.length % 2 === 0
    ? s[s.length / 2 - 1] + s[s.length / 2]
    : s[Math.floor(s.length / 2)];
}
