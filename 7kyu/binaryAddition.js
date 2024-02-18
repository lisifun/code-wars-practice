/*
Implement a function that adds two numbers together and returns their sum in binary. 
The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:

a = 1, b = 1 ==> "10" (1 + 1 = 2 in decimal or 10 in binary)
a = 5, b = 9 ==> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*/

function addBinary(a,b) { 
    return (a+b).toString(2)
}
