/*
Complete the solution so that it reverses the string passed into it.

Examples

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

function reverseStr(str) {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  return reverseStr;
}
