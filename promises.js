/*
Promises: A promise is an object in JavaScript that represent the result of an asynchronous operation, either
- success
- reject
- pending

*/

let success = true;

let promise = new Promise((resolve, reject) => {
  //async task here

  if (success) {
    resolve("Task completed!");
  } else {
    reject("Task failed.");
  }
});

promise
  .then((res) => {
    console.log("Success: ", res);
  })
  .catch((err) => {
    console.log("Error: ", err);
  });

//promise chain

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => res.json()) // convert raw response to JS object
  .then((data) => {
    console.log("Post Details: ", data);
  })
  .catch((err) => {
    console.log("Fetch failed: ", err);
  });
