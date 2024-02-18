/*
Write an algorithm that takes an array and moves all of the zeros to the end, 
preserving the order of the other elements.

Examples:

[false,1,0,1,2,0,1,3,"a"] ==> [false,1,1,2,1,3,"a",0,0]
*/

function moveZeros(arr) {
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[index] = arr[i];
      index++;
    }
  }

  while (index < arr.length) {
    arr[index] = 0;
    index++;
  }

  return arr;
}

// Noice!!!!
function moveZeros2(arr) {
  return arr.sort((a, b) => (b === 0 ? -1 : 0));
}

// Noice!!!!
var moveZeros3 = function (arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
      arr.push(0);
    }
  }
  return arr;
};
