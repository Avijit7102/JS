/*
A callback is a function passed as an argument to another function and it gets called back later or executed later.

Example: Think of it like a pizza delivery.
- you order a pizza (Function A)
- you give them your number(Call back function)
- Once the pizza is ready, they will call you back.


*/

function greet(name) {
  console.log("Hello, " + name + "!");
}
function processUser(callback) {
  const userName = "Avijit";
  callback(userName);
}
processUser(greet);

/*
What happened:
1) processUser receives a function greet as a parameter(thats the callback)
2) It calls greet with "Avijit" as the argument
3) The greet function runs and prints the greeting.
*/
