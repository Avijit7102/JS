/*

API call chaining(Multiple API calls):
Means:
- You call one API
- wait for its response
- Use that response to call another API
- And so on...

*/

async function getUserAndPost() {
  try {
    const userRes = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const user = await userRes.json();
    console.log("user: ", user.name);
    //console.log("street: ", user.address.street);

    const url = "https://jsonplaceholder.typicode.com/posts";
    const postRes = await fetch(`${url}/${user.id}`);
    const post = await postRes.json();
    console.log("post: ", post);
  } catch (err) {
    console.log("Error: ", err);
  }
}

getUserAndPost();
