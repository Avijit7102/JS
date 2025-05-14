/*
Scope determines where variables, functions and objects are accessible in your code.

1) Global Scope ---> Variables declared outside any function or block. Accessible anywhere.

2) Function Scope ---> Variables declared inside a function using var. Only accessible inside that function.

3) Block Scope ---> Variables declared with let or const inside {} (like loops, if statements). Only accessible inside that block.

4) Lexical Scope ---> A function can access variables from its outer function.


Summary Table:

var --> Function Scope --> Re-declarable --> Re-assignable

let --> Block Scope --> Not Re-declarable --> Re-assignable

const --> Block scope --> Not Re-declarable --> Not Re-assignable

*/

// 1) Global Scope

let name = "Avijit";

function greet() {
  console.log("Hello " + name);
}

greet(); // Hello Avijit

// 2) Function Scope

function sayHi() {
  var message = "Hi";
  console.log(message); // Hi
}

sayHi();

// 3) Block Scope

if (true) {
  let age = 25;
  const city = "NY";
  console.log(age, city); // 25 'NY'
}

//console.log(age); // Error: age is not defined
// var is not a blocked scope

// 4) Lexical Scope

function outer() {
  let outerVar = "I am from outside!";

  function inner() {
    console.log(outerVar); // // Access outer function's variable
  }

  inner();
}

outer(); // I am from outside!
