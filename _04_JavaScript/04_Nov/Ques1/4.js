/* 

Question 4: What is the purpose of declaring variables in JavaScript, and how do you declare them using the 
'let' keyword? 

Answer: In JavaScript, variables are used to store data values that can be used in a program. To declare a variable in JavaScript, you can use the var, let, or const keywords.


1. The var keyword is used to declare a variable, which has function scope or global scope. Function scope means that the variable is accessible within the function in which it is declared, as well as any nested functions. Global scope means that the variable is accessible throughout the entire program. Here's an example of declaring a variable using the var keyword:

var x = 10;

2. The let keyword is used to declare a block-scoped variable, which means that the variable is accessible within the block in which it is declared. Block-scoped variables are useful for creating local variables that are not accessible from outside the block. Here's an example of declaring a block-scoped variable using the let keyword:

function myFunction() {
  let y = 20;
  console.log(y);
}

myFunction(); // Output: 20
console.log(y); // Output: Uncaught ReferenceError: y is not defined

3. The const keyword is used to declare a block-scoped variable that cannot be reassigned. This is useful for creating constants that should not be changed during the program. Here's an example of declaring a constant using the const keyword:

const PI = 3.14159;
console.log(PI); // Output: 3.14159
PI = 3.14; // Output: Uncaught TypeError: Assignment to constant variable.

In general, it is recommended to use let or const instead of var to declare variables in JavaScript, as it helps to avoid variable hoisting and makes your code more readable and maintainable.


*/