/* 

Q4. Discuss the precedence and associativity of operators in JavaScript. Why is understanding these concepts
important?

Answer: 

1. Operator Precedence:
Operator precedence determines the order in which operators are evaluated in an expression. Operators with higher precedence are evaluated first. For example, in the expression 2 + 3 * 4, multiplication (*) has higher precedence than addition (+), so the multiplication is performed first.

Some common operator precedence levels in JavaScript (from higher to lower precedence):

() (parentheses, highest precedence)
++ and -- (postfix increment/decrement)
++ and -- (prefix increment/decrement, logical NOT !, bitwise NOT ~, unary plus +, unary negation -, typeof, void, delete)
*, /, % (multiplication, division, remainder)
+, - (addition, subtraction)
<, <=, >, >=, instanceof, in (relational and membership operators)
==, !=, ===, !== (equality and inequality)
&& (logical AND)
|| (logical OR)
? : (ternary conditional)
=, +=, -=, *=, /=, %=, <<=, >>=, >>>=, &=, ^=, |= (assignment operators, lowest precedence)

2. Associativity:
Associativity determines the order in which operators of the same precedence are evaluated. It can be left-to-right or right-to-left. For example, the assignment operator (=) has right-to-left associativity, meaning expressions like a = b = c are evaluated from right to left.

Understanding these concepts is important for several reasons:

Correctness of Expressions:

Proper understanding ensures that expressions are evaluated in the intended order, preventing unintended bugs.
Clarity and Readability:

Explicitly using parentheses to override precedence can make code more readable and less prone to misinterpretation.
Avoiding Bugs:

Misunderstanding operator precedence and associativity can lead to subtle bugs that are challenging to identify and fix.
Consistency:

Following a consistent style and using parentheses when needed helps maintain a standardized and predictable coding style.
Learning Advanced Techniques:

*/