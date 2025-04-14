// A function is a reusable block of code that performs a task.

// 1. Function Declaration

function greet(name) {
  return "`Hello, ${name}`";
}
console.log(greet("alice"));

// 2. Function Expression

const greet = function (name) {
  return `Hello, ${name}`;
};

// 3. Arrow Functions (ES6)
const greet = (name) => `Hello, ${name}`;

// 4. Anonymous Functions,  Functions without names — often passed as arguments:

setTimeout(function () {
  console.log("This runs later");
}, 1000);

//  5. Parameters vs Arguments
function sayHi(name) {
  //name = parameter
  console.log("Hi, name");
}
sayHi("Bob"); // Bob = argument
