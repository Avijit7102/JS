/*

length	-------------------------> Returns number of characters
toUpperCase()	-------------------------> Converts to all caps
toLowerCase()	-------------------------> Converts to lowercase
includes("text")	-------------------------> Checks if string contains given text
indexOf("text")	-------------------------> Finds position of text (-1 if not found)
slice(start, end)	-------------------------> Extracts part of the string
replace(old, new)	-------------------------> Replaces part of the string
trim()	-------------------------> Removes whitespace from both ends
split(delimiter)	-------------------------> Turns string into array based on delimiter
charAt(index)	-------------------------> Returns character at given index



What does .slice(start, end) do?
.slice() extracts a part of a string without modifying the original.

It takes:

start: the starting index (inclusive)

end: the ending index (exclusive)


*/

const text = "  JavaScript is awesome!  ";

console.log(text.length); // includes spaces
console.log(text.trim()); // removes outer spaces
console.log(text.toUpperCase()); // "JAVASCRIPT IS AWESOME!"
console.log(text.includes("awesome")); // true
console.log(text.indexOf("is")); // 13
console.log(text.slice(2, 13)); // "JavaScript"
console.log(text.replace("awesome", "powerful")); // "JavaScript is powerful!"
console.log(text.split(" ")); // breaks it into words

/*
Converting Arrays to Strings:
The .join() method converts an array into a single string.

*/

let fruits = ["apple", "banana", "grape"];
let list = fruits.join(", ");
console.log(list); // Output: "apple, banana, grape"
