/*
* this keyword refers to the object that called the method.

* method is a function that is defined inside the object.

* why we use this keyword?
=> This keyword we use to refer to the object that is calling the method. It helps to write the reusable and dynamic code.

*/

const user = {
  name: "Avijit",
  age: 31,
  greet: function () {
    console.log(`Hello from ${this.name}`);
  },
};

user.greet(); // "Hello from Avijit"

let student = {
  name: "Alice",
  age: 21,
  address: {
    street: "123 main st",
    city: "flushing",
    zipCode: "123",
  },
  courses: ["JS", "HTML", "CSS"],
};

console.log(student.name);
console.log(student.address.city);

student.address.city = "Chicago";

for (let key in student.address) {
  console.log(`${key}: ${student.address.key}`);
}

// Step 1: Create the storeInventory object
let storeInventory = {
  electronics: ["Laptop", "Smartphone", "Headphones"],
  clothing: ["T-Shirt", "Jeans", "Jacket"],
};

for (let category in storeInventory) {
  console.log(`${category}`);

  for (let item of storeInventory[category]) {
    console.log(`${item}`);
  }
}

// Common built in methods in JS

const person = {
  firstName: "Avijit",
  lastName: "Das",
  age: 31,
  occupation: "Developer",
};

//Obeject.keys()  returns array of property names

console.log(Object.keys(person));

//object.values()  returns an array of values of the objects properties

console.log(Object.values(person));

//object.entries()  returns an array of key-value pairs, each as a small array

console.log(Object.entries(person));

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

console.log(rollDice());
