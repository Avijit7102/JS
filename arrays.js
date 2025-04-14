/* An array is a data structure used to store multiple values in a single variable. 
Example: const fruits = ["apple", "banana", "cherry"];
Arrays are ordered, zero-indexed

*/

const fruits = ["apple", "banan", "cherry"];
console.log(fruits[0]); // "apple"
console.log(fruits[2]); // "cherry"

fruits[1] = "blueberry"; // modify arrays

console.log(fruits.length); // length

/*
Common Array Methods:

push()	------------> Adds item to end
pop()	------------> Removes item from end
unshift()------------> Adds item to start
shift()------------>	Removes item from start
slice(start, end)	------------> Returns a shallow copy of part of array
splice(start, deleteCount, ...itemsToAdd)	 ------------> Modifies array (add/remove items)
indexOf()	------------> Returns index of an item
includes()	------------> Checks if value exists in array

*/

// Engage and Apply: Task List Manager Challenge

// 1️⃣ Start with the following initial array:
let tasks = ["Do laundry", "Study JavaScript"];
console.log(tasks); // Output: ["Do laundry", "Study JavaScript"]
tasks.push("Walk the dog"); // Use push() to add "Walk the dog" to the end of the array.
tasks[1] = "Master JavaScript"; // Update "Study JavaScript" to "Master JavaScript" using index notation.
tasks.shift(); // Use shift() to remove the first task from the list since laundry is already done.
console.log(tasks);
