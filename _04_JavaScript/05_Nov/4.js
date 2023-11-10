/* 

Problem Statement 4

Use a ternary operator to check that a person is eligible to vote or not by checking his age. If the age of the
person is less than 18 then “You cannot vote” should be logged else “You can vote” should be logged.

*/

// Solution 4

let age = 20;
let vote = age < 18 ? "You cannot vote" : "You can vote";
console.log(vote); // You can vote