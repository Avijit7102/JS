/*
Final Challenge: Build a Simple Calculator
In this challenge, you’ll create a calculator using functions to perform basic arithmetic operations. Your calculator will handle addition, subtraction, multiplication, and division.

Instructions:
Create four functions: add, subtract, multiply, and divide. Each function should take two numbers as parameters and return the result.
Write a calculator function that takes three parameters:
Two numbers.
A string representing the operation (e.g., "add", "subtract").
Use a switch statement inside the calculator function to call the appropriate operation based on the input.
Test the calculator by calling it with different numbers and operations. Print the result to the console.


Bonus Challenge:
Add an arrow function version of one of the operations.
Handle edge cases, like dividing by zero, inside your divide function.

*/

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: can not divide by zero";
  }
  return a / b;
}

function calculator(num1, num2, operation) {
  switch (operation) {
    case "add":
      return add(num1, num2);
    case "subtract":
      return subtract(num1, num2);
    case "multiply":
      return multiply(num1, num2);
    case "divide":
      return divide(num1, num2);
    default:
      return "Invalid operation!";
  }
}

console.log(calculator(10, 5, "add")); // 15
console.log(calculator(10, 5, "subtract")); // 5
console.log(calculator(10, 5, "multiply")); // 50
console.log(calculator(10, 5, "divide")); // 2
console.log(calculator(10, 0, "divide")); // Error: Cannot divide by zero!
console.log(calculator(10, 5, "power")); // Invalid operation!
