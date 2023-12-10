/* Q4. Write a JavaScript function called calculateTax that takes an income as an argument and returns the
amount of tax to be paid. Use a closure to handle different tax rates based on income ranges. Test the
function with various incomes. */

function calculateTax(income) {
    if (income <= 18200) {
        return 0;
    } else if (income <= 37000) {
        return (income - 18200) * 0.19;
    } else if (income <= 87000) {
        return (income - 37000) * 0.325 + 3572;
    } else if (income <= 180000) {
        return (income - 87000) * 0.37 + 19822;
    } else {
        return (income - 180000) * 0.45 + 54232;
    }
}

console.log(calculateTax(1000)); // 0
console.log(calculateTax(20000)); // 342
console.log(calculateTax(50000)); // 4547