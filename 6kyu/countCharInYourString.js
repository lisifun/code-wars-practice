/*
The main idea is to count all the occurring characters in a string. 
What if the string is empty? Then the result should be empty object literal, {}.

Examples:

'aba' => {'a':2, 'b':1}
'paul mc' => {'p':1, 'a':1, 'u':1, 'l':1, 'm':1, 'c':1,}
*/

function count(string) {
  const myObjt = {};

  for (let char of string) {
    if (myObjt[char]) {
      myObjt[char] += 1;
    } else {
      myObjt[char] = 1;
    }
  }

  return myObjt;
}
