/*
JavaScript becomes asynchronous with the help of 
- Web APIs (like setTimeOut, fetch)
- Promises
- Async/Await

Asynchronous JavaScript allows to perform long running task
(like fetching data/await) without blocking the execution of other 
code. This makes web application fast and responsive.

*/

console.log("Start");

setTimeout(() => {
  console.log("Time out done");
}, 1000);

console.log("End");
