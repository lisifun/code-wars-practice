/*
A Narcissistic Number (or Armstrong Number) is a positive number which is the sum 
of its own digits, each raised to the power of the number of digits in a given base. 
In this Kata, we will restrict ourselves to decimal (base 10).

Examples:

153 (3 digits) => 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153  => true
1652 (4 digits) =>  1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938 => false
*/

function narcissistic(value) {
  const len = String(value).length;
  return (
    value ===
    String(value)
      .split("")
      .reduce((acc, num) => {
        return acc + Number(num) ** len;
      }, 0)
  );
}
