// 1. for Loop

for (let i = 0; i < 5; i++) {
  console.log(i);
}

//  2. while Loop

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// 3. do...while Loop
// This will run at least once, even if the condition is false!

let j = 0;
do {
  console.log(i);
  i++;
} while (j < 5);

// 4. for...of (arrays, strings, etc.)
const colors = ["red", "blue", "orange", "green"];
for (let color of colors) {
  console.log(color);
}

// 5. for...in (objects)
const person = {
  name: "Alice",
  age: 25,
};
for (let key in person) {
  console.log(key, person[key]);
}
