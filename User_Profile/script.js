async function fetchUserProfile() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await res.json();

    const profileHTML = `<p><strong>Name: </strong> ${data.name}</p>
        <p><strong>Email: </strong> ${data.email}</p>
        <p><strong>Phone: </strong> ${data.phone}</p>
        <p><strong>Company: </strong> ${data.company.name}</p>
        <p><em>Last updated: ${new Date().toLocaleTimeString()}</em></p>`;

    document.getElementById("profile").innerHTML = profileHTML;
  } catch (err) {
    document.getElementById(
      "profile"
    ).innerHTML = `<p style="color:red;">Failed to load profile.</p>`;
    console.log("Error fetching user: ", err);
  }
}

fetchUserProfile();
setInterval(fetchUserProfile, 5000);
