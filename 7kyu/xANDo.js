/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

function XO(str) {
  //code here
  str = str.toLowerCase();
  const myObj = {};
  for (let char of str) {
    if (!myObj[char]) {
      myObj[char] = 1;
    } else {
      myObj[char] += 1;
    }
  }
  return myObj.x === myObj.o;
}

// Another solution
function XO2(str) {
  str = str.toLowerCase();
  const myObj = {};

  for (let char of str) {
    if (!myObj[char]) {
      myObj[char] = 1;
    } else {
      myObj[char] += 1;
    }
  }

  return myObj["x"] === myObj["o"];
}

// Another solution
function XO3(str) {
  str = str.toLowerCase();
  const myObj = {};

  for (let char of str) {
    if (!myObj[char]) {
      myObj[char] = 1;
    } else {
      myObj[char] += 1;
    }
  }

  return myObj["x"] === myObj["o"];
}
