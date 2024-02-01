/*
Write a function that takes an array of numbers (integers for the tests) and a target number. 
It should find two different items in the array that, when added together, give the target value. 
The indices of these items should then be returned in an array [index1, index2].

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will
be numbers; target will always be the sum of two different items from that array).


Examples:

numbers = [1, 2, 3]; target = 4 ==> [0, 2] or [2, 0]
numbers = [3, 2, 4]; target = 6 ==> [1, 2] or [2, 1]
 */

function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }
}
