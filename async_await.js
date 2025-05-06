/*
async/await is syntactic sugar over promises. It helps you to write asynchronous code
that looks synchronous, making it easier to read and maintain.


Basic Rules:
- async before a function to make it return a Promise
- await inside an async function to pause execution until the Promise resolves.

*/

async function getPost() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data = await response.json();
    console.log("Post Title: ", data.title);
  } catch (err) {
    console.log("Fetch failed: ", err);
  }
}
getPost();

/*
1) fetch(...) returns a Promise
2) await pauses getPost() until the fetch finishes.
3) await response.json() pauses again until the JSON is fully parsed.
4) if anything goes wrong, catch handles the error.


Note: The fetchData function is asynchronous. It pauses execution at the await statement until the fetch promise resolves. If the fetch request fails, the catch block handles the error.

*/
