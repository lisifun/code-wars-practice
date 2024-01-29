/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

Examples:

[ 1, 1, 1, 2, 1, 1 ] => 2
[ 0, 0, 0.55, 0, 0 ] => 0.55
*/

function findUniq(arr) {
  const myObjt = {};
  for (let i = 0; i < arr.length; i++) {
    if (myObjt[arr[i]]) {
      myObjt[arr[i]] += 1;
    } else {
      myObjt[arr[i]] = 1;
    }
  }
  console.log(myObjt);

  for (let key in myObjt) {
    if (myObjt[key] === 1) {
      return Number(key);
    }
  }
}
