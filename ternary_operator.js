/* The ternary operator is a shorthand for an if-else statement.
 Syntax: 
            condition ? expressionIfTrue : expressionIfFalse;
*/

// Examples:

//Question 1: Basic Rewrite
let age = 17;
let canVote = age >= 18 ? "true" : "false";
console.log("canVote: ", canVote);

//Question 2: Inline Return
return speed > 100 ? "too fast" : "safe";

let score = 76;

// Question 3: Nested Logic
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
