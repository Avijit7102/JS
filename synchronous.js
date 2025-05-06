/*

JavaScript is single threaded language and synchronous by default.
Meaning it executes one line of code at a time, in order and blocks
the next line until the current one finishes.

JavaScript becomes asynchronous with the help of 
- Web APIs (like setTimeOut, fetch)
- Promises
- Async/Await

*/

function boilWater() {
  console.log("Boiling water...");
}

function addPasta() {
  console.log("Adding pasta...");
}

function stirPasta() {
  console.log("Stirring pasta...");
}

boilWater();
addPasta();
stirPasta();
