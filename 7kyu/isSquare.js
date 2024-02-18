/*
You like building blocks. You especially like building blocks that 
are squares. And what you even like more, is to arrange them into a 
square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, 
you end up with an ordinary rectangle! Those blasted things! If you 
just had a way to know, whether you're currently working in vain… Wait! 
That's it! You just have to check if your number of building blocks is a 
perfect square.
*/

var isSquare = function (n) {
  return n ** 0.5 % 1 === 0;
};

// Another solution
var isSquare2 = function (n) {
  return Number.isInteger(n ** 0.5);
};
