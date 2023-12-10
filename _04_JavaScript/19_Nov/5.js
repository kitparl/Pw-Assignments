/* Q5. Write a JavaScript function called factorial that calculates the factorial of a non-negative integer using
recursion. Test the function with different inputs. */

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5)); // 120