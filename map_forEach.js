/*
map() creates a new array by applying a function to each element in the original array.
It returns a new array containing the transformed elements, leaving the original array unchanged.

*/

const nums = [1, 2, 3, 4, 5];

const results = nums.map((num) => {
  return num * 2;
});

console.log(results);

/*
✅ What is forEach()?
The .forEach() method executes a callback function once for each element in an array.

*/

const fruits = ["apple", "banana", "cherry"];

fruits.forEach(function (fruit) {
  console.log(fruit);
});

fruits.forEach((fruit, index) => {
  console.log(`${index} : ${fruit}`);
});
