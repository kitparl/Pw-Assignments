/* 

Problem Statement 2
Describe the usage of the comma operator in JavaScript and provide an example.

*/

// Solution 2

// The comma operator evaluates each of its operands (from left to right) and returns the value of the last operand.
// Syntax: expression1, expression2, expression3, ... expressionN

// Example 2

let a = 10;
let b = (a++, 20);
console.log(a); // 11
console.log(b); // 20